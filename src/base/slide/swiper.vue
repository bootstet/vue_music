<template>
  <div class="swiper" :option="swiperOption" ref="swiper">
    <div class="swiper-group" ref="swiperGrounp">
      <slot>

      </slot>
    </div>
  </div>
</template>
<script>
import { addClass } from '../../common/js/dom.js'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue from 'vue'

Vue.use(VueAwesomeSwiper)

export default {
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        effect: 'coverflow',
        grabCursor: true,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        mousewheelControl: true,
        observeParents: true
      }
    }
  },
  mounted () {
    this._initSwiperWidth()
    this.swiper.slideTo(3, 1000, false)
  },
  computed: {
    swiper () {
      return this.$refs.swiper.swiper
    }
  },
  methods: {
    _initSwiperWidth () {
      this.children = this.$refs.swiperGrounp.children
      let width = 0
      let swiperWidth = this.$refs.swiper.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'swiper-item')
        console.log(child)
        console.log(swiperWidth)
        child.style.width = swiperWidth + 'px'
        width += swiperWidth
      }
      this.$refs.swiper.style.width = width + 'px'
    }
  }
}
</script>
<style lang="scss" lef="stylesheet/scss">
  .swiper{
    .swiper-group{
      overflow: hidden;
      .swiper-item{
        float: left;
        width: 100%;
        a{
          width: 100%;
          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>


