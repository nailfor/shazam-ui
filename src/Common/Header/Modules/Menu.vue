<script setup>
import ListComponent from '@/Common/Components/ListComponent.vue'
import topMenu from '../js/topMenu.js'
</script>

<template>
    <div class='Menu'>
        <ListComponent 
            class='flex right'
            :items='topMenu'
        />
    </div>
</template>

<style lang='scss'>

.Menu {
    margin-left: auto;

    .flex {
        gap: 0.3em;
    }
}
</style>