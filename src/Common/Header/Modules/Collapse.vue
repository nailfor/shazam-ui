<script setup>
import useEventBus from '@/composables/eventBus.js'

const 
    onClick = () => {
        const
            bus = useEventBus()
        
        bus.emit('sidebar:collapse')
    }
</script>

<template>
    <div class='Collapse'>
        <span 
            class='minimalize btn btn-primary'
            @click='onClick'
        >
            <i class='fa fa-bars'>...</i>
        </span>
    </div>
</template>

<style lang='scss'>

.Collapse {
    .minimalize {
        padding: 0.4em 0.8em;
        margin: 1em 0.4em 0.2px 0.5em;
    }
}
</style>