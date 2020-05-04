import Home from './components/Home.vue'
import About from './components/About.vue'
import Account from './components/Account.vue'
import ServicesTraining from './components/services/Training.vue'
import ServicesNutrition from './components/services/Nutrition.vue'
import ServicesMassage from './components/services/Massage.vue'
import BookTraining from './components/book/Training.vue'
import BookNutrition from './components/book/Nutrition.vue'
import BookMassage from './components/book/Massage.vue'


export default [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/about', component: About},
    {path: '/account', component: Account},
    {path: '/services/training', component: ServicesTraining},
    {path: '/services/nutrition', component: ServicesNutrition},
    {path: '/services/massage', component: ServicesMassage},
    {path: '/book/training', component: BookTraining},
    {path: '/book/nutrition', component: BookNutrition},
    {path: '/book/massage', component: BookMassage}
]