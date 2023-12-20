<script setup>
import Search from './Search.vue'
import VueTable from '@/Common/Components/VueTable.vue'
import useStore from '@/composables/storage'

const 
    props = defineProps({
        header: {
            type: Object,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    })

const
    storage = useStore(props.name),
    store = storage.store

const
    header = {
        ...props.header,
        do: '',
    }
</script>

<template>
    <div class='ReferenceTable'>
        <div class='header'>
            <Search 
                :meta='store.meta'
            />
        </div>
        <div class='body'>
            <VueTable
                class='list'
                :header='header'
                :items='store.items'
                @row='$emit("row", $event)'
            />
        </div>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';
$border: 1px solid $light;

.ReferenceTable {
    height: 100%;
    padding: 0.5em;

    >.body {
        height: 100%;

        .list {
            height: calc(100% - 21em - 2em);
            font-size: 0.8em;
            overflow: overlay;

            .th {
                border-top: $border;
                font-weight: bold;
            }

            .th,.tr {
                border-bottom: $border;
                border-right: $border;
                line-height: 2em;

                .td {
                    border-left: $border;
                    
                    span {
                        padding-left: 0.5em;
                    }
                }
            }

            .tr {
                &:nth-child(2n+1) {
                    background-color: $lightwhite;
                }

                &:hover {
                    background-color: $light;
                }
            }
        }
    }
}
</style>
