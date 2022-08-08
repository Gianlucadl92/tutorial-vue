const app = Vue.createApp({
  data() {
    return {
      product: "Occhiali da sole",
      quantity: 150,
      sale: true,
    };
  },
});

const mountedApp = app.mount("#app");
