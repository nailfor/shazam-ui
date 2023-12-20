<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js'
import chartData from './js/data.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend)

const
    chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Products & Categories'
            },
        },
    }
</script>

<template>
    <div class='Chart'>
        <Line
            class='LineChart'
            :options='chartOptions'
            :data='chartData'
        />
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';

.Chart {
    padding-right: 1em;    

    .LineChart {
        height: 20em;
    }
}
</style>
