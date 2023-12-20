import componentReference from '@/Pages/Reference/ReferenceController.vue'
import componentEdit from '@/Pages/Reference/ReferenceEditController.vue'

const
    components = {
        reference: componentReference,
        edit: componentEdit,
    }

const
    references = window.references || [],
    routes = [],
    getRoute = (ref) => {
        const
            key = ref.component

        return {
            path: ref.url,
            component: components[key] || key,
            name: ref.name || ref.id,
            props: {
                id: ref.id,
                ...ref.property,
            },
        }
    }
    
    references.forEach(ref => {
        routes.push(getRoute(ref))

        const
            form = {...ref, ...ref.form}
            form.url += '/:id'
            form.name = ref.id + '.id'
            form.property = ref.property

        routes.push(getRoute(form))
    })

export default routes
