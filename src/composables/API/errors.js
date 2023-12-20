//import { notify } from '@kyvg/vue3-notification'

export default (e, params) => {
    const r = e.response || {},
        d = r.data || {},
        err = Object.values(d).join(', ')

    /*
    notify({
        title: 'Ошибка',
        text: err || e.message,
        type: 'error'
    })
    */
}
