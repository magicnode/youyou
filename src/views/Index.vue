<template>
  <Slider v-model="value" range></Slider>
</template>
<script>

export default {
  name: 'index',
  created () {
  },
  data () {
    return {
      value: [20, 50]
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
</style>
