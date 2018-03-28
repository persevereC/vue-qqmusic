<template>
  <div class="hello">
    <div>
      <h2>电台</h2>
      <ul class='radio_list'>
        <li v-for="item in radioList" :key='item.radioid' class='radio_item'>
          <img :src='item.picUrl' class='radio_img'>
          <h3 class='radio_title'>{{ item.Ftitle }}</h3>
        </li>
      </ul>
    </div>
    <div>
      <h2>热门歌单</h2>
      <ul class='radio_list'>
        <li v-for="item in songList" :key='item.radioid' class='radio_item'>
          <img :src='item.picUrl' class='radio_img'>
          <h3 class='radio_title'>{{ item.songListDesc }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Recommend',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1',
      radioList: [],
      songList: []
    }
  },
  created () {
    axios.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg').then(resp => {
      this.radioList = resp.data.data.radioList
      this.songList = resp.data.data.songList
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  ul, li, h3 {
    margin: 0;padding: 0;list-style: none;
  }
  .radio_list {
    padding-left: 8px;text-align: left;box-sizing: border-box;
    .radio_item {
      display: inline-block;width: 50%;padding-right: 8px;box-sizing: border-box;background: #fff;
      .radio_img {
        width: 100%;
      }
      .radio_title {
        height: 50px;text-overflow: ellipsis;overflow: hidden;
      }
    }
  }
</style>
