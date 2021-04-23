const app = Vue.createApp({
    data(){
        return{
            product:'Socks',
            description:'Lorem ipsum dolor',
            image:'./assets/images/socks_green.jpg',
            url:'google.com',
            inStock:true,
            inventory:0,
            onSale:true,
        }
    }
})
