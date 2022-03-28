const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'The socks is color green',
            value: '29',
            selectedVariant: 0,
            inventory: 12,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
            ],
            sizes: ['small', 'medium', 'large']
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.inventory -= 1
        },
        updateVariant(index) {
            this.selectedVariant = index
            //console.log(index)
            
        },
        removeFromCart() {
            this.cart -= 1
            this.inventory += 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})
