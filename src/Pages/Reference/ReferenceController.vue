<script setup>
import {useRouter, useRoute} from 'vue-router'
import Breadcrumbs from './Modules/Breadcrumbs.vue'
import ReferenceTable from './Modules/ReferenceTable.vue'
import useStore from '@/composables/storage'

const
    router = useRouter(),
    route = useRoute()

const
    props = defineProps({
        id: {
            type: String,
            required: false,
        },
        breadcrumbs: {
            type: Array,
            required: false,
        },
        header: {
            type: Object,
            required: false,
        },
        title: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: false,
        },
    })

const
    onRow = (row) => {
        const
            id = row.item.id
        router.push({
            path: `${route.path}/${id}`
        })
    }

const
    storage = useStore(props.id)

storage.load(props.url)

</script>

<template>
    <div class='Reference Controller'>
        <div class='header'>
            <h2>{{ title }}</h2>
            <Breadcrumbs :path='breadcrumbs' />
        </div>
        <div class='body'>
            <ReferenceTable 
                :header='header'
                :name='id'
                @row='onRow'
            />
        </div>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';
$border: 1px solid $light;

.Reference.Controller {
    background-color: $lightwhite;
    color: $dark;

    >.header {
        flex-direction: column;
        background-color: white;
        border: $border;
        padding: 1em;

        h2 {
            font-weight: normal;
        }
    }

    >.body {
        background-color: white;
        margin: 1em;
    }
}
</style>
