<script setup>
import { ref, computed } from 'vue'
import Buttons from '@/Common/Components/Buttons.vue'
import VueTableInput from '@/Common/Components/VueTableInput.vue'
import formButtons from './js/formButtons.js'
import useStore from '@/composables/storage'

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
    storage = useStore(props.id),
    store = storage.store

const
    item = ref({})

storage
    .load(props.url)
    .then(() => item.value = store.getById(1))

const
    mapper = (key) => {
        const
            opt = store.options[key]

        if (typeof opt == 'object') {
            return opt
        }

        const
            value = item.value || {}

        return {
            title: opt,
            input: {
                type: 'text',
                name: key,
                value: value[key] || '',
            },
        }
    },
    doc = computed(() => Object
            .keys(store.options)
            .map(mapper)
        )

</script>

<template>
    <div class='ReferenceEdit Controller'>
        <div class='header'>
        </div>
        <div class='body'>
            <form>
                <VueTableInput :items='doc'/>
            </form>
            <div class='footer'>
                <Buttons :items='formButtons'/>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';
$border: 1px solid $light;

.ReferenceEdit.Controller {
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

        .footer {
            display: flex;
            width: 15em;
            margin-left: auto;
            margin-right: 1em;

            >div {
                gap: 0.1em;

                div:first-child {
                    color: $darkblue;
                }

            }
        }
    }
}
</style>
