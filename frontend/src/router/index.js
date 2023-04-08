// import VueRouter from "vue-router";
import { createRouter, createWebHashHistory  } from "vue-router";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"), // set home as path '/'
  },
  {
    path: "/agency",
    name: "Agency",
    component: () => import("../views/AgencyPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.Base_URL,
//   routes,
// });

export default router;
