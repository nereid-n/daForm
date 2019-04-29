import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import dictionaryRu from './i18n/veeValidate/ru/dictionary.js';
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  iconfont: 'fa'
});

Vue.use(VeeValidate, {
  events: 'change|blur|input',
  locale: 'ru',
  dictionary: {
    ru: dictionaryRu
  },
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
