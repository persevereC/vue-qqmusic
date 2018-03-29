<template> 
 <div class="slide" @mouseover="stop()" @mouseout="move()"> 
  <div class="slideshow"> 
   <transition-group tag="ul" name="image"> 
    <li v-for="(img, index) in list" v-show="index===mark" :key="index" class='li'> 
     <a href="#"> 
      <img :src='img.picUrl'> 
     </a> 
    </li> 
   </transition-group>
  </div> 
  <div class="bar"> 
   <span v-for="(item, index) in list" :class="{ 'active':index===mark }" :key="index" @click='change(index)'></span> 
  </div> 
 </div> 
</template> 

<script>
export default {
  name: 'BannerSwiper',
  data () {
    return {
      timer: null, //定时器 
      mark: 0 //比对图片索引的变量 
    }
  },
  props: [
    'list', 'len'
  ],
  created () { 
    this.play() 
  }, 
  methods: { 
    autoPlay () { 
      this.mark++; 
      if (this.mark === this.len) { 
        this.mark = 0 
      } 
    }, 
    play () { 
      this.timer = setInterval(this.autoPlay, 2500) 
    },
    change (i) { 
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500) 
    }
  }
} 
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style> 
 * { 
  margin: 0;
  padding: 0;
  list-style: none;
 } 
 .slide { 
  width: 375px;
  height: 150px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
 } 
 .slideshow { 
  width: 100%;
 } 
 .li { 
  position: absolute;
 } 
 img { 
  width: 100%;
 } 
 .bar { 
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0 auto;
  z-index: 10; 
  text-align: center; 
 } 
 .bar span { 
  width: 6px; 
  height: 6px; 
  border: 1px solid; 
  background: white; 
  display: inline-block; 
  margin-right: 10px; 
  border-radius: 50%;
 } 
 .active { 
  background: rgba(144,144,144,.8)!important; 
 } 
 .image-enter-active { 
  transform: translateX(0); 
  transition: all 1.5s ease; 
 } 
 .image-leave-active { 
  transform: translateX(-100%); 
  transition: all 1.5s ease; 
 } 
 .image-enter { 
  transform: translateX(100%); 
 } 
 .image-leave { 
  transform: translateX(0); 
 } 
</style> 