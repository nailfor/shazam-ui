<script setup>
import VueTable from '@/Common/Components/VueTable.vue'
import items from './js/items.js'
import { useI18n } from 'vue-i18n'

const 
    { t } = useI18n({ useScope: 'global' })

const
    user = window.user || {
        name: '',
    }

const
    header = {
        id: t('root.info.header.0'),
        title: t('root.info.header.1'),
        count: t('root.info.header.2'),
    }
</script>

<template>
    <div class='Info'>
        <div class='header'>
            <h2>
                <span>{{ t('root.info.welcome') }}</span>
                <span>{{ user.name }}</span>
            </h2>
        </div>
        <div class='body'>
            <VueTable
                class='statistic'
                :header='header'
                :items='items' 
            />
        </div>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';

.Info {
    width: 16em;
    margin-left: 1em;

    .header {
        color: $dark;
        padding-left: 1em;
        h2 {
            font-weight: 100;
        }
    }
    
    .body {
        color: $dark;

        .statistic {
            margin: 1em 1em 0 1em;

            .rows_group {
                .tr {
                    border-bottom: 1px solid $light;
                    padding-bottom: 0.5em;
                    padding-top: 0.5em;

                    .id {
                        text-align: center;
                        span {
                            font-size: 10px;
                            font-size: 0.7em;
                            color: white;
                            background-color: $darkblue;
                            padding: 0.5em;
                            margin: 0.5em;
                            border-radius: 0.25em;
                        }
                    }

                    .count {
                        color: $seawave;
                    }
                }
            }
        }
    }
}
</style>
