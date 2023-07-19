<template>
  <div>
    <section class="overviewForm p-5">
      <div class="formulario pt-5 pb-3 ps-5 pe-5 rounded">
        <h1 class="mx-auto">Cadastre-se</h1>
        <div class="mt-4">
          <label>Adicione uma foto de perfil</label>
          <div v-if="imagemUrl" class="mt-4">
            <img :src="imagemUrl" class="img" />
          </div>
          <div v-else>
            <input class="selecionarArquivo" type="file" @change="exibirFoto" />
          </div>
        </div>

        <label for="nome">Nome</label>
        <input type="text" id="nome" v-model="nome" />
        <label for="sobrenome">Sobrenome</label>
        <input type="text" id="sobrenome" v-model="sobrenome" />
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
        <label for="senha">Senha</label>
        <input type="password" id="senha" v-model="senha" />
        <label for="cep">Cep</label>
        <input type="text" id="cep" v-model="cep" />
        <label for="rua">Rua</label>
        <input type="text" id="rua" v-model="rua" />
        <label for="bairro">Bairro</label>
        <input type="text" id="bairro" v-model="bairro" />
        <label for="cidade">Cidade</label>
        <input type="text" id="cidade" v-model="cidade" />
        <label for="estado">Estado</label>
        <input type="text" id="estado" v-model="estado" />
        <label for="numero">Número</label>
        <input type="text" id="numero" v-model="numero" />
        <button
          @click.prevent="singup(), cadastrarUsuario()"
          class="btn btnCadastrar text-light mt-2"
        >
          Cadastrar
        </button>
        <p class="mt-3">
          Ja tem uma conta? Faça seu
          <router-link to="/" class="text-primary">Login</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "SingUp",
  components: {},
  data() {
    return {
      imagemUrl: "",
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      numero: "",
    };
  },
  methods: {
    exibirFoto(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.imagemUrl = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
      //Acho que da pra fazer um dispatch para o vuex para fazer um post para o usuario e deixar salvo o arquivo da foto
    },
    cadastrarUsuario() {
      this.$http.post("usuario.json", {
        img: this.imagemUrl,
        nome: this.nome,
        sobrenome: this.sobrenome,
        email: this.email,
        cep: this.cep,
        rua: this.rua,
        numero: this.numero,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado,
      });
      (this.nome = ""),
        (this.sobrenome = ""),
        (this.email = ""),
        (this.senha = ""),
        (this.cep = ""),
        (this.rua = ""),
        (this.numero = ""),
        (this.bairro = ""),
        (this.cidade = ""),
        (this.estado = "");
    },
    singup() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.senha).then(
        () => {
          alert("Usuario cadastrados com sucesso");
          this.$router.push("/");
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
  width: 450px;
  background-color: #fdfeff;
  color: #ed2590;
}
.overviewForm {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9e6f7;
}
.btnCadastrar {
  height: 50px;
  border-radius: 8px;
  background: #ed2590;
  flex-shrink: 0;
  color: #fdfeff;
}
.btnCadastrar:hover {
  background: #f757ac;
  color: #fdfeff;
}
a {
  text-decoration: none;
}
.navLinks {
  display: flex;
  justify-content: space-between;
  padding: 15px 0px;
  width: 1180px;
  margin: 0 auto;
}
.links {
  display: flex;
  gap: 20px;
}
.links a:hover {
  color: #ed2590;
}
.logoNav {
  width: 75px;
}
.footer {
  color: #ed2590;
  padding: 10px;
}
.img {
  height: 200px;
  max-width: 200px;
  margin: 0 auto;
  border: 5px solid #ed2590;
  border-radius: 50%;
  object-fit: contain;
}
</style>
