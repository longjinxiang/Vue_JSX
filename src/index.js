// import './index.css'
import Vue from 'vue'
import { MyComponent } from './MyConpoment'
var vm = new Vue({
  el: '#app',
  components: {
    MyComponent
  },

  render() {
    return <MyComponent text='hello world' />
  }
})
console.log(vm)

