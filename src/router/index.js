import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import Briefcases from "@/views/Briefcases";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Main",
    name: "Main",
    component: MainPage,
  },
  {
    path: "/briefcases",
    name: "Briefcases",
    component: Briefcases,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
