<template>
  <div class="body">
    <section class="card1">
      <h1>Olá, Nome do usuario</h1>
      <div class="status">
        <p class="textoStatus">Status do usuario</p>
      </div>
      <section class="avaliacoes">
        <div class="emoji">
          <p>Fãs</p>
          <img class="svg" src="../assets/Star.svg" alt="" />
        </div>
        <div class="emoji">
          <p>Confiável</p>
          <img class="svg" src="../assets/Smiley.svg" alt="" />
        </div>
        <div class="emoji">
          <p>Legal</p>
          <img class="svg" src="../assets/ThumbsUp.svg" alt="" />
        </div>
        <div class="emoji">
          <p>Sexy</p>
          <img class="svg" src="../assets/Heart.svg" alt="" />
        </div>
      </section>
      <section class="descricao">
        <p>Relacionamento: <span style="color: #000">Solteiro</span></p>
        <p>Aniversário: <span style="color: #000">10 de abril</span></p>
        <p>Idade: <span style="color: #000">25</span></p>
        <p>Interesses no Orkut: <span style="color: #000">Solteiro</span></p>
        <p>Quem sou eu: <span style="color: #000">Programador</span></p>
        <p>Filhos: <span style="color: #000">Não</span></p>
        <p>Sexo: <span style="color: #000">Masculino</span></p>
        <p>Fumo:<span style="color: #000">Não</span></p>
        <p>Bebo: <span style="color: #000">Depende do dia</span></p>
        <p>Moro: <span style="color: #000">Guarantã</span></p>
        <p>País: <span style="color: #000">Brasil</span></p>
        <p>Cidade natal: <span style="color: #000">São Paulo</span></p>
        <p>
          Músicas:
          <span style="color: #000">Trap </span>
          <span style="color: #ed2590">Rap </span>
          <span style="color: green">Indie</span>
        </p>
        <p>
          Filmes:
          <span style="color: #000">A rede social </span>
          <span style="color: #ed2590">Meu amigo totoro</span>
        </p>
      </section>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: 100vh;
  background: #d9e6f7;
}
.card1 {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  gap: 20px;
  text-align: start;
  width: 800px;
  margin: 0 auto;
  padding: 50px;
}
.svg {
  width: 30px;
}
.svg:hover {
  transform: scale(1.1);
}
.status {
  background-color: #eff3f8;
  border-radius: 8px;
  padding: 10px 16px;
}
.textoStatus {
  margin: auto;
}
.avaliacoes {
  display: flex;
  justify-content: start;
  gap: 20px;
}
.emoji {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.descricao {
  color: #b4aeae;
}
li {
  margin-bottom: 20px;
}
</style>
