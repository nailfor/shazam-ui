<script setup>
import ListComponent from './ListComponent.vue'

defineProps({
    items: {
        type: Array,
        required: true,
    }
})

const
    emit = defineEmits([
        'select',
    ])

const
    onClick = (item) => {
        if (item.items) {
            return
        }

        emit('select', item)
    }
</script>

<template>
    <ul class='ListComponent'>
        <li v-for='item in items'>
            <span v-if='item.items'
                class='fa-icon'
            ></span>
            <span 
                :class='["cursor-pointer", item.class || ""]'
                @click='onClick(item)'
            >{{item.title || item}}</span>
            
            <template v-if='item.items'>
                <span class='fa arrow right'></span>
                <ListComponent
                    class='sublist'
                    :items='item.items' 
                    @select='$emit("select", $event)'
                />
            </template>
        </li>        
    </ul>
</template>

<style lang='scss'>
@import 'resources/sass/variables';

.ListComponent {
    color: $sidebar-inactive;
    padding-left: 0;
    margin-bottom: 0;
    margin-block-start: 0;
    list-style: none;
    
    .sublist {
        li {
            margin-top: 0.5em;

            span {
                padding-left: 1em;
            }
        }
    }

    .arrow {
        &:before {
            content: "\f104";        
        }
    }

    .cursor-pointer {
        &:hover {
            text-shadow: 0.2em 0.2em 0.2em $lightwhite;
        }
    }
}
</style>