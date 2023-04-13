import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue') // set home as path '/'
    },
    {
        path: '/agency',
        name: 'Agency',
        component: () => import('../views/AgencyPage.vue') // set home as path '/'
    }
    ,
    {
        path: '/project',
        name: 'Project',
        component: () => import('../views/Project.vue') // set home as path '/'
    },
    {
        path: '/product',
        name: 'Product',
        component: () => import('../views/Product.vue') // set home as path '/'
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('../views/News.vue') // set home as path '/'
    },
    {
        path: '/project/:id',
        name: 'View Project',
        component: () => import('../views/ViewProject.vue') // set home as path '/'
    },
    {
        path: '/view/product',
        name: 'View Product',
        component: () => import('../views/ViewProduct.vue') // set home as path '/'
    },
    {
        path: '/news/:id',
        name: 'View News',
        component: () => import('../views/ViewNews.vue') // set home as path '/'
    }
    // {
    //     path: '/checkOrder',
    //     name: 'CheckOrder',
    //     component: () => import('../views/CheckOrder.vue') // set home as path '/'
    // },
    // {
    //     path: '/payment',
    //     name: 'Payment',
    //     component: () => import('../views/Payment.vue') // set home as path '/'
    // },
    // {
    //     path: '/manageProduct',
    //     name: 'Manageproduct',
    //     component: () => import('../views/ManageProduct.vue') // set home as path '/'
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.Base_URL,
    routes
})

export default router