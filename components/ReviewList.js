app.component('review-list' ,{
    props:{
        reviews:{
            type:Array,
            required:true
        }
    },
    template:
    /*html*/
    `<div class="review-container">
  <h3>Reviews</h3>
  <ul>
    <li v-for="(elem,index) in reviews" :key="index">
      {{elem.name}}gave this {{elem.rating}} stars
    <br>
  '{{elem.review}}'</li>
  </ul>
</div>`,

})