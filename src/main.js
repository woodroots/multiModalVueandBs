import Vue from 'vue'
import App from './App.vue'
import $ from "jquery";

import 'bootstrap/dist/css/bootstrap.min.css'
require('bootstrap/dist/js/bootstrap');

Vue.config.productionTip = false

//kコンポーネントのレジスト
const files = require.context('./components/', true, /\.vue$/);
const components = {};
files.keys().forEach(key => {
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
});

// 読み込んだvueファイルをグローバルコンポーネントとして登録
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});

//モーダル用function

//上記でコンポーネント登録しているはずなのになぜかエラーが出るので…
import modalOuter from './components/modalOuter.vue'
var modalFunc = {
  methods: {
    openModal(contents, size) {
      var currentModal = document.querySelectorAll(".modal");
      var modalLength = currentModal.length;
      var modalId = 'modal' + (modalLength + 1);
      var ComponentClass = Vue.extend(modalOuter);
      var instance = new ComponentClass({
        propsData: {
          contents: contents,
          size: size,
          id: modalId
        }
      });
      instance.$mount();
      document.body.appendChild(instance.$el);
      var zIndexbase = 1050; //モーダルのデフォルトz-index
      this.$nextTick(function () {
        var $currentModal = $('#' + modalId);
        $currentModal.css('z-index', zIndexbase + modalLength).on('transitionstart', function () {
          $(this).next('.modal-backdrop').css('z-index', zIndexbase + modalLength - 1)
        })
        $currentModal.modal('show');

      })
    }
  },
}
Vue.mixin(modalFunc);

new Vue({
  render: h => h(App)
}).$mount('#app')