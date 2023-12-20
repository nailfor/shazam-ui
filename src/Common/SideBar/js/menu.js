const 
    menu = [
        {
            title: 'Dashboard',
            items: [
                {
                    title: 'Статистика',
                    url: '/stats',
                },
                {
                    title: 'Нагрузка',
                    url: '/loadavg',
                },
            ]
        },
        {
            title: 'Справочники',
            items: window.references.filter(i => i.component == 'reference')
        },        
    ]

export default menu