<template>
  <nav>
    <!-- Dropdown menu cate -->
    <el-dropdown trigger="click">
      <div class="el-dropdown-link nav-item">
        <img src="../../../assets/images/icon-cate.png" alt="icon cate">
        DANH MỤC SẢN PHẨM
      </div>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-arrow-right"
                          v-for="(cateItem, index) in dataCate"
                          :key="index">{{ cateItem.title }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- item sale hot -->
    <div class="nav-item">
      <img src="../../../assets/images/icon-fire-red.png" alt="icon sale hot">
      <a href="">KHUYẾN MÃI HOT</a>
    </div>

    <!-- item address branch -->
    <div class="nav-item">
      <img src="../../../assets/images/icon-map.png" alt="icon branch">
      <a href="">HỆ THỐNG NHÀ THUỐC</a>
    </div>

    <!-- item care health -->
    <div class="nav-item">
      <img src="../../../assets/images/icon-heart.png" alt="icon cate">
      <a>GÓC SỨC KHOẺ</a>
    </div>

    <!-- item intro -->
    <div class="nav-item">
      <img src="../../../assets/images/icon-home.png" alt="icon intro">
      <a>GIỚI THIỆU</a>
    </div>

    <!-- item tutorial -->
    <div class="nav-item">
      <img src="../../../assets/images/icon-about.png" alt="icon tutorial">
      <a>HƯỚNG DẪN</a>
    </div>
  </nav>
</template>

<script>

export default {
  name: "HeaderBottom",

  props: ['dataCate'],

  data() {
    return {
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

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/variables/variables';

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media #{$info-ipad-pro} {
    display: none;
  }

  .el-dropdown-link {
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      color: #222222;
    }
  }

  .nav-item {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      margin-right: 11px;
    }

    a {
      font-weight: bold;
    }
  }
}
</style>
