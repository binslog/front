<template>
  <div>
    <button style="width:85%" class="my-1"
    :class ="{ 'is-selected' : menu.selected }"
    @click="updateMenuStatus"
     >

    <img :src="menu.image"
    v-bind="mainProps" alt="메뉴">
    {{ menu.title }}
    {{ menu.price}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  data() {
      return {
        mainProps: {
          width:50,
          height:50
        },
      }
  },
  methods : {
    updateMenuStatus() {
      this.$store.dispatch('updateMenuStatus', this.menu)
    }
  }
}
</script>

<style>
.is-selected {
  background-color : #2E8B57;
}
</style>