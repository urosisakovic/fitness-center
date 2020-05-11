import Home from './components/Home.vue'
import About from './components/About.vue'
import Account from './components/Account.vue'
import ServicesTraining from './components/services/Training.vue'
import ServicesNutrition from './components/services/Nutrition.vue'
import ServicesMassage from './components/services/Massage.vue'
import BookTraining from './components/book/Training.vue'
import BookNutrition from './components/book/Nutrition.vue'
import BookMassage from './components/book/Massage.vue'
import TrainingLvl1 from './components/services/TrainingLvl1.vue'
import TrainingLvl2 from './components/services/TrainingLvl2.vue'


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
    {path: '/book/massage', component: BookMassage},

    {path: '/services/training/yoga', component: TrainingLvl1, props: {content: require("./assets/content/en/services/yoga/yoga.json")}},
    {path: '/services/training/yoga/yoga-1', component: TrainingLvl2, props: {content: require("./assets/content/en/services/yoga/yoga-1.json")}},
    {path: '/services/training/yoga/yoga-2', component: TrainingLvl2, props: {content: require("./assets/content/en/services/yoga/yoga-2.json")}},
    {path: '/services/training/yoga/yoga-3', component: TrainingLvl2, props: {content: require("./assets/content/en/services/yoga/yoga-3.json")}},
    {path: '/services/training/yoga/yoga-4', component: TrainingLvl2, props: {content: require("./assets/content/en/services/yoga/yoga-4.json")}},

    {path: '/services/training/pilates', component: TrainingLvl1, props: {content: require("./assets/content/en/services/pilates/pilates.json")}},
    {path: '/services/training/pilates/pilates-1', component: TrainingLvl2, props: {content: require("./assets/content/en/services/pilates/pilates-1.json")}},
    {path: '/services/training/pilates/pilates-2', component: TrainingLvl2, props: {content: require("./assets/content/en/services/pilates/pilates-2.json")}},
    {path: '/services/training/pilates/pilates-3', component: TrainingLvl2, props: {content: require("./assets/content/en/services/pilates/pilates-3.json")}},
    {path: '/services/training/pilates/pilates-4', component: TrainingLvl2, props: {content: require("./assets/content/en/services/pilates/pilates-4.json")}}
]