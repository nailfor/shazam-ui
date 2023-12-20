import error from './errors.js'

export default (href, params, headers = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .get(href, {
                params,
                headers,
            })
            .then(r => {
                resolve(r.data)
            })
            .catch(e => {
                error(e, params)
                reject(e)
            });
    })
}
