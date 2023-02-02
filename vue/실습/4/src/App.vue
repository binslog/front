<template>
  <div id="app">
      <h3>Coffee Order App</h3>
      <b-container class="bv-example-row bg-light">
        <b-row>
          <b-col class = "m-4"><MenuListVue/></b-col>
          <b-col class = "m-4"><SizeListVue/></b-col>
          <b-col class = "m-4"><OptionListVue/></b-col>
        </b-row>
      </b-container>
      <b-button variant="success" class="my-5" style="width:70%" size="lg">장바구니 담기</b-button>
      <OrderListVue/>
  </div>
</template>

<script>
import MenuListVue from '@/components/MenuList.vue'
import SizeListVue from '@/components/SizeList.vue'
import OrderListVue from '@/components/OrderList.vue'
import OptionListVue from '@/components/OptionList.vue'


export default {
  name: 'app',
  components: {
    MenuListVue,
    SizeListVue,
    OrderListVue,
    OptionListVue,
  },
}
</script>

<style>
  #app{
    text-align: center;
  }
</style>