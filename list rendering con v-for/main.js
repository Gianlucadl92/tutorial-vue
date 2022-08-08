const app = Vue.createApp({
  data() {
    return {
      users: [
        {
          id: 576,
          name: "Alice",
          profession: "developer",
        },

        {
          id: 577,
          name: "Mario",
          profession: "ingegnere",
        },

        {
          id: 578,
          name: "Federico",
          profession: "manager",
        },

        {
          id: 579,
          name: "Martina",
          profession: "designer",
        },
      ],
    };
  },
});

const mountedApp = app.mount("#app");
