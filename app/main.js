import Vue from 'nativescript-vue'
import App from './App'
import VueDevtools from 'nativescript-vue-devtools'
import axios from 'axios'

const axiosConf = {
  baseURL: "https://polypipe.emodul.eu/"
}

let instance = axios.create(axiosConf)
Vue.prototype.$http = instance

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

var vue = new Vue({
  store,
  render: h => h('frame', [h(Login)])
})

let router = {}
router.checkAuth = function () {
  let authenticated = false;
  instance.post("is_authenticated").then(res => {
    authenticated = res.data.authenticated
    if (!authenticated) {
      vue.$navigateTo(Login)
    }
  })
}

import Login from "~/views/Login"
import Menu from "~/views/Menu"
import Home from "~/App"
import Modes from "~/views/Modes"
import Zones from "~/views/Zones"
import Statistics from "~/views/Statistics"

router.routes = {
  "Login": Login,
  "Home": Home,
  "Modes": Modes,
  "Menu":Menu,
  "Zones":Zones,
  "Statistics":Statistics
}

router.navigate = (destination, direction) => {
  console.log(direction)
  var transition = {
    name: direction,
    duration: 200,
    curve: "linear",
  }
  vue.$navigateTo(vue.$router.routes[destination], {
    transitionAndroid: transition
  })
}

Vue.prototype.$router = router

vue.$start()