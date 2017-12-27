<template>
<div class="recommend" ref="recommend">
  <div  ref="scroll" class="recommend-content">
    <div>
      <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
        <slide>
          <div v-for="(item, index) in recommends" :key="index">
            <a :href="item.linkUrl">
              <img :src="item.picUrl  " alt="">
            </a>
          </div>
        </slide>
        <!-- <swiper>
          <swiper-slide v-for="(item, index) in recommends" :key="index">
            <a :href="item.linkUrl">
              <img :src="item.picUrl  " alt="">
            </a>
          </swiper-slide>
        </swiper>   -->
        <swiper class="nima" ref="nima" :option="swiperOption">
          <swiper-slide class="nima-grounp" ref="nimagrounp">
            <div v-for="(item, index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" alt="">
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li v-for="item in discList" class="item">
            <div class="icon">
              <img :src="item.picUrl" width="60" height="80">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.songListAuthor"></h2>
              <p class="desc" v-html="item.songListDesc"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import Slide from '../../base/slide/slide.vue'
// import Swiper from '../../base/slide/swiper.vue'
import { addClass } from '../../common/js/dom.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      recommends: [],
      discList: [],
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        effect: 'coverflow',
        direction: 'vertical',
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
  created () {
    this.getDataList()
    this.$nextTick(function () {
      // this._initNimaWidth()
    })
  },
  mounted () {
  },
  methods: {
    getDataList () {
      axios
        .get('/api')
        .then(response => {
          console.log(response.data)
          this.recommends = response.data.data.slider
          this.discList = response.data.data.songList
        })
        .catch(error => {
          console.log(error)
        })
    },
    _initNimaWidth () {
      setTimeout(() => {
        console.log(this.$refs)
        console.log(this.$refs.nimagrounp.children)
        this.children = this.$refs.nimagrounp.children
        let width = 0
        let nimaWidth = this.$refs.nima.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'nima-item')
          console.log(child)
          child.style.width = nimaWidth + 'px'
          width += nimaWidth
        }
        this.$refs.nima.style.width = width + 'px'
      }, 100)
    }
  },
  components: {
    Slide,
    swiper,
    swiperSlide
  }
}
</script>
<style scoped lang="scss" lef="stylesheet/scss">
@import "../../common/sass/variable.scss";

.recommend{
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .recommend-content{
      height: 100%;
      overflow: hidden;
      .slider-wrapper{
        position: relative;
        width: 100%;
        overflow: hidden;
        .nima{
          .nima-grounp{
            .nima-item{
              float: left;
              a{
                width: 100%;
                img{
                  width: 100%;
                }
              }
            }
          }
        }
      }
      .recommend-list{
        .list-title{
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: $font-size-medium;
          color: $color-theme;
        }
        .item{
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;
          .icon{
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
          }
          .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: $font-size-medium;
            .name{
              margin-bottom: 10px;
              color: $color-text;
            }
            .desc{
              color: $color-text-d;
            }
          }
        }
      }
      .loading-container{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
}
</style>


