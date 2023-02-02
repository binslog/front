<template>
  <div>
    <!-- class = "my-3 bg-white" -->
    <button style="width:85%" 
    @click ="updateSizeStatus"
    :class ="{'is-selected' : size.selected }" class="my-3"
    >
    {{ size.name }}
    {{ size.price }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods:{
    updateSizeStatus() {
      this.$store.dispatch('updateSizeStatus',this.size)
    }
  }
}
</script>

<style>
.is-selected {
  background-color: #2E8B57 ;
}
</style>