<template>
  <div class="index">
    <div class="index-menu">
      <Menu mode="horizontal" theme="primary" active-name="1">
          <Menu-item name="1">
              <Icon type="home"></Icon>
              <router-link to="">首页</router-link>
          </Menu-item>
          <Menu-item name="2">
              <Icon type="ios-people"></Icon>
              酒店预定
          </Menu-item>
          <Menu-item name="3">
              <Icon type="aperture"></Icon>
              游轮预定
          </Menu-item>
      </Menu>
    </div>

    <div class="index-main">
      
    </div>

  </div>
</template>
<script>

export default {
  name: 'index',
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
<style lang="less" scoped>
a {
  color: white;
}
.index {
  &-main {
    width: 960px;
    border: 0px solid #ccc;
    margin: 0 auto;
  }
}
</style>
