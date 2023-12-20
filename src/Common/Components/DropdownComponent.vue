<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
    },
    selected: {
        type: Number,
        required: false,
        default: 0,
    }
})
</script>

<template>
    <div class='DropdownComponent'>
        <select>
            <template v-for='v in items'
            >
                <option
                    :selected='v==selected'
                    :value='v'
                >{{ v }}</option>
            </template>
        </select>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';
$border: 1px solid $light;

.DropdownComponent {
    display: flex;

    select {
        width: 100%;
        color: $dark;
        background-color: $lightwhite;
        cursor: pointer;

        &:focus {
            outline: unset;
        }
    }
}
</style>