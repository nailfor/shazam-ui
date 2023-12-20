<script setup>
import Info from './Modules/Info.vue'
import Chart from './Modules/Chart.vue'
import Health from './Modules/Health.vue'
import SystemLog from './Modules/SystemLog.vue'
</script>

<template>
    <div class='Root Controller'>
        <div class='header'>
            <Info />
            <Chart />
            <Health />
        </div>
        <div class='body'>
            <SystemLog />
        </div>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';

.Root {
}
</style>
