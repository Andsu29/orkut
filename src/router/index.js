import Vue from "vue";
import VueRouter from "vue-router";

import LoginView from "../views/LoginView.vue";
import SingUp from "../views/SingUp.vue";
import UsuarioView from "../views/UsuarioView.vue";
import ThePerfil from "../views/ThePerfil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/singup",
    name: "singup",
    component: SingUp,
  },
  {
    path: "/usuario",
    name: "usuario",
    component: UsuarioView,
  },
  {
    path: "/perfil",
    name: "perfil",
    component: ThePerfil,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
