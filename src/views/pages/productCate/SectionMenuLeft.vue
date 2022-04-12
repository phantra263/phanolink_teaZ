<template>
  <div class="menu__left">
    <div class="list__cate__wrap">
      <h3>Danh mục sản phẩm</h3>

      <!-- list category -->
      <!-- List Browse -->

          <!-- Collapse menu child -->
          <ul  class="list__cate">
            <li v-for="(categoryList,index) in listCate"
                              :key="index" class="cate__item"
                              :class="{'active' : (isActive === categoryList.name)}"
                              @click="changeParam(categoryList.id, categoryList.name)">

                <font-awesome-icon icon="chevron-right"/>{{ categoryList.name }}
            </li>
          </ul>
    </div>

    <!-- banner product sale -->
    <div class="banner__product__sale">
      <div class="title__banner">
        <img src="../../../assets/images/icon-fire-red.png" alt="">
        <h3>Sản Phẩm Khuyến Mãi</h3>
      </div>

      <ul class="product__sale">
        <li><a href=""><img src="../../../assets/images/banner-sale-hot1.png" alt=""></a></li>
        <li><a href=""><img src="../../../assets/images/banner-sale-hot2.png" alt=""></a></li>
        <li><a href=""><img src="../../../assets/images/banner-sale-hot1.png" alt=""></a></li>
      </ul>
    </div>
  </div>

</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "SectionMenuLeft",

  computed: {
    ...mapGetters('homepage',['listCate']),
  },

  data() {
    return {
      isActive: this.$route.params.name,

      openCollapse: null
    }
  },

  methods: {
    changeParam(id, cate) {
      if(cate === this.$route.params) {
        return
      } else {
        this.active = cate
        this.$router.push( {name: 'Product cate',  params: {id: id, name: cate}})
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables/variables";

.menu__left {
  width: 19%;

  @media #{$info-ipad-pro} {
    display: none;
  }

  .list__cate__wrap {
    background: #ffffff;
    margin-bottom: 17px;

    h3 {
      font-size: 15px;
      font-weight: bold;
      padding: 15px;
      color: #505050;
      border-bottom: 1px solid #e7e7e6;
    }

    .list__cate {
      .cate__item {
        padding: 10px 15px;
        cursor: pointer;

        &.active {
          color: #01ADAB;
        }

        &:last-child {
          margin-bottom: 0;
        }

        &.active-item svg path{
          color: #01ADAB;
        }

        svg {
          margin-right: 5px;

          path {
            color: #ffffff;
            transition: .3s;
          }
        }

        &:hover svg path {
          color: #01ADAB;
          transition: .3s;
        }
      }

      .list__subcate {
        padding: 10px 5px 5px 40px;

        li {
          cursor: pointer;

          &.active, &:hover {
            color: #01ADAB;
          }
        }

        li:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }

  .banner__product__sale {
    .title__banner {
      display: flex;
      align-items: center;
      background: #ffffff;
      padding: 15px;

      img {
        width: 26px;
        margin-right: 3px;
      }

      h3 {
        font-size: 15px;
        font-weight: bold;
        color: #505050;
      }
    }
  }

}
</style>
