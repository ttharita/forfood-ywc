import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import InfoCategory from '@/components/InfoCategory'
import MealOfIngredient from '@/components/MealOfIngredient'
import InfoMeal from '@/components/InfoMeal'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'landing page',
        component: LandingPage
    },
    {
        path: '/category_info',
        name: 'category information',
        component: InfoCategory,
        props: true
    },
    {
        path: '/meals_of_ingredient',
        name: 'meals of ingredient',
        component: MealOfIngredient,
        props: true
    },
    {
        path: '/meal_info',
        name: 'info of meal',
        component: InfoMeal, 
        props: true
    },
   
    

]
})
