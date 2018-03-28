<template>
  <div id="app">
    <header class="mod_header">
      <i class="music_logo">QQ音乐</i>
      <a href="javascript:;" class="btn_download">下载APP</a>
    </header>
    <nav class="mod_nav">
      <span :class="[current===index?'current': '']" v-for='(item, index) in nav' :key='index' @click='changeNav(item, index)'>{{ item.name }}</span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nav: [{
        name: '推荐',
        path: '/recommend'
      }, {
        name: '排行榜',
        path: '/toplist'
      }, {
        name: '搜索',
        path: '/search'
      }],
      current: 0
    }
  },
  methods: {
    changeNav (item, index) {
      this.current = index
      this.$router.push({path: item.path})
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}
a{
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mod_header {
  position: relative;
  height: 44px;
  background: #31c27c;
  .music_logo {
    float: left;
    display: block;
    width: 90px;
    height: 25px;
    margin: 9px 0 0 10px;
    background-image: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo.png?max_age=19830212&d=20151105145423);
    background-size: cover;
    background-repeat: no-repeat;
    text-indent: -9999px;
  }
  .btn_download {
    position: absolute;
    display: inline-block;
    right: 10px;
    top: 8px;
    height: 28px;
    padding: 0 12px;
    line-height: 28px;
    border-radius: 99px;
    font-size: 14px;
    background: #149c5a;
    color: #fff;
  }
}
.mod_nav {
  display: flex;background: #fff;
  span {
    display: block;height: 40px;line-height: 40px;flex: 1;text-align: center;font-size: 16px;color: rgba(0,0,0,0.6);
    &.current{
      color: #31c27c;border-bottom: 2px solid;
    }
  }
}
</style>
