<template>
  <div class ="bg-white">
    <h4>1. 음료를 고르세요</h4>
  <MenuListItem
  v-for="(title, price) in menuList"
  :key="price"
  :menu="title"
  />
  </div>
  
</template>

<script>
import MenuListItem from '@/components/MenuListItem'

export default {
  name : "MenuList",
  components: {
    MenuListItem
  },
  computed: {
    menuList() {
      return this.$store.state.menuList
    }
  }
}

</script>