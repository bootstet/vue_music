<template>
  <div>
      歌手
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <!-- <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000
        // direction : 'vertical',
        // grabCursor : true,
        // setWrapperSize :true,
        // autoHeight: true,
        // pagination : '.swiper-pagination',
        // paginationClickable :true,
        // prevButton:'.swiper-button-prev',
        // nextButton:'.swiper-button-next',
        // scrollbar:'.swiper-scrollbar',
        // mousewheelControl : true,
        // observeParents:true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        // debugger: true
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  // mounted() {
  //   // current swiper instance
  //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  //   console.log('this is current swiper instance object', this.swiper)
  //   this.swiper.slideTo(3, 1000, false)
  // }
}
</script>
<style scoped lang="scss" lef="stylesheet/scss">
  @import "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.css" 
</style>


