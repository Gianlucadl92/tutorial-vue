const app = Vue.createApp({
  data() {
    return {
      message: "Hello World",
      num: 5,
      img: "https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg",
      link: "https://vuejs.org",
    };
  },
});

const mountedApp = app.mount("#app");
