import Vue from 'vue';
import App from '../App.vue';

new Vue({
  render: createPage => createPage(App),
}).$mount('#app');

