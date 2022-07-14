import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {createPinia} from "pinia";

const routes = [
    { path: '/', component: () => import('./pages/index.vue') },
    { path: '/const', component: () => import('./pages/cost.vue') },
    { path: '/place', component: () => import('./pages/place.vue') },
    { path: '/staff', component: () => import('./pages/staff.vue') },
    { path: '/fundings', component: () => import('./pages/fundings.vue') },
    { path: '/hardware', component: () => import('./pages/hardware.vue') },
    { path: '/furniture', component: () => import('./pages/furniture.vue') },
    { path: '/workshops', component: () => import('./pages/workshops.vue') },
    { path: '/marketing', component: () => import('./pages/marketing.vue') },
    { path: '/network', component: () => import('./pages/network.vue') },
    { path: '/contacts', component: () => import('./pages/contacts.vue') },
    { path: '/cost', component: () => import('./pages/cost.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(createPinia())
    .mount('#app')
