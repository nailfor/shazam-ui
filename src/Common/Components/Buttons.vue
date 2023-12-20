<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
    }
})
</script>

<template>
    <div class='Buttons'>
        <div v-for='item in items'
            class='cursor-pointer'
        >
            <span>{{ item.title || item }}</span>
        </div>        
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';
$border: 1px solid $light;

.Buttons {
    display: flex;

    >div {
        padding: 0.5em 0.65em;
        flex: 1;
        border: $border;

        &:first-child {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        &:last-child {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }

        &:hover {
            background-color: $light;
        }
    }
}
</style>