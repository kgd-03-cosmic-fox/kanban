const SERVER_URL = `http://localhost:3000`;


new Vue({
  el: "#all-display-section",
  data: {
    display: "login",
    message: "hola"
  },
  methods: {
    changeDisplay(newDisplay) {
      this.display = newDisplay;
    },
    checkAuth() {
      if (localStorage.access_token) {
        //verify token
      } else {
        this.changeDisplay('login');
      }
    },
    login() {
      axios.get(`${SERVER_URL}/users/1`)
        .then(({ data }) => {
          console.log(`Welcome ${data.name} !`)
        })
        .catch((err) => {

        })
        .finally(() => {

        })
    }
  }
})