var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      currentPage : 'home-page',
      homePage : 'list'
    },
    methods:{
        click : () => {
            console.log('hello')
        }
    }
  })
