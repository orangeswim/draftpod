import Vue from 'vue'

import 'bootswatch/dist/slate/bootstrap.min.css'
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap.bundle'
import './styles/slate.css'

import router from './router'
import store from './store'

// TODO: storage capacity for localStorage
//   - limit recents
//   - clear out packs as they are used
//   - clear out other players as they are used

// TODO: vuex nested data is slow (dom updates triggered for all sets)
// I think we need to operate on a copy and set in one shot

// TODO: resume/new/recent (navigator)

// TODO: implement separate piles for instants and sorceries in deck

// TODO: flicker when pack is loading

// TODO: initial draft ai

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h('router-view')
}).$mount('#app');
