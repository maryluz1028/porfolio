import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import 'aos/dist/aos.css'
import AOS from 'aos/dist/aos.js'
import anime from 'animejs/lib/anime.min'
 
Vue.config.productionTip = false 



new Vue({
  router,
  store, 
  created() {
    AOS.init()
  }, 
  mounted() {
   anime({
      targets:'.morph',
      d:[
        // { value:'M0,0H1366V386.487s-171,75.078-537,16.321c-116-22.2-229-91.181-434-61.368S-.5,304.984-.5,304.984Z'},
        { value:'M0,0H1366V566s-166,80-410,26S761,488.5,584,456s-204,16-338,14S0,440,0,440Z'}
      ],
      easing:'easeInOutSine',
      duration:1500, 
      loop:false,
      autoplay:true
    })   
  },
  render: h => h(App)
}).$mount('#app')

