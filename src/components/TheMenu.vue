<template>
  <header>
    <nav class="headNav">
      <div class="containerNav">
        <div>
          <router-link to="/usuario">
            <img class="logoNav" src="../assets/logo-orkut.svg" alt="logo" />
          </router-link>
        </div>
        <div class="links" id="navbarSupportedContent">
          <router-link to="/usuario" class="nav-link">Início</router-link>
          <router-link to="/perfil" class="nav-link">Perfil</router-link>
          <router-link to="" class="nav-link">Comunidades</router-link>
          <router-link to="" class="nav-link">Jogos</router-link>
        </div>
        <div>
          <form class="d-flex" role="search">
            <input
              class="inputMenu"
              type="search"
              placeholder="Pesquisar no Orkut"
              aria-label="Search"
            />
          </form>
        </div>
        <div>
          <ul>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ $store.state.usuarioAtivo.nome }}
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/conta"
                    >Minha Conta</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/forum"
                    >Sobre</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li @click="deslogar()">
                  <router-link class="dropdown-item" to="/">Sair</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    deslogar() {
      this.$store.state.usuarioLogado = false;
      this.$store.state.usuarioAtivo = {};
      this.$store.state.usuarioPostagem = [];
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
li {
  text-align: center;
}
.containerNav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 1200px;
  margin: 0 auto;
}
.linksNav {
  display: flex;
  gap: 30px;
}
.headNav {
  padding: 5px;
  background-color: #fdfeff;
}
.inputMenu {
  border: none;
  height: 40px;
  width: 300px;
  background-color: #eff3f8;
  padding: 10px;
  flex-shrink: 0;
  border-radius: 8px;
}
.inputMenu:hover,
.inputMenu:focus {
  transform: scale(1.1);
  transition: all 0.3s;
}
.links {
  display: flex;
  gap: 30px;
}
.links a:hover {
  color: #ed2590;
}
.logoNav {
  width: 75px;
}
</style>
