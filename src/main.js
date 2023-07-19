import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import axios from "axios";

axios.defaults.baseURL =
  "https://novo-login-d7651-default-rtdb.firebaseio.com/";

const firebaseConfig = {
  apiKey: "AIzaSyC7bL4zf3af24T9U83WUy97bEihJK5hmf4",
  authDomain: "novo-login-d7651.firebaseapp.com",
  databaseURL: "https://novo-login-d7651-default-rtdb.firebaseio.com",
  projectId: "novo-login-d7651",
  storageBucket: "novo-login-d7651.appspot.com",
  messagingSenderId: "617392931744",
  appId: "1:617392931744:web:ed01be2d94c7e864229ac5",
  measurementId: "G-15M3NQS484",
};

const app = initializeApp(firebaseConfig);
getAuth(app);

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
