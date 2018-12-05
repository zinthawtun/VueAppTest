import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'

// Import the styles d
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(value, 'YYYY-MM-DD').format('MMMM Do YYYY');
    }
});

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
