import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { ValidationProvider } from "vee-validate";
import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

Vue.component("ValidationProvider", ValidationProvider);
Vue.use(firestorePlugin);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDEjL0KpzlWmqW6acQrcUYRB4Q45221KV0",
  authDomain: "personalinvestapp.firebaseapp.com",
  databaseURL: "https://personalinvestapp-default-rtdb.firebaseio.com",
  projectId: "personalinvestapp",
  storageBucket: "personalinvestapp.appspot.com",
  messagingSenderId: "452570424773",
  appId: "1:452570424773:web:4dd9762b4c9eb7e3a857ac",
  measurementId: "G-HDZT69T2JC",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

export const db = firebase.firestore();
