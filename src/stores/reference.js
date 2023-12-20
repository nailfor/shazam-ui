import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const
    items = ref([]),
    meta = ref({}),
    options = ref({})

const
    getters = {
        getById: computed(() => ((id) => items.value.find(item => item.id == id))),
    }

const
    actions = {
        setItems: (i) => items.value = i,
        add: (el) => items.value.push(el),
        setMeta: (data) => meta.value = data,
        setOptions: (o) => options.value = o,
    }

const
    foo = () => {
        return {
            items,
            meta,
            options,
            ...getters,
            ...actions,
        }
    }

const
    useReferenceStore = (name) => defineStore(name, foo)

export default useReferenceStore
