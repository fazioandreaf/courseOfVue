app.component('review-form',{
    template: 
    /*html*/
    `<form action="" class="review-form" @submit.prevent="onSubmit">
      <h3>Lerave a review</h3>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name">
      <label for="review">Review</label>
      <textarea  id="review" v-model="review"></textarea>
    <label for="rating">Rating</label>
    <select v-model.number="rating" id="rating">
      <option >1</option>
      <option >2</option>
      <option >3</option>
      <option >4</option>
      <option >5</option>
    </select>
    <input class="button" type="Submit" value="Submit">
    </form>
    
    `,
    data(){
        return{
            name:'',
            review:'',
            rating:null,
        }
    },
    methods:{
        onSubmit(){
            if(this.name==='' ||this.review==='' ||this.rating===null ){
                alert('riempi ogni campo')
                return
                //per uscire dalla funzione e non farla continuare
            }
            let productReview={
                name:this.name,
                review:this.review,
                rating:this.rating,
            }
            this.$emit('review-submitted',productReview)
            this.name='';
            this.review='';
            this.rating=null;

        }
    }
})