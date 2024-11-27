<script setup>
  import Cabecalho from './components/Cabecalho.vue';
  import Banner from './components/Banner.vue';
  import Info from './components/Info.vue';
  import Text from './components/Text.vue';
  import Conteudo from './components/Conteudo.vue';
  import Blocks from './components/Blocks.vue';
</script>

<template>
  <Cabecalho />
  <main>
    <Banner />
    <Info />
    <Text />
    <Conteudo />
    <Blocks />
  </main>
</template>