// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { NavBar, Image, Row, Col, Cell, DropdownMenu
  , DropdownItem, Search, Button, Toast, Card, Tab, Tabs
  , Collapse, CollapseItem
  , Icon
} from 'vant'

Vue.use(NavBar)
Vue.use(Image)
Vue.use(Row).use(Col).use(Cell)
Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(Search)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Card)

Vue.use(Tab).use(Tabs)
Vue.use(Collapse).use(CollapseItem)

Vue.use(Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
