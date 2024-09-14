<template>
  <PrimeiroComponentVue />
  <!-- o component pode ser adicionado igual a linha debaixo tbm -->
  <!-- <primeiro-component-vue></primeiro-component-vue> -->
</template>

<script>
import PrimeiroComponentVue from './components/PrimeiroComponent.vue'
  export default {
    name: 'app',
    components: {
      PrimeiroComponentVue
    }
  }
</script>