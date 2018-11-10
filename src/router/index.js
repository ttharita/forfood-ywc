import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '/Users/ttharita/Desktop/MUSE/VUE/vue-ywc/src/components/LandingPage.vue'
import InfoCategory from '/Users/ttharita/Desktop/MUSE/VUE/vue-ywc/src/components/InfoCategory.vue'
import MealOfIngredient from '/Users/ttharita/Desktop/MUSE/VUE/vue-ywc/src/components/MealOfIngredient.vue'
Vue.use(Router)

export default new Router({
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
    }
    

]
})
