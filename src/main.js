import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";

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

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
