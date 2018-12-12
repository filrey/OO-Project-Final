import Vue from 'vue'
import Router from 'vue-router'

// Views
import Home from './components/Home.vue'
import Login from './components/Login.vue'


//UI Components


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },      
    ]
})
