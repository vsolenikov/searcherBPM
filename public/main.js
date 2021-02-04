import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data:{
      product:"Носки",
      description:"Тёплые, уютные и красивые"

    },
    methods: {
      addToCart() {
        this.cart += 1
      },
      updateProduct(variantImage) {
        this.image = variantImage
      },
      delFromCart() {
        this.cart -= 1
      }
    }
}).$mount('#app')
