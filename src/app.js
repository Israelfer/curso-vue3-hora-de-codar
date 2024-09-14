const myNameApp = {
  data() {
    return {
      name: "",
      age: 27,
      input_name: ""
    }
  },
  methods: {
    submitForm (e) {
      e.preventDefault();
      this.name = this.input_name;
    }
  }
}

Vue.createApp(myNameApp).mount("#app")