<script setup>
import Logo from './Modules/Logo.vue'

const 
    dt = new Date(),
    date = dt.getFullYear()
</script>

<template>
    <footer class='Footer'>
        <div class='middle'>
            <strong>Copyright </strong> 
        </div>
        <div class='middle'>
            <span class='copyright'>© {{date}}</span>
        </div>

        <Logo />
    </footer>
</template>

<style lang='scss'>
@import 'resources/sass/variables';

.Footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5em 1em;
    color: $sidebar-inactive;
    font-size: 0.8em;
    background-color: $footer; //$footer;
    display: flex;
    gap: 0.2em;

    .middle {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
