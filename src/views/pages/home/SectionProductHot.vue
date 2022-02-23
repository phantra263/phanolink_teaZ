<template>
  <section class="container">
    <!-- title section -->
    <div class="title-wrap">
      <div class="title-left">
        <img src="../../../assets/images/icon-pro-hot.png" alt="">
        <div>
          <h3 class="title-section">Sản Phẩm Nổi Bật</h3>
          <p>Lorem ipsum, or lipsum as it is sometimes known</p>
        </div>
      </div>
    </div>


    <div class="content-product-hot" >
      <!-- slick product hot -->
      <VueSlickCarousel v-bind="settings" class="slick-product-hot" >
        <div v-for="(banner, index) in productHot" :key="index" class="wrap-product-hot">
<!--          <img v-if="banner.images" :src="banner.images[0].url" alt="">-->
          <img v-if="banner.images.length === 0" src="../../../assets/images/img-product-dummy.png" alt="" >
          <img v-else :src="banner.images[0].url" alt="">
        </div>
      </VueSlickCarousel>

      <!-- banner right -->
      <div class="banner-prod-hot">
        <img src="../../../assets/images/banner-product-hot.png" alt="" >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionProductHot",

  props:['productHot'],

  data() {
    return {
      settings: {
        "arrows": false,
        "dots": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "autoplay": true,
        "draggable": true,
        "rows": 2,
      },
      slickProductHot: [
        {
          id: 1,
          imgHref: 'banner-sale-hot1.png',
        },
        {
          id: 2,
          imgHref: 'banner-sale-hot2.png',
        },
        {
          id: 3,
          imgHref: 'banner-sale-hot1.png',
        },
        {
          id: 4,
          imgHref: 'banner-sale-hot2.png',
        },
        {
          id: 5,
          imgHref: 'banner-sale-hot1.png',
        },
        {
          id: 6,
          imgHref: 'banner-sale-hot2.png',
        },
        {
          id: 7,
          imgHref: 'banner-sale-hot1.png',
        },
        {
          id: 8,
          imgHref: 'banner-sale-hot2.png',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ffffff;
  padding:0 0 40px;

  .content-product-hot {
    display: flex;
    justify-content: space-between;
  }
}


</style>
