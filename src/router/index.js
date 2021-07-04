import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: { auth: true },
    component: () =>
      import(/* webpackChunkName: "main" */ "../routes/MainDesktop"),
    async beforeEnter(to, from, next) {
      await store.dispatch("auth/getUser");
      return next();
    },
    children: [
      {
        path: "/main",
        name: "main",
        component: () =>
          import(/* webpackChunkName: "home" */ "../routes/home/Home"),
      },
      {
        path: "/briefcases",
        name: "briefcases",
        component: () =>
          import(
            /* webpackChunkName: "briefcase" */ "../routes/briefcase/Briefcases"
          ),
        children: [
          {
            path: "deals",
            name: "deals",
            component: () =>
              import(
                /* webpackChunkName: "deals" */ "../routes/briefcase/BriefcasesDeals"
              ),
            beforeEnter(to, from, next) {
              store.dispatch("deals/fetch");
              return next();
            },
          },
          {
            path: "table",
            name: "table",
            component: () =>
              import(
                /* webpackChunkName: "assets" */ "../routes/briefcase/BriefcasesAssets"
              ),
            beforeEnter(to, from, next) {
              store.dispatch("assets/fetch");
              return next();
            },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../routes/auth/Login"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () =>
      import(/* webpackChunkName: "registration" */ "../routes/auth/SignUp"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some((record) => record.meta.auth);

  if (requireAuth && !currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;
