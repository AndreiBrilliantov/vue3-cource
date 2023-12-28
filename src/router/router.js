import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostsPage from "@/pages/PostsPage.vue";
import About from "@/pages/About.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import PostsPageWithStore from "@/pages/PostsPageWithStore.vue";
import PostsPageCompositioin from "@/pages/PostsPageCompositioin.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/postspagewithstore',
        component: PostsPageWithStore
    },
    {
        path: '/compositioin',
        component: PostsPageCompositioin
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;