<template>
  <div>
    <div>
      <h2>주문 내역</h2>
      <p>{{ totalOrderCount }}건:{{ totalOrderPrice}}원</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalOrderCount() {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice() {
      return this.$store.getters.totalOrderPrice
    }
  }
}
</script>

<style>

</style>