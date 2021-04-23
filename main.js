const app = Vue.createApp({
    data(){
        return{
            product:'Socks',
            description:'Lorem ipsum dolor',
            // image:'./assets/images/socks_green.jpg',
            selectedVariant:0,
            url:'google.com',
            // inStock:true,
            // inventory:0,
            onSale:true,
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                {id:2234,color:'green', image:'./assets/images/socks_green.jpg',quantity:50},
                {id:2235,color:'blue', image:'./assets/images/socks_blue.jpg',quantity:0}],
            cart:0,
            brand:'Vue mastery',
        }
    },
    methods:{
     addToCart(){
         this.cart +=1;
     },
     updateVariant(index){
         this.selectedVariant=index;
     },
     downToCart(){
         if(this.cart>0)
        this.cart -=1
        
     },
    },
    // lika calculatore, si aggiorna solo quando serve
    computed:{
        title(){
            return this.brand +' '+this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        titleOnSale(){
            if(this.onSale)
            return this.brand +' '+this.product +' is on sale'
        },

    },
})
