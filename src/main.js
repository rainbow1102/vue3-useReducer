import {createApp} from 'vue'
import App from './App.vue'

import './registerServiceWorker'

import router from './router'
import store from './store'

let app = createApp(App)

/*import * as utils from "./utils/index"
app.config.globalProperties.utils = utils*/

const myPlugin = {
  install(app, options) {
    console.log("app:", app.config.globalProperties)


    app.config.globalProperties.$info = "123456789"
  }
}
app.use(myPlugin, {
  id: 1,
  name: "测试"
})

app.use(store)
app.use(router)
app.mount('#app')
