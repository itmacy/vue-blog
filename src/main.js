import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Carousel,
  CarouselItem,
  Timeline,
  TimelineItem,
  Card,
  Input,
  Drawer
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/index.scss'

Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Timeline.name, Timeline)
Vue.component(TimelineItem.name, TimelineItem)
Vue.component(Card.name, Card)
Vue.component(Input.name, Input)
Vue.component(Drawer.name, Drawer)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
