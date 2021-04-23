const app = Vue.createApp({
    data(){
        return{
            cart:[],
            premium:true,
            stringaACaso:'voglia di mare',
        }
    },
    methods:{
        // funzione che si avvia quando il listener custom messo nel components lo sente e lo avvia
    updateCart(id){
        this.cart.push(id);
     },
    updateLessCart(){
        this.cart.splice(-1,1);
     }

    },
})
