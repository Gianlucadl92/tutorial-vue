const app = Vue.createApp({
  data() {
    return {
      comments: [
        {
          id: 200,
          username: "Alice",
          content: "Primo Commento",
        },

        {
          id: 201,
          username: "Bob",
          content: "Secondo Commento",
        },

        {
          id: 202,
          username: "Maria",
          content: "Terzo Commento",
        },

        {
          id: 203,
          username: "Paolo",
          content: "Quarto Commento",
        },
      ],
    };
  },
});

app.component("comment", {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  template: `
    <div>
    <div class="card-body">
      <p><strong>{{ comment.username }}</strong></p>
      <p>{{ comment.content }}</p>
    </div>
    <hr>
  </div>
    `,
});

const mountedApp = app.mount("#app");
