import Vue from 'vue' ;
import App from './App.vue'

// const baseUrl = "http://localhost:3000"

new Vue ({
    render: createElement=> createElement(App),//>>> App.vue
}).$mount('#app');//Mount artinya nanti isian vue bakal dimasukin ke div