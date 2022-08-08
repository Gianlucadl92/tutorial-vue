const app = Vue.createApp({
  data() {
    return {
      comments: [
        {
          username: "Alice",
          content: "Primo Commento",
        },

        {
          username: "Bob",
          content: "Secondo Commento",
        },

        {
          username: "Maria",
          content: "Terzo Commento",
        },

        {
          username: "Paolo",
          content: "Quarto Commento",
        },
      ],
    };
  },
  methods: {
    addNewComment(newComment) {
      this.comments.push(newComment);
    },
  },
});

app.component("comment-list", {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      commentBody: null,
      commentAuthor: null,
      error: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.commentAuthor && this.commentBody) {
        const newComment = {
          username: this.commentAuthor,
          content: this.commentBody,
        };
        this.$emit("submit-comment", newComment);

        this.commentAuthor = null;
        this.commentBody = null;

        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "Compila entrambi i campi del form!";
      }
    },
  },
  template: `
  <div class="container my-2">

    <single-comment
        v-for="(comment, index) in comments"
        :comment="comment"
        :key="index"
      ></single-comment>

    <hr>

    <h3>{{ error }}</h3>

    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="commentAuthor">Il Tuo Username</label>
        <input v-model="commentAuthor" type="text" class="form-control" id="commentAuthor" />
      </div>

      <div class="form-group">
        <label for="commentBody">Aggiungi un Commento</label>
        <textarea v-model="commentBody" class="form-control" id="commentBody" cols="40" rows="3"></textarea>
      </div>

      <button class="btn btn-lg btn-primary" type="submit">Pubblica il Commento</button>
    </form>

  </div>
  `,
});

app.component("single-comment", {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  template: `
      <div class="mb-2">
      <div class="card">
        <div class="card-header">
          <p>Pubblicato da: {{ comment.username }}</p>
        </div>
        <div class="card-body">
          <p>{{ comment.content }}</p>
        </div>
      </div>
    </div>
      `,
});

const mountedApp = app.mount("#app");
