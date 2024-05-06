import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import HeroPage from './components/HeroPage.vue'

const routes = [
    { path: '/', component: HeroPage },
    { path: '/sidebar', component: Sidebar },
    { path: '/navbar', component: Navbar }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')
