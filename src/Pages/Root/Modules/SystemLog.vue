<script setup>
import { ref } from 'vue'
import VueTable from '@/Common/Components/VueTable.vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios';

const 
    { t } = useI18n({ useScope: 'global' })

const
    show = ref(0)

const
    header = {
        date: t('root.syslog.event'),
        level: t('root.syslog.level'),
        line: t('root.syslog.line'),
        context: t('root.syslog.message'),
    },
    traceHeader = {
        line: 'Строка',
        in: 'Файл',
        caught_at: '',
    }


const
    onShow = () => {
        show.value = 1 - show.value
    },
    onShowTrace = (item) => {
        item.show = !item.show
    }

const
    items = ref([]),
    getItems = () => {
        axios
            .get('/ajax/systemlog')
            .then(r => {
                const
                    data = r.data.data
                items.value = Object
                    .keys(data)
                    .map(i => {
                        const 
                            event = data[i],
                            date = new Date(event.date)
                        return {
                            ...event,
                            line: event.context.line,
                            date: date.toLocaleString(),
                            show: false,
                        }
                    })
            })
    }

getItems()
</script>

<template>
    <div class='SystemLog'>
        <div class='header'>
            <h2>
                <span
                    class='cursor-pointer'
                    @click='onShow'
                >{{t('root.syslog.title')}}</span>
            </h2>
        </div>
        <div class='body'>
            <VueTable v-if='show'
                class='log'
                :header='header'
                :items='items'
            >
                <template #column_level='v'>
                    <span 
                        :class='v.val'
                    >!</span>
                </template>

                <template #column_context='v'>
                    <span
                        @click='onShowTrace(v.item)'
                    >{{ v.val.message }}</span>

                    <VueTable v-if='v.item.stack_traces && v.item.show'
                        :header='traceHeader'
                        :items='v.item.stack_traces'
                    />
                </template>
            </VueTable>
        </div>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';

.SystemLog {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.3em;

    .header {
        h2 {
            font-size: 1.2em;
            padding-left: 1em;
        }
    }

    .body {
        .log {
            position: absolute;
            top: 3em;
            right: 1em;
            left: 1em;
            height: calc(100% - 3em - 2em);
            border: 1px solid $lightwhite;
            overflow: overlay;

            .th {
                background-color: $lightwhite;
                border-radius: 0.25em;
                padding: 0.5em 0 0.5em;
            }

            .tr {
                border-bottom: 1px solid $lightwhite;
                .td {
                    padding: 0.5em 1em 0.5em;
                    border-left: 1px solid $lightwhite;
                }

                &:hover {
                    background-color: $light;
                    color: $dark;
                }

            }

            .level {
                flex: 1;

                span {
                    width: 1em;
                    border-radius: 1em;
                    text-align: center;

                    &.emergency {
                        background-color: brown;
                    }

                    &.alert {
                        background-color: red;
                    }

                    &.error {
                        background-color: orangered;
                    }

                    &.warning {
                        background-color: darkorange;
                    }

                    &.notice {
                        background-color: greenyellow;
                    }

                    &.info {
                        background-color: aqua;
                    }

                    &.debug {
                        background-color: royalblue;
                    }
                }

            }

            .line {
                flex: 0.5;
            }

            .context {
                flex: 10;

                >span {
                    cursor: pointer;
                }

                .VueTable {
                    font-size: 0.7em;

                    .in {
                        flex: 5;
                    }

                    .caught_at {
                        flex: 5;
                    }
                }
            }

        }
    }
}
</style>
