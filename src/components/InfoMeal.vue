<template>
    <div class="app">
        <div v-for="item in information" :key="item">
            
            <div class="card mb-3">
            <img class="card-img-top" :src="`${ item.strMealThumb }`" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"> {{ item.strMeal }}</h5>
                <p class="card-text">{{ item.strInstructions }}</p>
                <iframe width="560" height="315" :src="`${ item.strYoutube.replace('watch?v=','embed/') }`"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
               
            </div>
            <social-sharing inline-template :url="`${ item.strYoutube.replace('watch?v=','embed/') }`"
                      :quote = "`Check out this awesome meal, ${ item.strMeal }`"
                :network-tag="tag">
                <network network="facebook">
                    <button  type="button" class="btn btn-light">
                        <i class="fab fa-facebook-f"></i>                        
                         Share this meal on Facebook
                     </button>

                    
                </network>
            </social-sharing>
            </div>
            
            




        </div> 
    </div>
    
</template>

<script>
import axios from 'axios' 
import { callbackify } from 'util';
export default {
    name: "InfoMeal",
    data(){
        return{
            id: this.setID(this.$route.params.selected_id), 
            information: [],

        }
    },
    mounted() {
       this.getMealById()

    },
    methods:{
        setID(id){
            if (id != undefined) {
            localStorage.setItem('id', id)
            }
            return localStorage.getItem('id')

        },
        getMealById(){
            axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`)
            .then(({data}) => (
               console.log(data),
               this.information = data['meals']
                
            ))
            
            
        },
        cutWatchFromUrl(url){
               console.log('url' + url)
                let muse = url.replace('watch?v=','embed/')
                console.log('kuy' + muse)
                return muse
        }
    }
    
}
</script>

<style scoped>
.card-img-top{
    width: 100%;
    height: 20vw;
    object-fit: contain;
    margin-bottom: 4vh; 
    margin-top: 4vh;
}





</style>
