// comment list component
Vue.component("comment-list", {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      new_comment: null,
      comment_author: null,
      error: null
    }
  },
  methods: {
    submitComment() {
      if (this.comment_author && this.new_comment) {
        this.$emit('submit-comment', { username: this.comment_author, 
                                        content: this.new_comment})
        this.new_comment = null;
        this.comment_author = null;
      } else {
        this.error = "Enter author and comment"
      }
    }
  },
  template: `
    <div class="mt-2">
      <div class="container">
        <single-comment
          v-for="(comment, index) in comments"
          :comment="comment"
          :key="index"
        ></single-comment>
        <hr>
        <h3> {{ error }} </h3>
        <form @submit.prevent="submitComment" class="mb-3">
          <div class="form-group">
            <label for="commentAuthor">Your username</label>
            <input class="form-control" id="commentAuthor" type="text"
                          v-model="comment_author">
          </div>
          <div class="form-group">
          <label for="commentText">enter Your comment</label>
            <textarea class="form-control" id="commentText" rows="3" cols="40"
              v-model="new_comment">
            </textarea>
          </div>
          <button class="btn btn-sm btn-primary" type="submit"> Publish </button>

        </form>
      </div>
    </div>
  `
})

// single comment component
Vue.component("single-comment", {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  template: `
    <div class="mb-2">
      <div class="card">
        <div class="card-header">
          <p> Publishid by: {{ comment.username }} </p>
        </div>
        <div class="card-body">
          <p> {{ comment.content }} </p>
        </div>
      </div>
    </div>
  `
})

var app = new Vue({
  el: "#app",
  data: {
    comments: [
      { username: "alice", content: "first comment" },
      { username: "bob", content: "bob's comment" },
      { username: "iron man", content: "i'm iron man" },
      { username: "batman", content: "I'm BATMAN!" },
    ]
  },
  methods: {
    addNewComment(new_comment) {
      this.comments.push(new_comment);
    }
  }
})