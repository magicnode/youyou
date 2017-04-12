<template>
  <div>
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <Steps :current="current">
        <Step title="步骤1"></Step>
        <Step title="步骤2"></Step>
        <Step title="步骤3"></Step>
        <Step title="步骤4"></Step>
    </Steps>
    <i-button type="primary" @click="next">下一步</i-button>
  </div>
</template>
<script>

export default {
  data () {
    return {
      current: 0
    }
  },
  methods: {
    next () {
      if (this.current === 3) {
        this.current = 0
      } else {
        this.current += 1
      }
    }
  }
}

</script>
