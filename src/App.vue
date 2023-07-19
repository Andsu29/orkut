<template>
  <div id="app">
    <the-menu v-if="$store.state.usuarioLogado" />
    <the-header-login v-else />
    <transition mode="out-in">
      <router-view class="bodyView" />
    </transition>
    <the-footer />
  </div>
</template>

<script>
import TheMenu from "@/components/TheMenu.vue";
import TheHeaderLogin from "@/components/TheHeaderLogin.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  data() {
    return {
      usuarioLogado: false,
    };
  },
  components: {
    TheMenu,
    TheHeaderLogin,
    TheFooter,
  },
};
</script>

<style>
body {
  min-height: 100vh;
  background: #d9e6f7;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
body,
p,
h1,
h2,
h3,
ul,
li {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}

.btnPadrao {
  height: 50px;
  border-radius: 8px;
  background: #ed2590;
  flex-shrink: 0;
  color: #fdfeff;
}
.btnPadrao:hover {
  background: #f757ac;
  color: #fdfeff;
}

.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
