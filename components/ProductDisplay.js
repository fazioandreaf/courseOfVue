app.component('product-display',{
    props:{
        // custom attributs
        premium:{
            type:Boolean,
            //prop validation
            required:true,
        },
        detaaails:{
            type:String,
            required:true,
        }
    },
    
    
    
    template:
    /*html*/
    `        <div class="product-container">
          <div class="product-image">
            <img 
            :class="!inStock?'out-of-stock-img':''"
            :src="image" >
          </div>
          <div class="product-info">
            <h1>{{title}}</h1>
            <p v-if="inStock>10">In Stock</p>
            <p v-else-if="inStock<=10 && inStock>0">Almost sold out</p>
            <!-- <p v-if="inStock">In Stock</p> -->
            <!-- lo stesso ma modifica la visibilità -->
            <!-- <p v-show="inStock">In Stock</p> -->
            <p v-else>Out of stock</p>
            <p>Shipping: {{shipping}} {{detaaails}}</p>
            <a :href="url">Clicca</a>
            <p v-if="onSale">{{titleOnSale}}</p>
            <ul>
              <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div 
            v-for="(variant,index) in variants" 
            key="variant.id" 
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{backgroundColor: variant.color}">
            </div>
            <!-- v-on == @ -->
            <button class="button" v-on:click="addToCart"
            :class="{disabledButton: !inStock}"
            :disabled="!inStock">Add to Cart</button>
            <button class="button" v-on:click="addLessToCart">Remove to Cart</button>
          </div>
        </div>`,
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
            brand:'Vue mastery',
        }
    },
    methods:{
        // funzione che si mette ad ascoltare questo custom listenere
     addToCart(){
        //  questo è una custom listener
         this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
     },     
     addLessToCart(){
        //  questo è una custom listener
         this.$emit('less-to-cart')
     },

     updateVariant(index){
         this.selectedVariant=index;
     },

    //  questa funzione nel components non funziona
    //  downToCart(){
    //      if(this.cart>0)
    //     this.cart -=1
        
    //  },
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
        shipping(){
            if(this.premium){
                return 'free'
            }
            return '2.99'
        },
    },

})