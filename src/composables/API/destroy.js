import error from './errors.js'

export default (href, params) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(href, {
                params: params
            })
            .then((r) => {
                resolve(r.data)
            })
            .catch(e => {
                error(e, params)
                reject(e)
            })
    })
}
