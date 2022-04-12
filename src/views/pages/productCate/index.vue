<template>
  <main>
    <breadcrumb />

    <section class="container">
      <div class="section-wrap">
        <!-- menu cate left -->
        <section-menu-left/>

        <!-- content right show product in cate -->
        <content-right/>
      </div>
    </section>
  </main>
</template>

<script>
import breadcrumb from '../../../components/Breadcrumb'
import SectionMenuLeft from "./SectionMenuLeft";
import ContentRight from "./ContentRight";
import {mapGetters} from "vuex";
import store from '../../../store'

export default {
  name: "index",

  components: {ContentRight, SectionMenuLeft, breadcrumb},

  beforeRouteEnter (to, from, next) {
    store.dispatch('homepage/getListCategories').then(() => {
      store.dispatch('homepage/getListBanners').then(() => {
        const param = {
          category: to.params.id
        }
        store.dispatch('homepage/getListProductByCate', param).then(() => next())
      })
    })
  },


  computed: {
    ...mapGetters('homepage',['listCate', 'listProductByCate', 'listBanner'])
  }
}
</script>

<style lang="scss" scoped>
main {
  padding-bottom: 80px;
}

.section-wrap {
  display: flex;
  justify-content: space-between;
}
</style>
