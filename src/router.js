import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Post from './components/Post.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            //route level code-splitting
            component: () => import ('./views/About.vue')
        },
        {
            path: '/post/:id',
            name: 'post',
            component: Post
        }
    ]

})