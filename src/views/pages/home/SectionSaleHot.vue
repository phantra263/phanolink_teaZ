<template>
  <section id="sale-hot" class="container">
    <!-- title section -->
    <div class="title-wrap">
      <div class="title-left">
        <img src="../../../assets/images/fire-sale-hot.png" alt="">
        <h3 class="title-section">Khuyến Mãi Hot</h3>
      </div>
    </div>

    <!-- slick product sale hot -->
    <VueSlickCarousel v-bind="settings" class="slick-sale-hot">
      <div v-for="(banner, index) in productSaleHot" :key="index">
        <img v-if="banner.images.length === 0" src="../../../assets/images/img-product-dummy.png" alt="" >
        <img v-else :src="banner.images[0].url" alt="">
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
export default {
  name: "SectionSaleHot",

  props: ['productSaleHot'],

  data() {
    return {
      settings: {
        "arrows": false,
        "dots": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "autoplay": true,
        "draggable": true,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 1,
              "infinite": true,
              "dots": true,
              "arrows": false,
            }
          }
        ]
      },
      slickSale: [
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
      ]
    }
  },
}
</script>

<style scoped>
section {
  background: #ffffff;
  padding: 0 0 38px;
}
</style>
