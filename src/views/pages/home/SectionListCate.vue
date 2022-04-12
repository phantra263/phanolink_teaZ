<template>
  <section class="container" :id="dataCate.id">
    <!-- title section -->
    <div class="title-wrap">
      <div class="title-left">
        <img src="../../../assets/images/icon-medicine.png" alt="icon medicine">
        <h3 class="title-section">{{ dataCate.name }}</h3>
      </div>

      <!-- btn see more -->
      <router-link :to="{name: 'Product cate', params : {id: dataCate.id, name: dataCate.name}}" class="btn-see-more">Xem tất cả ></router-link>
    </div>

    <div class="content-wrap">
      <!-- content product -->
      <router-link to=""
                    v-for="(product, index) in listProductCate"
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
    </div>
  </section>
</template>

<script>

import {mapActions} from "vuex";
import store from '@/store'

export default {
  name: "SectionListCate",

  props:['dataCate'],

  created() {
    this.getListProduct()
  },

  data() {
    return {
      listProductCate: []
    }
  },

  methods: {
    ...mapActions('homepage', ['getListProductByCate']),

    getListProduct() {
      const param = {
        category: this.dataCate.id
      }
      store.dispatch('homepage/getListProductByCate', param).then(() => {
        this.listProductCate = this.$store.getters["homepage/listProductByCate"]

        // limit product show is 10
        this.listProductCate = (this.listProductCate.length > 5 ? this.listProductCate.slice(0,5) : this.listProductCate)
      })
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

.container {
  background: #ffffff;
  padding: 0 ;
}
</style>
