
//dependencies
require('./bootstrap');
window.Vue = require('vue')
Vue.use(VueRouter)
import VueRouter from 'vue-router'
import '../scss/app.scss'
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

window.Form = Form


//Components
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import LandingPage from '../components/LandingPage.vue'


const routes = [
    {path:'/', component:Home},
    {path:'/register', component:SignUp},
    {path:'/landing', component:LandingPage} 
]

const router = new VueRouter({
    mode:'history',
    routes:routes
})
const app = new Vue({
    el:'#app',
    router:router
})