<script setup>
import SiteHeader from './Common/Header/index.vue'
import SiteFooter from './Common/Footer/index.vue'
import SideBar from './Common/SideBar/index.vue'
</script>

<template>
    <div
        class='app-wrapper overflow'
    >
        <SideBar class='column' />
        <div class='column body'>
            <SiteHeader/>
        
            <main>
                <router-view
                    class='main'
                    :key='$route.path'
                />
            </main>

            <SiteFooter/>
        </div>
    </div>

</template>

<style lang='scss'>
@import 'resources/sass/app';

.app-wrapper {
    display: flex;
    height: 100%;

    .column {
        display: flex;
        flex-direction: column;

        &.body {
            position: relative;
            height: 100%;
            width: 100%;

            main {
                display: flex;
                height: 100%;
            }
        }
    }

    &.overflow {
        overflow: hidden;
    }
}
</style>
