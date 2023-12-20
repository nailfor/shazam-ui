<script setup>
import Collapse from './Modules/Collapse.vue'
import Menu from './Modules/Menu.vue'
</script>

<template>
    <header class='Header'>
        <Collapse />
        <Menu class='menu' />
    </header>
</template>

<style lang='scss'>
@import 'resources/sass/variables';

.Header {
    position: relative;
    top: 0;
    display: flex;
    background: $lightwhite;
    padding: 1em;

    .menu {
        .cursor-pointer {
            &:hover {
                color: black;
                text-shadow: 0.2em 0.2em 0.2em $seawave;
            }
        }
    }
}
</style>
