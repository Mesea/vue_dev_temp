import Vue from 'vue'
var native = {
  setPath(_this, run) {
  },
  initPageTitle(title) {
  }
}
export default {
  install() {
    Vue.prototype.$native = native;
  },
  native
}
