import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "main" */ "../routs/MainDesktop"),
    children: [
      {
        path: "/Main",
        name: "Main",
        component: () =>
          import(/* webpackChunkName: "home" */ "../routs/home/Home"),
      },
      {
        path: "/briefcases",
        name: "Briefcases",
        component: () =>
          import(
            /* webpackChunkName: "briefcase" */ "../routs/briefcase/Briefcases"
          ),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../routs/auth/Login"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () =>
      import(/* webpackChunkName: "registration" */ "../routs/auth/SignUp"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
