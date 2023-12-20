<script setup>
import {ref} from 'vue'
import DropdownComponent from './DropdownComponent.vue'
import {useI18n} from 'vue-i18n'

const {t} = useI18n({useScope: 'global'})

const
    props = defineProps({
        title: {
            type: String,
            default: '',
        },
        name: String,
        accept: String,
        type: {
            type: String,  
            default: 'text',
        },
        select: Array,
        id: Number,
        placeholder: {
            required: false,
            default: '',
        },
        value: {
            required: false,
        },
        hint: String,
        disabled: {
            type: Boolean,
            default: false,
        },
    }),
    emit = defineEmits([
        'change',
    ])

const
    input = ref('')

const
    onChange = (e) => {
        if (props.type == 'file') {
            return emit('change', e)
        }

        emit('change', e.target.value)
    },
    validate = (e) => {
        const event = e || window.event,
            key = event.keyCode || event.which,
            regex = /[0-9]|\./
        
        if (key == 13) {
            emit('change', event.target.value)
            return;
        }

        if (!regex.test(String.fromCharCode(key))) {
            event.returnValue = false
            if (event.preventDefault) {
                event.preventDefault()
            } 
        }
    }

defineExpose({
    input,
})

</script>

<template>
    <div class='input-component' v-show='type!="hidden"'>
        <slot
            name='title'
        >
            <div class='title'>
                <span>{{ title ? t(title) : ''}}</span>
            </div>
        </slot>
        <div class='body'>
            <textarea v-if='type=="textarea"' 
                    class='field' 
                    :name='name'
                    :placeholder='placeholder'
                    @change='onChange'
            >
                {{value}}
            </textarea>


            <DropdownComponent v-if='select'
                class='input'
                :name='name'
                :items='select'
                :selected='value'
                @change='onChange'
            />
            
            <input v-else-if='type === "number"'
                class='input'
                :name='name'
                :type='type'
                :value='value'
                :placeholder='placeholder'
                @change='onChange'
                @keypress='validate(e)'
            />

            <input v-else
                ref='input'
                class='input'
                :accept='accept'
                :name='name'
                :type='type'
                :value='value'
                :placeholder='placeholder'
                :disabled='disabled'
                @change='onChange'
            />
            
            <div v-if='hint'
                class='hint' 
            >
                <span>{{hint}}</span>
            </div>
            
            <slot name='after' />
        </div>
    </div>
</template>

<style lang='scss'>
@import 'resources/sass/_variables';

.input-component {
    flex: 0 1 33.7em;
    margin-bottom: 0.9em;

    .title {
        color: lightgray;
        margin-bottom: 0.3em;
    }

    .body {
        height: 100%;
        width: 100%;
        
        .input {
            background-color: white;
            height: 2.5em;
            width: 100%;
            color: $dark;
            border-radius: 0.6em;
            border: 1px solid lightgray;
            text-indent: 0.5em;

            select {
                background-color: transparent;
                border: none;
            }
        }
        
        .hint {
            font-size: 0.8em;
            margin-top: 0.2em;
            color: $light;
        }

        .m-select{
            width: 8.5em;
        }
    }

    .m-phone-number-input__country-flag {
        top: 50%;
        transform: translateY(-50%);
        bottom: 0;
    }
}
</style>
