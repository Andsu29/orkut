<template>
  <div class="deslogadoView">
    <p>⚠️ (Erro ao carregar a página) ⚠️</p>
    <h1>Faça seu</h1>
    <router-link to="/">Login</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.deslogadoView {
  background: #d9e6f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 3rem;
}
a,
p {
  font-size: 2rem;
}
</style>
