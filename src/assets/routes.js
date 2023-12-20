const
    getRoutes =  () => {
        const
            files = import.meta.glob('./routes/*.route.js',{ eager: true }),
            routes = Object.values(files),
            res = []

        routes.forEach(module => res.push(...module.default))

        return res
    }

export default getRoutes()
