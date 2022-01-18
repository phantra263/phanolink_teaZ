<template>
  <section class="container">
    <!-- title section -->
    <div class="title-wrap">
      <div class="title-left">
        <img src="../../../assets/images/icon-trademark-hot.png" alt="">
        <h3 class="title-section">Thương hiệu nổi bật</h3>
      </div>
    </div>

    <!-- btn pre -->
    <div class="slick__wrap">
      <i @click="showPre" class="el-icon-arrow-left"></i>

      <!-- slick listTrademark hot -->
      <VueSlickCarousel v-bind="settings" class="slick__trademark" ref="carousel">
        <div v-for="(trademark, index) in listTrademark" :key="index" class="slick__trademark__item">
          <img :src="require(`../../../assets/images/${trademark.imgHref}`)" alt="">
        </div>
      </VueSlickCarousel>

      <!-- btn next -->
      <i @click="showNext" class="el-icon-arrow-right"></i>
    </div>

  </section>
</template>

<script>
export default {
  name: "SectionTrademark",

  data() {
    return {
      settings: {
        "arrows": false,
        "dots": false,
        "infinite": true,
        "speed": 500,
        "slidesToScroll": 1,
        "autoplay": true,
        "draggable": true,
        "variableWidth": true,
      },
      listTrademark: [
        {
          id: 1,
          imgHref: 'trademark1.png'
        },
        {
          id: 2,
          imgHref: 'trademark2.png'
        },
        {
          id: 3,
          imgHref: 'trademark3.png'
        },
        {
          id: 4,
          imgHref: 'trademark4.png'
        },
        {
          id: 5,
          imgHref: 'trademark5.png'
        },
        {
          id: 6,
          imgHref: 'trademark1.png'
        },
        {
          id: 7,
          imgHref: 'trademark2.png'
        },
        {
          id: 8,
          imgHref: 'trademark3.png'
        },
        {
          id: 9,
          imgHref: 'trademark4.png'
        },
        {
          id: 10,
          imgHref: 'trademark5.png'
        },
      ]
    }
  },

  methods: {
    showNext() {
      this.$refs.carousel.next()
    },

    showPre() {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables/variables";
.container {
  background: #ffffff;
  padding: 0;

  .slick__wrap {
    position: relative;

    .slick__trademark {
      border-top: 1px solid #E5E5E4;
      padding: 80px 37px 60px;

      @media #{$info-phone-normal} {
        padding: 50px 30px;
      }

      &__item {
        margin-right: 40px;
      }
    }

    .el-icon-arrow-right, .el-icon-arrow-left {
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
      color: #01ADAB;
      font-weight: bold;
      cursor: pointer;

      @media #{$info-ipad-pro} {
        left: 5px;
      }
    }

    .el-icon-arrow-right {
      right: -20px;
      left: unset;

      @media #{$info-ipad-pro} {
        left: unset;
        right: 5px;
      }
    }
  }
}
</style>
