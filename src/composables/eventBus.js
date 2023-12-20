const bus = new Map()

const 
    on = (event, callback) => {
        let cbs = bus.get(event)
        if (!cbs) {
            cbs = []
            bus.set(event, cbs)
        }
        cbs.push(callback)
    },
    emit = (event, ...args) => {
        const cbs = bus.get(event) || []
        cbs.forEach(c => c(args))
    },
    useEventsBus = () => {
        return {
            on,
            emit,
            bus,
        }
    }

export default useEventsBus
