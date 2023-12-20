<script setup>
import { useI18n } from 'vue-i18n'

const 
    { t } = useI18n({ useScope: 'global' })

defineProps({
    path: {
        type: Object,
        required: true,
    }
})

</script>

<template>
    <div class='Breadcrumbs'>
        <span v-for='(item, key) in path'
            class='path'
        >
            <a :href='item.url'>{{ item.title }}</a>
            <span v-if='key != path.length-1'>/</span>
        </span>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';
$border: 1px solid $light;

.Breadcrumbs {
    display: flex;

    .path {
        span,a {
            color: $dark;
            padding-right: 0.4em;
        }

        a {
            &:last-child {
                font-weight: bold;
            }
        }
    }
}
</style>
