<template>
  <main>
    <!-- section banner -->
    <section-banner :list-banner="listBanner"/>

    <!-- section menu cate product -->
    <section-menu-product :data-cate="listCategory"/>

    <!-- section buy medicine online -->
    <section-buy-medicine/>

    <!-- section sale hot -->
    <section-sale-hot :product-sale-hot="listProductSaleHot"/>

    <!-- section product hot -->
    <section-product-hot :product-hot="listProductFeature"/>

    <!-- section medicine -->
    <section-list-cate v-for="(cate, index) in listCate"
                       :data-cate="cate"
                       :key="index" />

    <!--  &lt;!&ndash; section functional foods &ndash;&gt;-->
    <!--  <section-functional-foods/>-->

    <!--  &lt;!&ndash; section customer good &ndash;&gt;-->
    <!--  <section-consumer-goods/>-->

    <!--  &lt;!&ndash; section cosmetics &ndash;&gt;-->
    <!--  <section-cosmetics/>-->

    <!--  &lt;!&ndash; section medical device &ndash;&gt;-->
    <!--  <section-medical-devices/>-->

    <!-- section news -->
    <section-news/>

    <!-- section list trademark -->
    <section-trademark/>
  </main>
</template>

<script>
import SectionBanner from "./SectionBanner";
import SectionMenuProduct from "./SectionMenuProduct";
import SectionBuyMedicine from "./SectionBuyMedicine";
import SectionSaleHot from "./SectionSaleHot";
import SectionProductHot from "./SectionProductHot";
import SectionNews from "./SectionNews";
import SectionTrademark from "./SectionTrademark";
import SectionListCate from "./SectionListCate";
import store from '@/store'
import {mapState, mapGetters} from "vuex";

export default {
  name: "index",

  components: {
    SectionListCate,
    SectionTrademark,
    SectionNews,
    SectionProductHot, SectionSaleHot, SectionBuyMedicine, SectionMenuProduct, SectionBanner},

  beforeRouteEnter(to, from, next) {
    store.dispatch('homepage/getListBanners').then(() => {
      store.dispatch('homepage/getListCategories').then(() => {
        const params = {
          feature: '',
          perPage: 8
        }
        store.dispatch('homepage/getListProductFeature', params).then(() => {
          const params = {
            feature: '',
            perPage: 9
          }
          store.dispatch('homepage/getListProductSaleHot', params).then(() => next())
        })
      })
    })
  },

  computed: {
    ...mapState('homepage', ['listBanner', 'listCate', 'listProductFeature', 'listProductSaleHot']),
    ...mapGetters('homepage', ['loading'])
  },

  data() {
    return {
      listCategory: [
          {
            id: 1,
            imgIcon: require('../../../assets/images/icon-cate-1.png'),
            name: 'Thuốc không kê đơn',
            imgBg: require('../../../assets/images/medicine.png')
          },
          {
            id: 2,
            imgIcon: require('../../../assets/images/icon-cate-2.png'),
            name: 'Thực phẩm chức năng',
            imgBg: require('../../../assets/images/functional-foods.png')
          },
          {
            id: 3,
            imgIcon: require('../../../assets/images/icon-cate-3.png'),
            name: 'Dụng cụ y khoa',
            imgBg: require('../../../assets/images/consumer-goods.png')
          },
          {
            id: 4,
            imgIcon: require('../../../assets/images/icon-cate-4.png'),
            name: 'Mỹ phẩm',
            imgBg: require('../../../assets/images/cosmetics.png')
          },
          {
            id: 5,
            imgIcon: require('../../../assets/images/icon-cate-5.png'),
            name: 'Mẹ và bé',
            imgBg: require('../../../assets/images/medical-instruments.png')
          }]
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  background: #EBEBEB;
  padding-bottom: 22px;

  section {
    margin-bottom: 22px;
  }
}
</style>
