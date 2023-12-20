<script setup>
import { ref, useSlots } from 'vue'
import VueTable from './VueTable.vue'

const
    emit = defineEmits([
        'row',
        'cell',
    ]),
    slots = useSlots()

const 
    props = defineProps({
        items: {
            required: true,
        },
        header: {
            required: false,
        },
        level: {
            default: 0,
            required: false,
        },
        recursive: {
            default: false,
            required: false,
        },
        span: {
            default: true,
            required: false,
        },
        th: {
            default: false,
            required: false,
        },
    })

const
    i = props.header || props.items[0] || {},
    columns = ref(Object.keys(i)),
    CLASS = ref({
        HEADER: 'th',
        ROW: 'tr',
        COLUMN: 'td',
    })

const
    onRow = (item, row) => {
        emit('row', {item: item, row: row})
    },
    onCell = (item, row, col) => {
        emit('cell', {item: item, row: row, col: col})
    },
    inRecursive = (val) => {
        return props.recursive && Array.isArray(val)
    },
    isslots = (name) => {
        const col=`column_${name}`
        return !!slots[col]
    }

if (props.th) {
    CLASS.value.HEADER = props.th
}

</script>

<template>
    <div class='VueTable'>
        <template v-if='header'>
            <div :class='CLASS.HEADER'>
                <div v-for="col in columns" :class='[CLASS.COLUMN, col]'>
                    <slot
                        name='headerColumn'
                        v-bind:col='col'
                        v-bind:val='header[col]'
                        v-bind:level='level'
                    >
                        <span v-if='span'>
                            {{ header[col] }}
                        </span>
                        <template v-else>
                            {{ header[col] }}
                        </template>                        
                    </slot>

                </div>
            </div>
        </template>
        <div :class='["rows_group", CLASS.ROWS]'>
            <div v-for='(item,row) in items'
                ref='rows'
                :class='[CLASS.ROW, item._class_selected]'
                :tabindex='row'
                :key='item.id'
                :data-key='item.id'
                @click='onRow(item, row)'
            >
                <slot
                    name='preCol'
                    v-bind:prev='items[row-1] || 0'
                    v-bind:item='item'
                />
                <div v-for='col in columns'
                    :key='[item.key,col]'
                    :class='[CLASS.COLUMN, col]'
                    @click='onCell(item, row, col)'
                >
                    <template v-if='inRecursive(item[col])'>
                        <VueTable
                            :class='["table", col]'
                            :items='item[col]'
                            :level='level+1'
                            :span='span'
                        />
                    </template>
                    <template v-else>
                        <slot v-if='!isslots(col)'
                            name='column'
                            v-bind:prev='items[row-1] || 0'
                            v-bind:item='item'
                            v-bind:col='col'
                            v-bind:row='row'
                            v-bind:val='item[col]'
                            v-bind:level='level'
                        >
                            <span v-if='span'>{{ item[col] }}</span>
                            <template v-else>
                                {{ item[col] }}
                            </template>
                        </slot>

                        <slot
                            :name='"column_"+col'
                            v-bind:item='item'
                            v-bind:col='col'
                            v-bind:row='row'
                            v-bind:val='item[col]'
                            v-bind:level='level'
                        />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.VueTable
{
    display: flex;
    flex-direction: column;

    .th,.tr {
        display: flex;
        gap: 0.2em;
    }

    .th {
        .td {
            text-align: center;
        }
    }

    .rows_group {
        display: flex;
        flex-direction: column;
    }

    .td {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>
