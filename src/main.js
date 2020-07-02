import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'


Vue.config.productionTip = false;
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
        if (to.meta.requireAuth) {
            if (store.state.user.userName) {
                next()
            } else {
                next({
                    path: 'login',
                    query: {redirect: to.fullPath}
                })
            }
        } else {
            next()
        }
    }
)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
