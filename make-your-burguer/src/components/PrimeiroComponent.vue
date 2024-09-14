<template>
  <div>
  <h1>Olá, Aline!</h1>
  <p>Meu nome é {{ nome }} e moro em {{ cidade }}.</p>
  </div>
</template>

<script>
export default {
  name: "Primeiro Component",
  data() {
    return {
      nome: "Israel",
      cidade: "Campinas"
    }
  }
}
</script>

<style>

</style>