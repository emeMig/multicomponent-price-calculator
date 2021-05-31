import Vue from 'vue'
import App from './App.vue'
import { store } from './store';
import 'bulma/css/bulma.css'

Vue.config.productionTip = false



new Vue({
    render: h => h(App),
    store
}).$mount('#app')
