<template>
  <div class="search">
    <div class='input_wrap'>
      <input type='search'>
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App3'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input_wrap {
    position: relative;
    border-radius: 3px;
    background: #fff;
    height: 20px;
    padding: 0.5rem;
  }
</style>
