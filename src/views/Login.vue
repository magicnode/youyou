<template>
  <div class="login">
    <p>接入qq登录需要域名备案， 未备案域名无法接入</p>
  </div>
</template>
<script>
export default {
  name: 'login',
  created () {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
@import '../assets/styles/colors.less';
@import '../assets/styles/helper.less';

.login {
  .container;
  padding: 20px 0;
  p {
    font-size: 18px;
  }
}
</style>
