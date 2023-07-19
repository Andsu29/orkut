import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarioLogado: false,
    usuarioAtivo: {},
    usuarioPostagem: [],
    listaUsuarios: [],
  },
  mutations: {
    USUARIO_POSTAGEM(state, payload) {
      state.usuarioPostagem.push(payload);
    },
    USUARIO_LOGADO(state, payload) {
      state.usuarioLogado = payload;
    },
    LISTA_USUARIOS(state, payload) {
      state.listaUsuarios.push(payload);
    },
  },
  actions: {
    USUARIO_PUBLICAR(context, payload) {
      context.commit("USUARIO_POSTAGEM", payload);
    },
  },
});

//possivelmente fazer um get com axios pra puxar o usuario do firebase e adicionar as informaçoes na pagina de usuario
//na pagina de usuario puxaria as informaçoes atraves do vuex

//possivel verificação para acessar o usuario é se o email for igual ao email do usuario cadastrado ou o token e nome fazendo um loop nos usuarios do firebase
