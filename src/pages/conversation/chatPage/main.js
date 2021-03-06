import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    usingComponents: {
      'i-button': '../../static/dist/button/index',
      'Input': '../../static/dist/input/index'
    }
  }
}
