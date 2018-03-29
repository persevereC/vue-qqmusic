<template>
  <div class="hello">
    <ul class='radio_list'>
      <li v-for="item in topList" :key='item.id' class='radio_item'>
        <img :src='item.picUrl' class='radio_img'>
        <div class='part_b'>
          <h3 class='radio_title'>{{ item.topTitle }}</h3>
          <ol>
              <li v-for="(i, index) in item.songList" :key='i.songname' class='song_item'>
                <span>{{ index + 1 }}</span>
                <span>{{ i.singername }}</span>
                <span>{{ i.songname }}</span>
              </li>
          </ol>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Recommend',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1',
      topList: []
    }
  },
  created () {
    axios.get('/api/v8/fcg-bin/fcg_myqq_toplist.fcg?format=json').then(resp => {
      this.topList = resp.data.data.topList
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
    margin: 10px;text-align: left;box-sizing: border-box;
    .radio_item {
      box-sizing: border-box;overflow: hidden;margin: 8px 0;background: #fff;
      .radio_img {
        width: 100px;float: left;margin-right: 15px;
      }
      .part_b {
        padding: 5px;
        .radio_title {
          margin-bottom: 10px;text-overflow: ellipsis;overflow: hidden;font-size: 16px;
        }
        .song_item {
          overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: 14px;
        }
      }
    }
  }
</style>
