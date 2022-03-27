const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'The socks is color green',
            value: '29',
            image: './assets/images/socks_green.jpg',
            url: 'www.google.com',
            inventory: 100,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'}
            ],
            sizes: ['small', 'medium', 'large']
        }
    }
})
