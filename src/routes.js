import Home from './components/Home.vue'
import AboutUs from './components/AboutUs.vue'
import Account from './components/Account.vue'
import Contact from './components/Contact.vue'
import ServicesTraining from './components/services/Training.vue'
import ServicesNutrition from './components/services/Nutrition.vue'
import ServicesMassage from './components/services/Massage.vue'
import BookTraining from './components/book/Training.vue'
import BookMasNut from './components/book/MasNut.vue'
import TrainingLvl1 from './components/services/TrainingLvl1.vue'
import TrainingLvl2 from './components/services/TrainingLvl2.vue'


export default [

    /*
    *
    *
    *  English pages with implicit /en in the URL. 
    * 
    * 
    * */
    {path: '/', component: Home, props: {content: require("./assets/content/en/home.json")}},
    {path: '/home', component: Home, props: {content: require("./assets/content/en/home.json")}},
    {path: '/about', component: AboutUs, props: {content: require("./assets/content/en/about-us.json")}},
    {path: '/account', component: Account, props: {content: require("./assets/content/en/account.json")}},
    {path: '/contact', component: Contact, props: {content: require("./assets/content/en/contact.json")}},

    // Booking
    {path: '/book/training', component: BookTraining, props: {content: require("./assets/content/en/book/training.json")}},
    {path: '/book/nutrition', component: BookMasNut, props: {content: require("./assets/content/en/book/nutrition.json")}},
    {path: '/book/massage', component: BookMasNut, props: {content: require("./assets/content/en/book/massage.json")}},

    // Services
    {path: '/services/training', component: ServicesTraining, props: {content: require("./assets/content/en/services/training.json")}},
    {path: '/services/nutrition', component: ServicesNutrition, props: {content: require("./assets/content/en/services/nutrition.json")}},
    {path: '/services/massage', component: ServicesMassage, props: {content: require("./assets/content/en/services/massage.json")}},

    // Services - Yoga
    {path: '/services/training/yoga', component: TrainingLvl1, props: {content: require("./assets/content/en/services/yoga/yoga.json")}},
    {path: '/services/training/yoga/classical-yoga', component: TrainingLvl2, props: {content: require("./assets/content/en/services/yoga/classical-yoga.json")}},
    {path: '/services/training/yoga/hatha-yoga', component: TrainingLvl2, props: {content: require("./assets/content/en/services/yoga/hatha-yoga.json")}},
    {path: '/services/training/yoga/yoga-3', component: TrainingLvl2, props: {content: require("./assets/content/en/services/yoga/yoga-3.json")}},

    // Services - Pilates    
    {path: '/services/training/pilates', component: TrainingLvl1, props: {content: require("./assets/content/en/services/pilates/pilates.json")}},
    {path: '/services/training/pilates/pilates-1', component: TrainingLvl2, props: {content: require("./assets/content/en/services/pilates/pilates-1.json")}},
    {path: '/services/training/pilates/pilates-2', component: TrainingLvl2, props: {content: require("./assets/content/en/services/pilates/pilates-2.json")}},
    {path: '/services/training/pilates/pilates-3', component: TrainingLvl2, props: {content: require("./assets/content/en/services/pilates/pilates-3.json")}},

    // Services - Core
    {path: '/services/training/core', component: TrainingLvl1, props: {content: require("./assets/content/en/services/core/core.json")}},
    {path: '/services/training/core/core-1', component: TrainingLvl2, props: {content: require("./assets/content/en/services/core/core-1.json")}},
    {path: '/services/training/core/core-2', component: TrainingLvl2, props: {content: require("./assets/content/en/services/core/core-2.json")}},
    {path: '/services/training/core/core-3', component: TrainingLvl2, props: {content: require("./assets/content/en/services/core/core-3.json")}},

    // Services - Cardio
    {path: '/services/training/cardio', component: TrainingLvl1, props: {content: require("./assets/content/en/services/cardio/cardio.json")}},
    {path: '/services/training/cardio/cardio-1', component: TrainingLvl2, props: {content: require("./assets/content/en/services/cardio/cardio-1.json")}},
    {path: '/services/training/cardio/cardio-2', component: TrainingLvl2, props: {content: require("./assets/content/en/services/cardio/cardio-2.json")}},
    {path: '/services/training/cardio/cardio-3', component: TrainingLvl2, props: {content: require("./assets/content/en/services/cardio/cardio-3.json")}},


    /*
    *
    *
    *  English pages with explicit /en in the URL. 
    * 
    * 
    * */
    {path: '/en/', component: Home, props: {content: require("./assets/content/en/home.json")}},
    {path: '/en/home', component: Home, props: {content: require("./assets/content/en/home.json")}},
    {path: '/en/about', component: AboutUs, props: {content: require("./assets/content/en/about-us.json")}},
    {path: '/en/account', component: Account, props: {content: require("./assets/content/en/account.json")}},
    {path: '/en/contact', component: Contact, props: {content: require("./assets/content/en/contact.json")}},

    // Booking
    {path: '/en/book/training', component: BookTraining, props: {content: require("./assets/content/en/book/training.json")}},
    {path: '/en/book/nutrition', component: BookMasNut, props: {content: require("./assets/content/en/book/nutrition.json")}},
    {path: '/en/book/massage', component: BookMasNut, props: {content: require("./assets/content/en/book/massage.json")}},

    // Services
    {path: '/en/services/training', component: ServicesTraining, props: {content: require("./assets/content/en/services/training.json")}},
    {path: '/en/services/nutrition', component: ServicesNutrition, props: {content: require("./assets/content/en/services/nutrition.json")}},
    {path: '/en/services/massage', component: ServicesMassage, props: {content: require("./assets/content/en/services/massage.json")}},

    // Services - Yoga
    {path: '/en/services/training/yoga', component: TrainingLvl1, props: {content: require("./assets/content/en/services/yoga/yoga.json")}},
    {path: '/en/services/training/yoga/classical-yoga', component: TrainingLvl2, props: {content: require("./assets/content/en/services/yoga/classical-yoga.json")}},
    {path: '/en/services/training/yoga/hatha-yoga', component: TrainingLvl2, props: {content: require("./assets/content/en/services/yoga/hatha-yoga.json")}},
    {path: '/en/services/training/yoga/yoga-3', component: TrainingLvl2, props: {content: require("./assets/content/en/services/yoga/yoga-3.json")}},

    // Services - Pilates    
    {path: '/en/services/training/pilates', component: TrainingLvl1, props: {content: require("./assets/content/en/services/pilates/pilates.json")}},
    {path: '/en/services/training/pilates/pilates-1', component: TrainingLvl2, props: {content: require("./assets/content/en/services/pilates/pilates-1.json")}},
    {path: '/en/services/training/pilates/pilates-2', component: TrainingLvl2, props: {content: require("./assets/content/en/services/pilates/pilates-2.json")}},
    {path: '/en/services/training/pilates/pilates-3', component: TrainingLvl2, props: {content: require("./assets/content/en/services/pilates/pilates-3.json")}},

    // Services - Core
    {path: '/en/services/training/core', component: TrainingLvl1, props: {content: require("./assets/content/en/services/core/core.json")}},
    {path: '/en/services/training/core/core-1', component: TrainingLvl2, props: {content: require("./assets/content/en/services/core/core-1.json")}},
    {path: '/en/services/training/core/core-2', component: TrainingLvl2, props: {content: require("./assets/content/en/services/core/core-2.json")}},
    {path: '/en/services/training/core/core-3', component: TrainingLvl2, props: {content: require("./assets/content/en/services/core/core-3.json")}},

    // Services - Cardio
    {path: '/en/services/training/cardio', component: TrainingLvl1, props: {content: require("./assets/content/en/services/cardio/cardio.json")}},
    {path: '/en/services/training/cardio/cardio-1', component: TrainingLvl2, props: {content: require("./assets/content/en/services/cardio/cardio-1.json")}},
    {path: '/en/services/training/cardio/cardio-2', component: TrainingLvl2, props: {content: require("./assets/content/en/services/cardio/cardio-2.json")}},
    {path: '/en/services/training/cardio/cardio-3', component: TrainingLvl2, props: {content: require("./assets/content/en/services/cardio/cardio-3.json")}},
    
    /*
    *
    *
    *  Serbian pages with explicit /sr in the URL. 
    * 
    * 
    * */
   {path: '/sr', component: Home, props: {content: require("./assets/content/sr/home.json")}},
   {path: '/sr/home', component: Home, props: {content: require("./assets/content/sr/home.json")}},
   {path: '/sr/about', component: AboutUs, props: {content: require("./assets/content/sr/about-us.json")}},
   {path: '/sr/account', component: Account, props: {content: require("./assets/content/sr/account.json")}},
   {path: '/sr/contact', component: Contact, props: {content: require("./assets/content/sr/contact.json")}},

   // Booking
   {path: '/sr/book/training', component: BookTraining, props: {content: require("./assets/content/sr/book/training.json")}},
   {path: '/sr/book/nutrition', component: BookMasNut, props: {content: require("./assets/content/sr/book/nutrition.json")}},
   {path: '/sr/book/massage', component: BookMasNut, props: {content: require("./assets/content/sr/book/massage.json")}},

   // Services
   {path: '/sr/services/training', component: ServicesTraining, props: {content: require("./assets/content/sr/services/training.json")}},
   {path: '/sr/services/nutrition', component: ServicesNutrition, props: {content: require("./assets/content/sr/services/nutrition.json")}},
   {path: '/sr/services/massage', component: ServicesMassage, props: {content: require("./assets/content/sr/services/massage.json")}},

   // Services - Yoga
   {path: '/sr/services/training/yoga', component: TrainingLvl1, props: {content: require("./assets/content/sr/services/yoga/yoga.json")}},
   {path: '/sr/services/training/yoga/classical-yoga', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/yoga/classical-yoga.json")}},
   {path: '/sr/services/training/yoga/hatha-yoga', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/yoga/hatha-yoga.json")}},
   {path: '/sr/services/training/yoga/yoga-3', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/yoga/yoga-3.json")}},

   // Services - Pilates    
   {path: '/sr/services/training/pilates', component: TrainingLvl1, props: {content: require("./assets/content/sr/services/pilates/pilates.json")}},
   {path: '/sr/services/training/pilates/pilates-1', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/pilates/pilates-1.json")}},
   {path: '/sr/services/training/pilates/pilates-2', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/pilates/pilates-2.json")}},
   {path: '/sr/services/training/pilates/pilates-3', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/pilates/pilates-3.json")}},

   // Services - Core
   {path: '/sr/services/training/core', component: TrainingLvl1, props: {content: require("./assets/content/sr/services/core/core.json")}},
   {path: '/sr/services/training/core/core-1', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/core/core-1.json")}},
   {path: '/sr/services/training/core/core-2', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/core/core-2.json")}},
   {path: '/sr/services/training/core/core-3', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/core/core-3.json")}},

   // Services - Cardio
   {path: '/sr/services/training/cardio', component: TrainingLvl1, props: {content: require("./assets/content/sr/services/cardio/cardio.json")}},
   {path: '/sr/services/training/cardio/cardio-1', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/cardio/cardio-1.json")}},
   {path: '/sr/services/training/cardio/cardio-2', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/cardio/cardio-2.json")}},
   {path: '/sr/services/training/cardio/cardio-3', component: TrainingLvl2, props: {content: require("./assets/content/sr/services/cardio/cardio-3.json")}},
]