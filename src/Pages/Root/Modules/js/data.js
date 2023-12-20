const DATA_COUNT = 12,
    MAX_P = 1e4,
    MAX_C = 1e3

const labels = [],
    Products = [],
    Categories = []
for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
    Products.push((Math.random() * MAX_P)|0)
    Categories.push((Math.random() * MAX_C)|0)
}    

const data = {
    labels: labels,
    datasets: [
            {
                label: 'Products',
                data: Products,
                borderColor: '#1ab394',
                fill: true,
                cubicInterpolationMode: 'monotone',
                tension: 0.9,
            }, 
            {
                label: 'Categories',
                data: Categories,
                borderColor: '#1C84C6',
                fill: true,
                cubicInterpolationMode: 'monotone',
                tension: 0.9,
            }, 
        ]
    }

export default data