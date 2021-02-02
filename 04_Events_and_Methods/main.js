var app = new Vue({
  el: '#app',
  data: {
    lesson: "Events and Methods",
    counter: 0
  },
  methods: {
    incrementCounter() {
      this.counter++;
      console.log(this.counter)
      if (this.counter === 10) {
        alert("Counter is at 10")
      }
    },
    overTheBox() {
      console.log("OVer the green boxs")
    }
  }
})