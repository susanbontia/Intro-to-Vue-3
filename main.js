const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'The socks is color green',
            value: '29',
            image: './assets/images/socks_green.jpg',
            url: 'www.google.com',
            inventory: 12,
            onSale: false,
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            sizes: ['small', 'medium', 'large']
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
            this.inventory -= 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
            
        },
        removeFromCart() {
            this.cart -= 1;
            this.inventory += 1;
        }
    }
})
