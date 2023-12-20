<script setup>

const 
    company = window.company || 'AWG',
    url = window.companyUrl || 'https://www.awg.ru'

const 
    onClick = () => {
        window.open(url)
    }
</script>

<template>
    <div class='Logo'
        @click='onClick'
    >
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 50"
            class='title glow'
        >
        <defs>
            <filter id='wavy'>
                <feTurbulence baseFrequency='0.004' numOctaves='5' seed='2'>
                    <animate attributeName='baseFrequency' dur='10s' values='0.01;0.005;0.01' repeatCount='indefinite' />
                </feTurbulence>
                <feDisplacementMap in='SourceGraphic' scale='30' />
            </filter>
            <filter id="blurMe">
                <feGaussianBlur stdDeviation="2" />
            </filter>
            <linearGradient id="blink" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="40%" stop-color="white">
                </stop>
                <stop offset="45%" stop-color="red" stop-opacity="0.5">
                    <animate attributeName="stop-color" values="red; orange; red;" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="55%" stop-color="orange">
                    <animate attributeName="stop-color" values="orange; red; orange" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="60%" stop-color="white">
                </stop>
                <stop offset="65%" stop-color="orange" stop-opacity="0.5">
                    <animate attributeName="stop-color" values="orange; red; orange" dur="2s" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="70%" stop-color="white">
                </stop>

                <animate attributeName="x1" from="100%" to="-200%" dur="2s" repeatCount="indefinite"></animate>
                <animate attributeName="x2" from="200%" to="-100%" dur="2s" repeatCount="indefinite"></animate>
            </linearGradient>
            

        </defs>
        <g>
            <text x="0.9em" y="0.6em" style="filter: url(#wavy) url(#blurMe)">{{company}}</text>
            <text x="1em" y="1.3em" class='blink'>{{company}}</text>
        </g>
        </svg>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';

.Logo {
    height: 1.8em;
    display: flex;

    .title {
        user-select: none;
        font-weight: bold;
        font-size: 2em;

        .blink {
            fill: white;
            &:hover {
                fill: url(#blink);
            }
        }

        animation: hue 5s linear infinite;
    }
    
    &:hover {
        cursor: pointer;
        
    }
    @keyframes hue {
        0%
        {
            fill: red;
        }
        25%
        {
            fill: orange;
        }
        75% {
            fill: yellow;
        }
        100%
        {
            fill: red;
        }                
    }
}
</style>
