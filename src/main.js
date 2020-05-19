import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import LoginDashBoard from './components/LoginDashBoard.vue'
import HomeDashBoard from './components/HomeDashBoard.vue'
import RegisterDashBoard from './components/RegisterDashBoard.vue'
import Error404 from './components/Error404.vue'

/*
import LastArticles from 'components/LastArticles.vue'
import MiComponente from 'components/MiComponente.vue'
*/

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/Login', component: LoginDashBoard},
  /*
  {path: '/home', component: HomeDashBoard},
  */
  {path:'/Home/:id?',name:'HomeName',component:HomeDashBoard},
  {path: '/Register', component: RegisterDashBoard},
  {path: '/', component: RegisterDashBoard},
  {path: '*', component: Error404},
  
  
  /*
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/mi-componente', component: MiComponente},
  {path: '/', component: LastArticles},
  */
];

const router = new VueRouter ({
routes,
mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
