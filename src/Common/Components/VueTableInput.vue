<script setup>
import InputComponent from './InputComponent.vue'
import VueTable from './VueTable.vue'

defineProps({
    items: {
        type: Array,
        required: true,
    }
})

const
    onChange = (e, val) => {
        if (val.type != 'date') {
            return
        }

        if (e.target.value) {
            e.preventDefault()
            return
        }
        val.data = e.target.value
    }
</script>

<template>
    <VueTable 
        class='table vue-input' 
        :items='items'
    >
        <template v-slot:column_input='v'>
            <div class='data'>
                <InputComponent 
                    :type='v.val.type'
                    :name='v.val.name' 
                    :value='v.val.value'
                    :select='v.val.select'
                    @change='onChange'
                />
            </div>
        </template>
    </VueTable>
</template>

<style lang='scss'>
@import '/resources/sass/_variables';

.vue-input
{
    .tr
    {
        .td
        {
            padding-bottom: 0.2em;
            padding-right: 1em;

            &.title {
                padding-top: 1em;
                padding-left: 1em;
            }

            &.input {
                flex: 9;

                .data
                {
                    width: 100%;

                    .field
                    {
                        padding: 1px 0px;
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>

