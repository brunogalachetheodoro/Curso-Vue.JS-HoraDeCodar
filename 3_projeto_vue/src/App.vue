<template>
  <div>
    <PrimeiroComponente/>
    <LifeCycle/>
    <Pessoas/>
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue' //Aqui ele ainda não está sendo usado, mas está disponível para o uso
import LifeCycle from './components/LifeCycle.vue'
import Pessoas from './components/Pessoas.vue'

export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoas
    }
  }
</script>
