import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import Finished from "../pages/Finished.vue";
import Available from "../pages/Available.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Index,
        },
        {
            path: "/finish",
            name: "finish",
            component: Finished,
        },
        {
            path: "/available",
            name: "available",
            component: Available,
        },
    ],
});

export default router;
