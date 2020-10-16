import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewsPage from "../views/newspage.vue"
import AboutPage from "../views/aboutpage.vue"
import ContactPage from "../views/contact.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/news",
        name: "Newspage",
        component: NewsPage
    },
    {
        path: "/about",
        name: "Aboutpage",
        component: AboutPage
    },
    {
        path: "/contact",
        name: "Contactpage",
        component: ContactPage
    }
];

const router = new VueRouter({
    routes
});

export default router;