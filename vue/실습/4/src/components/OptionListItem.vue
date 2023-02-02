<template>
  <div>
    <p class = "my-4">
    {{ option.type }}
    <button @click="decrease"> - </button>
    {{ option.count}}
    <button @click="increase"> + </button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      this.$store.dispatch('increase', this.option)
    },
    decrease() {
      this.$store.dispatch('decrease', this.option)
    },
  },
  computed: {
    menuList() {
      return this.$store.state.optionList
    }
  }
}
</script>

<style>
</style>