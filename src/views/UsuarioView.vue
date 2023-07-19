<template>
  <div>
    <usuario-deslogado v-if="!$store.state.usuarioLogado" />
    <section class="body" v-if="$store.state.usuarioLogado">
      <section class="containerView">
        <div class="card1" :class="{ ativo: !imagemUrl }">
          <div v-if="imagemUrl">
            <img :src="imagemUrl" class="img" />
          </div>
          <div v-else>
            <input class="selecionarArquivo" type="file" @change="exibirFoto" />
          </div>
          <div>
            <p>{{ $store.state.usuarioAtivo.nome }}</p>
            <p>
              {{ $store.state.usuarioAtivo.cidade }}
              {{ $store.state.usuarioAtivo.estado }}
            </p>
            <p class="online">Online</p>
          </div>
        </div>
        <div class="card2">
          <h1>Olá, {{ $store.state.usuarioAtivo.nome }}</h1>
          <div class="status">
            <p class="textoStatus">Status do usuario</p>
          </div>
          <div class="qtdPost">
            <div class="">
              <p>Recados</p>
              <p class="text-center">0</p>
            </div>
            <div>
              <p>Fotos</p>
              <p class="text-center">
                {{ $store.state.usuarioPostagem.length }}
              </p>
            </div>
            <div>
              <p>Videos</p>
              <p class="text-center">0</p>
            </div>
            <div>
              <p>Fãs</p>
              <p class="text-center">0</p>
            </div>
          </div>
          <div class="postagens">
            <div>
              <div class="form-floating">
                <textarea
                  v-model="inputPost"
                  class="inputPost"
                  placeholder="Escreva algo..."
                  id="floatingTextarea2"
                  style="height: 100px; margin-bottom: 10px"
                ></textarea>
              </div>
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                  aria-label="Upload"
                  @change="postarFoto"
                />
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Ver
                </button>
                <button class="btn btn-primary" @click.prevent="publicar">
                  Publicar
                </button>
              </div>
            </div>
          </div>
          <div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <img class="imgModal" :src="imagemUrl2" />
                    <p>{{ inputPost }}</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Fechar
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="publicar"
                    >
                      Publicar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="feedView" v-if="feed">
            <div
              v-for="img in $store.state.usuarioPostagem"
              :key="img"
              class="p-3 feed"
            >
              <div class="d-flex gap-2 align-items-center p-3">
                <img class="fotoPost" :src="imagemUrl" alt="foto do post" />
                {{ $store.state.usuarioAtivo.nome }}
              </div>
              <img class="imgFeed" :src="img.img" alt="foto" />
              <p>{{ img.text }}</p>
            </div>
          </div>
        </div>
        <div class="divCard">
          <div class="card3">
            <div class="d-flex justify-content-between">
              <p>Amigos(248)</p>
              <router-link to="verAmigos" class="ver-todos"
                >Ver todos</router-link
              >
            </div>
            <div class="amigos">
              <div class="amigo">
                <img src="../assets/fernando.svg" alt="" />
                <p>Fernando</p>
              </div>
              <div class="amigo">
                <img src="../assets/ana.svg" alt="" />
                <p>Ana</p>
              </div>
              <div class="amigo">
                <img src="../assets/carlos.svg" alt="" />
                <p>Carlos</p>
              </div>
              <div class="amigo">
                <img src="../assets/vitor.svg" alt="" />
                <p>Vitor</p>
              </div>
              <div class="amigo">
                <img src="../assets/matheus.svg" alt="" />
                <p>Matheus</p>
              </div>
              <div class="amigo">
                <img src="../assets/ramos.svg" alt="" />
                <p>Ramos</p>
              </div>
              <div class="amigo">
                <img src="../assets/raphael.svg" alt="" />
                <p>Raphael</p>
              </div>
              <div class="amigo">
                <img src="../assets/julia.svg" alt="" />
                <p>Julia</p>
              </div>
              <div class="amigo">
                <img src="../assets/carol.svg" alt="" />
                <p>Carol</p>
              </div>
            </div>
          </div>
          <div class="card4">
            <div class="d-flex justify-content-between">
              <p>Comunidade (42)</p>
              <router-link to="verComunidade" class="ver-todos"
                >Ver todos</router-link
              >
            </div>
            <div class="amigos">
              <div class="amigo">
                <img src="../assets/carro.svg" alt="" />
                <p>Carros</p>
              </div>
              <div class="amigo">
                <img src="../assets/desenhos.svg" alt="" />
                <p>Desenhos</p>
              </div>
              <div class="amigo">
                <img src="../assets/crazy.svg" alt="" />
                <p>Crazy</p>
              </div>
              <div class="amigo">
                <img src="../assets/fotos.svg" alt="" />
                <p>Fotos</p>
              </div>
              <div class="amigo">
                <img src="../assets/animes.svg" alt="" />
                <p>Animes</p>
              </div>
              <div class="amigo">
                <img src="../assets/leitura.svg" alt="" />
                <p>Leitura</p>
              </div>
              <div class="amigo">
                <img src="../assets/brinks.svg" alt="" />
                <p>Brinks</p>
              </div>
              <div class="amigo">
                <img src="../assets/book.svg" alt="" />
                <p>My Book</p>
              </div>
              <div class="amigo">
                <img src="../assets/cafe.svg" alt="" />
                <p>Café</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import UsuarioDeslogado from "@/components/UsuarioDeslogado.vue";
//import TheMenu from "@/components/TheMenu.vue";

export default {
  components: { UsuarioDeslogado },
  data() {
    return {
      imagemUrl: this.$store.state.usuarioAtivo.img,
      imagemUrl2: "",
      inputPost: "",
      feed: false,
    };
  },
  methods: {
    exibirFoto(event) {
      //fazer um update com o axios da foto selecionada para atualizar o perfil no firebase
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
    postarFoto(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.imagemUrl2 = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    },
    publicar() {
      const publicacao = {
        img: this.imagemUrl2,
        text: this.inputPost,
      };
      this.$store.dispatch("USUARIO_PUBLICAR", publicacao);
      this.feed = true;
    },
  },
  created() {
    this.$store.commit("USUARIO_LOGADO", true);
  },
};
</script>

<style scoped>
.img {
  height: 200px;
  max-width: 200px;
  margin: 0 auto;
  border: 5px solid #ed2590;
  border-radius: 50%;
  object-fit: contain;
}
.btnAlterar {
  background-color: #ed2590;
  color: #fff;
}
.containerView {
  width: 1200px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 30px;
}
.body {
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: 100vh;
  background: #d9e6f7;
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
.selecionarArquivo {
  width: 230px;
  padding-bottom: 10px;
}
.card1 {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 400px;
  padding: 50px 30px;
  text-align: center;
}
.card2 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  border-radius: 10px;
  width: 500px;
  flex: 1;
  padding: 50px;
}
.card3,
.card4 {
  background-color: #fff;
  border-radius: 10px;
  height: 400px;
  width: 300px;
  padding: 20px;
}
.divCard {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ativo {
  padding-top: 110px;
}
.status {
  background-color: #eff3f8;
  border-radius: 8px;
  padding: 10px 16px;
}
.textoStatus {
  margin: auto;
}
.inputPost {
  width: 100%;
  border: none;
}
.postagens {
  background-color: #eff3f8;
  padding: 5px;
  border-radius: 8px;
}
.imgModal {
  width: 100%;
}
.feedView {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.feed {
  background-color: #eff3f8;
  padding: 40px;
  border-radius: 8px;
  height: 550px;
}
.qtdPost {
  display: flex;
  justify-content: space-evenly;
}
.online::before {
  content: "";
  height: 10px;
  width: 10px;
  background-color: rgb(26, 219, 26);
  display: inline-block;
  border-radius: 50%;
  margin-right: 5px;
}
.fotoPost {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.imgFeed {
  max-height: 400px;
  object-fit: cover;
}
.amigos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.amigo {
  height: 100%;
  width: 100%;
  padding: 5px;
}
.amigos img {
  height: 60px;
}
.amigos p {
  text-align: center;
}
.ver-todos {
  text-decoration: none;
  color: #ed2590;
}
</style>
