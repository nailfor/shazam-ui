<script setup>
import { ref } from 'vue'
import {useRouter, useRoute} from 'vue-router'
import menu from './js/menu.js'
import ListComponent from '@/Common/Components/ListComponent.vue'
import useEventBus from '@/composables/eventBus.js'

const
    router = useRouter()

const
    collapse = ref(0),
    {on} = useEventBus()

const
    onCollapse = () => {
        collapse.value = 1 - collapse.value
    },
    onSelect = (item) => {
        router.push({
            path: item.url
        })
    }

on('sidebar:collapse', onCollapse)

</script>

<template>
    <nav
        class='SideBar'
        :class='{collapse: collapse}'
    >
        <ListComponent
            class='menu'
            :items='menu'
            @select='onSelect'
        />
    </nav>
</template>

<style lang='scss'>
@import 'resources/sass/variables';

.SideBar {
    width: 10em;
    background-color: $sidebar;

    &.collapse {
        width: 5em;
    }

    .menu {
        >li {
            padding: 0.2em;
        }

        .cursor-pointer {
            &:hover {
                color: white;
            }
        }
    }
}
</style>
