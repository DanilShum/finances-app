import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAitFzlDKvFWeuITs-_2gKeWAHgSlqMxJE",
  authDomain: "my-finances-project.firebaseapp.com",
  projectId: "my-finances-project",
  storageBucket: "my-finances-project.appspot.com",
  messagingSenderId: "965648250349",
  appId: "1:965648250349:web:2d9b10b7b78d3e3880e3e4",
  measurementId: "G-CRYMMWZ7L0",
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
