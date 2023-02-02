<template>
  <div class ="bg-white">
    <h4>2. 사이즈를 고르세요</h4>
    <SizeListItem
    v-for="(name, price) in sizeList"
    :key="price"
    :size="name"
    />
  </div>
</template>


<script>
import SizeListItem from '@/components/SizeListItem'

export default {
  name : "SizeList",
  components: {
    SizeListItem
  },
  computed: {
    sizeList() {
      return this.$store.state.sizeList
    }
  }
}
</script>

<style>

</style>