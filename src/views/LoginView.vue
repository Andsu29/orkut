<template>
  <section>
    <h1>Login</h1>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Senha" v-model="senha" />
    <button @click="login()">Entrar</button>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      senha: "",
      initials: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .singInWithEmailAndPassword(this.email, this.senha)
        .then(
          (user) => {
            console.log(user);
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>

<style></style>
