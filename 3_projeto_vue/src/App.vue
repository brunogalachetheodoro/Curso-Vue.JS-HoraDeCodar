<template>
  <div>
    <PrimeiroComponente/>
    <LifeCycle/>
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue' //Aqui ele ainda não está sendo usado, mas está disponível para o uso
import LifeCycle from './components/LifeCycle.vue'

export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle
    }
  }
</script>
