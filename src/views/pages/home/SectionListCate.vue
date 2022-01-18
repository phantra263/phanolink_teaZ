<template>
  <section class="container">
    <!-- title section -->
    <div class="title-wrap">
      <div class="title-left">
        <img src="../../../assets/images/icon-medicine.png" alt="icon medicine">
        <h3 class="title-section">{{ dataCate.name }}</h3>
      </div>

      <!-- btn see more -->
      <router-link to="" class="btn-see-more">Xem tất cả ></router-link>
    </div>

    <div class="content-wrap">
      <!-- content product -->
      <router-link to=""
                    v-for="(product, index) in listProductCate"
                   :key="index" class="product-card">
        <!-- img product -->
        <div class="img-product">
          <img src="../../../assets/images/product-1.png" alt="product">
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
        <div class="mark-sale" v-if="product.sale">
          <span>-{{ product.sale }}%</span>
        </div>

        <!-- infor product -->
        <div class="infor-product">
          <h4>{{ product.name }}</h4>
          <span>{{ product.price }}đ</span>
          <del v-if="product.priceSale">{{ product.priceSale }}đ</del>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>

export default {
  name: "SectionListCate",

  props:['dataCate'],

  data() {
    return {
      listProductCate: [
        {
          id: 1,
          name: 'Thực Phẩm Chức Năng Bổ Não Giảm Triệu Chứng...',
        },
        {
          id: 2,
          name: 'Thực Phẩm Chức Năng Bổ Não Giảm Triệu Chứng...'
        },
        {
          id: 3,
          name: 'Hàng tiêu dùng'
        },
        {
          id: 4,
          name: 'Mỹ phẩm',
        },
        {
          id: 5,
          name: 'Dụng cụ y tế'
        }]
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
