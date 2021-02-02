Vue.component("comment", {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  template: `
    <div>
      <div class="card-body">
        <p> {{ comment.username }} </p>
        <p> {{ comment.content }} </p>
      </div>
      <hr>
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
  }
})