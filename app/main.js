import Vue from 'nativescript-vue'
import App from './App'
import VueDevtools from 'nativescript-vue-devtools'
import axios from 'axios'
import { store } from './store'

const axiosConf = {
  baseURL: "https://polypipe.emodul.eu/"
}

let instance = axios.create(axiosConf)
Vue.prototype.$http = instance

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
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
  "Menu": Menu,
  "Zones": Zones,
  "Statistics": Statistics
}

router.navigate = (destination, direction, props) => {
  var transition = {
    name: direction,
    duration: 200,
    curve: "linear",
  }
  vue.$navigateTo(vue.$router.routes[destination], {
    transitionAndroid: transition,
    props: props
  })
}

Vue.prototype.$router = router
Vue.prototype.$store = store

const application = require("tns-core-modules/application");
if (application.android) {
  application.android.on(application.AndroidApplication.activityBackPressedEvent, (args) => {
    args.cancel = true
  })
}

vue.$start()

