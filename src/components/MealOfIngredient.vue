<template>
    
</template>

<script>
export default {
    name: "MealOfIngredient",
    data(){
        return { 

        }
    },
    methods: { 
        getMealInfo(ingredient){
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php',{
            params:{
                i: ingredient
            }
        })
        .then((response) => (
            console.log(response)                 
        ))

    }
   
    }
    
}
</script>

<style>

</style>
