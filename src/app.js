const myNameApp = {
  data() {
    return {
      name: "Israel",
      age: 27
    }
  }
}

Vue.createApp(myNameApp).mount("#app")