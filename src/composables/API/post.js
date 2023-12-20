import error from './errors.js'

export default (href, params, options = {}) => {
    return new Promise((resolve, reject) => {
        axios
            .post(
                href,
                params,
                options
            )
            .then((r) => {
                r.data.headers = r.headers
                resolve(r.data)
            })
            .catch(e => {
                error(e, params)
                reject(e)
            })
    })
}
