<template>
    <div class="container">

         <div
            v-for="meal in meals" :key="meal"
            class="meal">

            <div class="accordion" id="accordionExample">
            <div class="card" @click="getMealById( meal['idMeal'] )">
                <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {{ meal.strMeal }}
                    </button>
                </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                   <img class="card-img-bottom" :src="`${ meal.strMealThumb }`" alt="Card image cap">
               
                </div>
                </div>
             </div>        
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "MealOfIngredient",
    props: ["selected_id"],
    data(){
        return { 
            ingredient: this.setIngredient(this.$route.params.selected_ingredient),
            meals: []

        }
    },
    mounted(){
        this.getMealInfo();
        

    },
    methods: { 
        setIngredient(ingredient){
            if (ingredient != undefined) {
            localStorage.setItem('ingredient', ingredient)
            }
            return localStorage.getItem('ingredient')

        },
        getMealInfo(){
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php',{
            params:{
                i: this.ingredient
            }
        })
        .then((response) => (
            
            this.meals = response['data']['meals']
                 
        ))

        },
        getMealById(id){
             this.$router.push({
                name: 'info of meal', 
                params: { selected_id : id }    
            });
      

        }
   
    }
    
}
</script>

<style scoped>
.card-img-bottom{
    width: 100%;
    height: 20vw;
    object-fit: contain;   
    margin-bottom: 4vh; 
    margin-top: 4vh;
}
.card{
    margin: 4vh;
    transition: transform 0.5s;

}


.card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  content: "";
  opacity: 0;
  z-index: -1;
}
.card:hover, .card:focus {
   /* background-color: rgb(233, 233, 233); */
  transform: scale3d(1.006, 1.006, 1);

}
.card:hover::after, .card:focus::after {
  opacity: 1;
}

.btn-link{
    color: black;
    text-decoration: none;

}
.btn-link:link, .btn-link:hover, .btn-link:visited, .btn-link:active{
   text-decoration: none;
}

</style>
