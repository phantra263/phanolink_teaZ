<template>
  <div class="content__wrap">
    <!-- slick product sale hot -->
    <VueSlickCarousel v-bind="settings" class="slick__banner">
      <div v-for="(banner, index) in listBanner" :key="index">
        <img :src="banner.image.url" alt="">

        <!-- btn join now -->
        <div class="btn-wrap">
          <a href="" class="btn-join">
            <img src="../../../assets/images/arrow-btn-icon.png" alt="">
            <p>THAM GIA NGAY</p>
          </a>
        </div>
      </div>
    </VueSlickCarousel>

    <!-- filter btn -->
    <div class="list__filter">
      <span>Ưu tiên xem:</span>

      <button >HÀNG MỚI</button>
      <button>BÁN CHẠY</button>
      <button>GIÁ THẤP</button>
      <button>GIÁ CAO</button>
      <button>GIẢM GIÁ</button>
      <button>KHUYẾN MÃI</button>
    </div>


    <!-- section show product -->
    <section class="content-wrap">
      <!-- notify when no data -->
      <div class="notify" v-if="listProductByCate.length <= 0">
        <h3>Không có sản phẩm trong danh mục này!</h3>
      </div>

      <router-link to=""
                   v-for="(product, index) in listProductByCate"
                   :key="index" class="product-card">
        <!-- img product -->
        <div class="img-product">
          <img :src="product.images[0].url" alt="product">
        </div>

        <!-- icon free ship if has-->
        <img src="../../../assets/images/icon-free-ship.png"
             alt="icon free ship"
             class="img-free-ship">

        <!-- icon gift if has -->
        <img src="../../../assets/images/gift.png"
             alt="icon gift"
             class="img-gift">

        <!-- mark sale if has -->
        <div class="mark-sale" v-if="product.discount">
          <span><span v-if="product.discount !== 'No'">-</span>{{ product.discount }}</span>
        </div>

        <!-- infor product -->
        <div class="infor-product">
          <h4>{{ product.name }}</h4>
          <span v-if="product.discount === 'No'">{{ product.price }}đ</span>
          <span v-else>{{ displayPriceDiscount(product) }}đ</span>
          <del v-if="product.discount !== 'No'">{{ product.price }}đ</del>
        </div>
      </router-link>
    </section>


<!--    &lt;!&ndash; Pagination &ndash;&gt;-->
<!--    <el-pagination-->
<!--        @current-change=""-->
<!--        :current-page=""-->
<!--        class="pagination"-->
<!--        small-->
<!--        layout="pager"-->
<!--        :page-size=""-->
<!--        :total="">-->
<!--    </el-pagination>-->


    <!-- section product seen -->
    <section>
      <!-- title section -->
      <div class="title-wrap">
        <div class="title-left">
          <h3 class="title-section">Sản phẩm đã xem</h3>
        </div>
      </div>

      <div class="content-wrap">
        <!-- content product -->
        <a href="" v-for="(product, index) in productList" :key="index" class="product-card">
          <!-- img product -->
          <div class="img-product">
            <img src="../../../assets/images/product-1.png" alt="">
          </div>

          <!-- icon free ship if has-->
          <img src="../../../assets/images/icon-free-ship.png"
               alt=""
               class="img-free-ship">

          <!-- icon gift if has -->
          <img src="../../../assets/images/gift.png"
               alt=""
               class="img-gift">

          <!-- mark sale if has -->
          <div class="mark-sale" v-if="product.sale">
            <span>-{{ product.sale }}%</span>
          </div>

          <!-- infor product -->
          <div class="infor-product">
            <h4>{{ product.infor }}</h4>
            <span>{{ product.price }}đ</span>
            <del v-if="product.priceSale">{{ product.priceSale }}đ</del>
          </div>
        </a>
      </div>

    </section>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import store from '@/store'

export default {
  name: "ContentRight",

  created() {
    this.fetchData()
  },

  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },

  computed:{
    ...mapGetters('homepage', ['listBanner', 'listProductByCate'])
  },

  data() {
    return {
      settings: {
        "arrows": false,
        "dots": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "draggable": true,
      },
      bannerImgs: [],

      productList: []
    }
  },

  methods: {
    ...mapActions('homepage', ['getListProductByCate']),

    async fetchData() {
      let param = {
        category: this.$route.params.id
      }

      store.dispatch('homepage/getListProductByCate', param)
    },

    displayPriceDiscount(product) {
      const percentDiscount = parseInt(product.discount.replace('%', ''))

      const priceDiscount = product.price - (percentDiscount * product.price) / 100
      return priceDiscount
    }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables/variables";

.content__wrap {
  width: 80%;

  @media #{$info-ipad-pro} {
    width: 100%;
  }

  .slick__banner {
    margin-bottom: 26px;

    img {
      width: inherit;
      max-height: 345px;
    }

    .btn-wrap {
      position: absolute;
      left: 55%;
      bottom: 20px;
      border: 2px solid #ffffff;
      border-radius: 5px;
      width: 237px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media #{$info-ipad-pro} {
        width: auto;
        height: fit-content;
        left: unset;
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
      }

      @media #{$info-phone-normal} {
        height: 10vw;
      }

      .btn-join {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 98%;
        height: 92%;
        border-radius: 5px;
        background: #FFAB78;
        padding: 6px;

        img {
          height: 43px;

          @media #{$info-phone-normal} {
            height: 30px;
          }
        }

        p {
          white-space: nowrap;
          font-size: 25px;
          font-style: italic;

          @media #{$info-ipad-pro} {
            display: none;
          }
        }
      }
    }
  }

  .list__filter {
    display: flex;
    align-items: center;
    margin-bottom: 26px;
    flex-wrap: wrap;

    span {
      font-size: 14px;
      color: #505050;

      @media #{$info-ipad} {
        margin-bottom: 15px;
      }
    }

    button {
      border: 0;
      border-radius: 5px;
      background: #ffffff;
      padding: 5px 10px;
      margin-left: 15px;

      @media #{$info-ipad} {
        margin-bottom: 15px;
      }

      &:hover {
        background: #f9434e;
        color: #ffffff;
      }
    }
  }

  .content-wrap {
    background: #ffffff;

    .notify {
      padding: 50px;
      width: 100%;

      h3 {
        text-align: center;
        font-weight: bold;
      }
    }

    .product-card {
      width: calc(100% / 4);

      @media #{$info-ipad} {
        width: calc(100% / 3);
      }
    }
  }

  .pagination {
    padding: 31px 0 54px;
    text-align: right;
  }

  .title-wrap {
    padding: 13px 20px;
    background: #ffffff;
    border: 1px solid  #e7e7e6;

    h3 {
      font-size: 15px;
    }
  }
}

</style>
