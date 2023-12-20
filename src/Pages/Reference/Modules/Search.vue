<script setup>
import { useI18n } from 'vue-i18n'
import Buttons from '@/Common/Components/Buttons.vue'
import DropdownComponent from '@/Common/Components/DropdownComponent.vue'
import types from '../js/export.js'
import perPage from '../js/perPage.js'

const 
    { t } = useI18n({ useScope: 'global' })

defineProps({
    meta: {
        type: Object,
        required: true,
    }
})

</script>

<template>
    <div class='Search'>
        <div class='header flex'>
            <div class='page flex'>
                <div class='text'>
                    <span>{{ t('reference.search.show') }}</span>
                </div>
                <DropdownComponent
                    :items='perPage'
                    :selected='meta.perPage'
                />
                <div class='text'>
                    <span>{{ t('reference.search.entries') }}</span>
                </div>
            </div>
            <div class='search flex'>
                <input 
                    type='search'
                    :placeholder='t("reference.search.title")'
                />
                <Buttons :items='types' />
            </div>
        </div>
        <div>
            <span>{{ t('reference.search.showing') }}</span>
            <span>{{ meta.page }}</span>
            <span>{{ t('reference.search.from') }}</span>
            <span>{{ meta.totalPage }}</span>
            <span>{{ t('reference.search.pages') }}</span>
        </div>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/variables';
$border: 1px solid $light;

.Search {
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    margin-bottom: 0.2em;

    >.header {
        .flex {
            flex: 1;

            &.page {
                .DropdownComponent {
                    width: 4em;
                    margin-right: 0.4em;
                }

                .text {
                    padding-top: 0.5em;

                    &:last-child {
                        margin-left: 0.2em;
                    }

                    span {
                        vertical-align: middle;
                    }
                }
            }

            &.search {
                justify-content: flex-end;
                >* {
                    margin-right: 0.5em;
                }

                input {
                    border: $border;
                    
                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }

    span {
        padding-right: 0.4em;
    }
}
</style>
