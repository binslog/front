<template>
  <div class ="bg-white">
    <h4>3. 옵션을 고르세요.</h4>
    <OptionListItem
    v-for="(type, count) in optionList"
    :key ="count"
    :option="type"
    />
  </div>
</template>

<script>
import OptionListItem from '@/components/OptionListItem'

export default {
  name: "OptionList",
  components: {
    OptionListItem,
  },
  computed: {
    optionList() {
      return this.$store.state.optionList
    }
  },
}
</script>