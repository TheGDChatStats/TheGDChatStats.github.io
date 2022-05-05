import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'


const routes = [
    {path: '/', name:'Home', component: Home},
    {path: '/profiles/:name', name: 'Profiles', component: ()=> import('@/views/Profiles.vue')},
    {path: '/profiles', name: 'AllProfiles', component: ()=> import('@/views/AllProfiles.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router