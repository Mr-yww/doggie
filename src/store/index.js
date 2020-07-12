import Vue from 'vue'
import Vuex from 'vuex'

// 挂载Vuex
Vue.use(Vuex)

// 创建Vue对象
const store = new Vuex.Store({
  state: {
    name: 'hello'
  }
})

export default store
