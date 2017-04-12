<template>
  <div class="index">
    <div class="index-menu">
      <Menu mode="horizontal" theme="primary" active-name="1">
          <Menu-item name="1">
              <Icon type="home"></Icon>
              <a href="http://www.uu-club.com/" target="_blank">首页</a>
          </Menu-item>
          <Menu-item name="2">
              <Icon type="ios-people"></Icon>
              <router-link to="/">酒店预定</router-link>
          </Menu-item>
          <Menu-item name="3">
              <Icon type="android-boat"></Icon>
              <router-link to="/cruise">游轮预定</router-link>
          </Menu-item>
          <Menu-item name="4">
              <Icon type="navigate"></Icon>
              <router-link to="/login">登录</router-link>
          </Menu-item>
      </Menu>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer class="index-footer">
      <img src="../assets/images/footer1.gif">
      <p>copyright 2017 悠游旅游分销平台</p>
      <p>沪ICP备10220032号</p>
    </footer>
  </div>
</template>
<script>

export default {
  name: 'container',
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

.index {
  &-menu {
    a {
      color: white;
    }
  }

  .main {
    min-height: 500px;
  }

  &-footer {
    .container;
    img {
      width: 100%;
      max-height: 120px;
    }
    p {
      padding: 20px;
      padding-bottom: 0;
      text-align: center;
      font-size: 14px;
      &:last-child {
        padding-bottom: 20px;
      }
    }
  }
}
</style>
