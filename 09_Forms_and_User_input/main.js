var app = new Vue({
  el: "#app",
  data: {
    comment: null,
    comments: [],
    errors: null
  },
  methods: {
    onSubmit() {
      if (this.comment) {
        let new_commet = this.comment;
        this.comments.push(new_commet);
        this.comment = null;
        if (this.errors) {
          this.errors = null;
        }
      } else {
        this.errors = "The comment field can't be empty"
      }
    }
  }
})