<template>
  <div>
    <Header/>
    <PrimeiroComponente/>
    <LifeCycle/>
    <Pessoas/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue' //Aqui ele ainda não está sendo usado, mas está disponível para o uso
import LifeCycle from './components/LifeCycle.vue'
import Pessoas from './components/Pessoas.vue'

export default {
    name: 'App',
    components: {
      Header,
      PrimeiroComponente,
      LifeCycle,
      Pessoas
    }
  }
</script>

<style>
  body {
    background-color: #333;
    color: #fff;
  }

  a{
    color: red;
  }

  .color-email{
    background-color: #000;
  }
</style>