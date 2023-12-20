import api from './api.js'
import useReferenceStore from '@/stores/reference'

const
    stores = {}

const 
    dataStore = (name) => {
        const
            store = stores[name] || {
                state: (useReferenceStore(name))(),
                url: '',
                busy: false,
            },
            state = store.state

        stores[name] = store
            
        const
            success = (data) => {
                store.busy = false

                state.setItems(data.data)
                state.setMeta(data.meta)
            },
            isInit = () => !!store.url,
            load = (url) => {
                if (store.busy) {
                    return
                }
                if (isInit()) {
                    return Promise.resolve(state)
                }
                store.url = url

                store.busy = true
                const ref = window.references.find(i => i.id == name)
                state.setOptions(ref?.form?.property || {})

                return api
                    .get(url)
                    .then(success)
            }

        return {
            load,
            store: state,
            isInit,
        }
    }

export default dataStore
