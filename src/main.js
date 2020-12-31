import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

//toi uu lai, tach nhung code duoi ra 1 file routes.js (thuoc folder src)
/*
  import inbox from './components/inbox'
  import important from './components/important'

  const routes = [
    { path: '/inbox', component: inbox },
    { path: '/important', component: important }
  ]
*/
//import tu file routes.js
import routes from './routes.js'

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

//import cho state
import state from './state.js'
new Vue({
  //chuyen sang file state.js
  // data(){
  //   return {
  //     user: null
  //   }
  // },

  data(){
    return state;
  },

  router,

  render: h => h(App),
}).$mount('#app')
