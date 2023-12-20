<script setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import requests from './js/requests.js'
import { useI18n } from 'vue-i18n'

const 
    { t } = useI18n({ useScope: 'global' })

ChartJS.register(ArcElement, Tooltip, Legend)

const
    chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    }
</script>

<template>
    <div class='Health'>
        <div class='header'>
            <h2>{{ t('root.health.status') }}</h2>
        </div>
        <Doughnut
            class='Chart'
            :options='chartOptions'
            :data='requests'
        />
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';

.Health {
    height: 15em;

    .header
    {
        text-align: center;

        h2 {
            color: $dark;
        }
    }
}
</style>
