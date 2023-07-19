<template>
  <div>
    <section class="overviewForm">
      <div class="imgLog">
        <img src="../assets/logiPage.png" alt="Pessoas sentadas rindo" />
        <p class="textoImg">
          Conecta-se aos seus amigos e familiares usando recados e mensagens
          instantâneas
        </p>
      </div>
      <div class="formulario rounded">
        <div>
          <img
            class="logoOrkut"
            src="../assets/ps_orkut.svg"
            alt="logo orkut"
          />
        </div>
        <p class="subTitulo">Acesse o Orkut</p>
        <input type="email" placeholder="Email" id="email" v-model="email" />
        <input type="password" placeholder="Senha" id="senha" v-model="senha" />
        <button @click="login()" class="btnEntrar btn mt-2">Entrar</button>
        <router-link to="/singup" class="btnCriar btn mt-2">
          Criar um conta
        </router-link>
        <router-link to="/" class="mx-auto pt-4 esqueceuSenha"
          >Esqueci a minha senha</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  components: {},
  methods: {
    getUserFromFirebase() {
      this.$http
        .get(`usuario.json`)
        .then((response) => {
          let array = [];
          for (let chave in response.data) {
            array.push(response.data[chave]);
          }
          array.filter((i) => {
            const token = window.localStorage.getItem("token");
            if (i.email === token) {
              this.$store.state.usuarioAtivo = i;
            }
          });
        })
        .catch((error) => {
          // Tratamento de erro
          console.error(error);
        });
    },
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.senha).then(
        (user) => {
          this.getUserFromFirebase();
          window.localStorage.token = user.user.email;
          this.$router.push("/usuario");
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>

<style scoped>
input {
  margin-bottom: 15px;
  border: none;
  height: 45px;
  background-color: #eff3f8;
  padding: 10px;
  padding-left: 10px;
  flex-shrink: 0;
  border-radius: 8px;
}
.formulario {
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  height: 500px;
  width: 350px;
  background-color: #fdfeff;
}
.overviewForm {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: #d9e6f7;
}
.imgLog {
  height: 500px;
  width: 800px;
}
.logoOrkut {
  width: 32px;
  margin: 0 auto;
}
.subTitulo {
  font-size: 1.5rem;
  color: #ed2590;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 5px;
  font-weight: 500;
}
.btnEntrar {
  height: 50px;
  border-radius: 8px;
  background: #ed2590;
  flex-shrink: 0;
  color: #fdfeff;
}
.btnEntrar:hover {
  background: #f757ac;
  color: #fdfeff;
}
.btnCriar {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #eff3f8;
  color: #ed2590;
}
.btnCriar:hover {
  background: #d4dce4;
  color: #ed2590;
}
.esqueceuSenha {
  color: #ed2590;
}
.textoImg {
  position: relative;
  width: 35ch;
  top: -100px;
  left: 40px;
  font-size: 24px;
  color: #fff;
  z-index: 2;
}
.imgLog::before {
  content: "";
  height: 500px;
  width: 800px;
  background: linear-gradient(rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.7));
  position: absolute;
  z-index: 2;
  border-radius: 16px;
}
</style>
