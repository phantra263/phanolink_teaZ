<template>
  <header>
    <div class="container">
      <!-- menu top header -->
      <header-top/>

      <!-- menu middle header -->
      <header-middle @showPopup="drawer = true"/>

      <!-- menu bottom -->
      <header-bottom :data-cate="menuCate"/>

      <!-- menu when responsive -->
      <el-drawer
          size="280px"
          :visible.sync="drawer"
          custom-class="draw-custom"
          :direction="direction">

        <!-- menu auth -->
        <ul class="menu">
          <li v-for="(item, index) in menuHeader" :key="index">
            <img :src="item.imgHref" :alt="'icon' + item.title">
            <a href="">
              {{ item.title }}
            </a>
          </li>
        </ul>

        <!-- cate menu -->
        <h3 class="title-cate">Danh mục sản phẩm</h3>
        <ul class="menu menu-cate">
          <li v-for="(cateItem, index) in menuCate" :key="index">
            <a href="">
              {{ cateItem.name }}
            </a>
          </li>
        </ul>
      </el-drawer>

    </div>
  </header>
</template>

<script>
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

export default {
  name: "Header",

  components: { HeaderBottom, HeaderMiddle, HeaderTop},

  data() {
    return {
      drawer: false,
      direction: 'ltr',
      menuHeader: [
        {
          id: 1,
          title: "ĐĂNG NHẬP",
          imgHref: require('../../../assets/images/icon-user.png')
        },
        {
          id: 2,
          title: "THÔNG BÁO",
          imgHref: require('../../../assets/images/icon-bell.png')
        },
        {
          id: 3,
          title: "KHUYẾN MÃI HOT",
          imgHref: require('../../../assets/images/icon-fire-red.png')
        },
        {
          id: 4,
          title: "HỆ THỐNG NHÀ THUỐC",
          imgHref: require('../../../assets/images/icon-map.png')
        },
        {
          id: 5,
          title: "GÓC SỨC KHỎE",
          imgHref: require('../../../assets/images/icon-heart.png')
        },
        {
          id: 6,
          title: "GIỚI THIỆU",
          imgHref: require('../../../assets/images/icon-home.png')
        },
        {
          id: 7,
          title: "HƯỚNG DẪN",
          imgHref: require('../../../assets/images/icon-about.png')
        },
      ],
      menuCate: [
        {
          id: 1,
          title: "Mẹ và bé",
        },
        {
          id: 2,
          title: "Thực phẩm chức năng",
        },
        {
          id: 3,
          title: "Chăm sóc cá nhân",
        },
        {
          id: 4,
          title: "Chăn sóc sức khoẻ",
        },
        {
          id: 5,
          title: "Tủ thuốc gia đình",
        },
        {
          id: 6,
          title: "Chăm sóc phụ nữ",
        },
        {
          id: 7,
          title: "Chăm sóc sắc đẹp",
        },
        {
          id: 8,
          title: "Sức khoẻ giới tính",
        },
      ]
    };
  },
}
</script>

<style lang="scss" scoped>
header {
  background: #01ADAB;
  padding: 12px 0 20px;

  .menu {
    padding: 0 20px;

    li {
      padding: 10px 0;
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
      }
    }

    &.menu-cate {
      a:before {
        content: '>';
        margin-right: 5px;
      }
    }
  }

  .title-cate {
    background: #595959;
    padding: 15px 20px;
    font-size: 20px;
    color: #ffffff;
  }
}
</style>
