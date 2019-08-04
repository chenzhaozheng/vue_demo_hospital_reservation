<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- <van-nav-bar
      title="医院预约"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*margin-top: 60px; text-align: center;   color: #2c3e50;
  background:#f1f3f2;*/

}
</style>
