<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navLinks">
      <div>
        <router-link to="/">
          <img class="logoNav" src="../assets/logo-orkut.svg" alt="logo" />
        </router-link>
      </div>
      <div class="links">
        <router-link to="/sobre" class="nav-link">Sobre o Orkut</router-link>
        <router-link to="/seguranca" class="nav-link"
          >Centro de segurança</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
</style>
