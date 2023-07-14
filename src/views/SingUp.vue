<template>
  <section>
    <h1>Cadastre-se</h1>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Senha" v-model="senha" />
    <button @click="singup()">Cadastrar</button>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SingUp",
  data() {
    return {
      email: "",
      senha: "",
      initials: "",
    };
  },
  methods: {
    singup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.senha)
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
