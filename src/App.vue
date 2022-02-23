<template>
  <div id="app">
    <!-- loading -->
    <LoadingMode v-if="$store.state.loading"/>
    <!-- Header -->
    <Header/>

    <!-- Content app -->
    <router-view  />

    <!-- Footer -->
    <Footer/>
  </div>
</template>
<script>
import Footer from "./views/layouts/footer/Footer";
import Header from "./views/layouts/header/Header";
import LoadingMode from "./components/LoadingMode";

export default {
  components: {LoadingMode, Header, Footer }
}
</script>

<style lang="scss">
@import 'assets/css/css-reset.css';
@import 'assets/css/css-common.css';
@import 'assets/variables/variables';

@font-face {
  font-family: UTM Neo Sans Intel;
  src: url('../../phanolink_teaZ/src/assets/fonts/UTM Neo Sans Intel.ttf');
  font-weight: normal;
}

#app {
  font-family: UTM Neo Sans Intel, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-drawer__wrapper {
  .el-drawer__open {
    .el-drawer {
      background: #01ADAB;

      .el-drawer__header {
        margin-bottom: 0;
        padding-top: 10px;
      }

      .el-drawer__body {
        padding-bottom: 15px;
      }
    }
  }
}

.el-carousel {
  .el-carousel__container {
    height: inherit;
  }

  .el-carousel__indicators--horizontal {
    left: 163px;
    transform: unset;
    position: absolute;
    bottom: 10px;
    @media #{$info-ipad-pro} {
      left: 9.2vw;
    }

    .el-carousel__button {
      width: 24px;
      height: 1px;

      @media #{$info-ipad-pro} {
        width: 2.27vw;
      }
    }
  }
}

.title-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 33px;
  border-bottom: 1px solid #e7e7e6;

  @media #{$info-phone-normal} {
    padding: 15px;
  }

  .title-left {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;

      @media #{$info-phone-normal} {
        width: 25px;
      }
    }

    .title-section {
      color: #505050;
      font-size: 22px;
      font-weight: bold;

      @media #{$info-phone-normal} {
        font-size: 20px;
      }
    }

    p {
      font-size: 18px;
      color: #777777;

      @media #{$info-phone-normal} {
        font-size: 15px;
      }
    }
  }

  a {
    color: #01ADAB;
    font-size: 18.5px;

    &:hover {
      text-decoration: underline;
    }
  }

}

.slick-sale-hot {
  .slick-slide {
    img {
      width: 412px;

      @media #{$info-laptop-smallest} {
        width: 100%;
      }
    }
  }
}

.slick-product-hot {
  width: 902px;

  @media #{$info-laptop-smallest} {
    width: 70%;
  }

  .slick-slide {
    .wrap-product-hot {
      width: 444px;
      min-height: 300px;
      img {
        width: auto;
        max-width: 320px;
        object-fit: contain;
        margin: auto;
      }
    }
  }
}

// style dropdown
.el-dropdown-menu.el-popper {
  background: #01ADAB;
  min-width: 200px;

  .el-dropdown-menu__item {
    color: #ffffff;
    font-weight: bold;
    transition: .5s;

    &:hover {
      background: unset;
      color: #ffffff;
      transform: translateX(5px);
      transition: .5s;
    }
  }

  .popper__arrow:after {
    border-bottom-color: #01ADAB !important;
  }
}

// style card product
.content-wrap {
  display: flex;
  flex-wrap: wrap;

  @media #{$info-phone-normal} {
    flex-wrap: unset;
    overflow-x: scroll;
  }

  .product-card {
    color: #020202;
    width: calc(100% / 5);
    position: relative;
    border: 1px solid  #e7e7e6;
    padding: 45px 25px 20px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    @media #{$info-ipad-pro} {
      width: calc(100% / 3);
    }

    @media #{$info-phone-normal} {
      min-width: 250px
    }

    &:hover .img-product {
      transform: scale(1.2);
      transition: .5s;
    }

    &:hover .infor-product h4 {
      color: #01adab;
    }

    &:hover:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.05);
    }

    .img-product {
      width: 182px;
      text-align: center;
      margin-bottom: 20px;
      transition: .5s;

      img {
        width: auto;
        max-width: 100%;
      }
    }

    .img-free-ship {
      position: absolute;
      top: 11px;
      right: 10px;
    }

    .img-gift {
      position: absolute;
      top: 66px;
      right: 10px;
    }

    .mark-sale {
      clip-path: polygon(100% 0, 100% 100%, 50% 70%, 0% 100%, 0 49%, 0% 0%);
      background: #FE434E;
      color: #ffffff;
      width: 32px;
      height: 42px;
      position: absolute;
      top: 0;
      left: 23px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }

    .infor-product {
      h4 {
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 5px;
        line-height: 22px;
      }

      span {
        font-size: 17px;
        font-weight: bold;
        color: #E42F43;
        display: block;
        margin-bottom: 10px;
      }

      del {
        font-size: 13px;
        color: #AAAAAA;
        display: block;
      }
    }
  }
}

//style background main
main {
  background: #EBEBEB;
}

//style progress
.el-progress.el-progress--line {
  flex: 1;
  text-align: left;
  width: 307px;

  @media #{$info-phone-normal} {
    width: 200px;
    padding-right: 0;
  }

  @media #{$info-phone} {
    width: 170px;
  }

  .el-progress-bar {
    width: inherit;
    padding-right: 0;

    .el-progress-bar__outer {
      height: 10px !important;
    }
  }

  .el-progress__text {
    display: none;
  }
}

//style pagination
.el-pager {
  li {
    color: #808081;
    &:hover {
      color: #01ADAB !important;
    }

    &.active {
      background: #01ADAB;
      color: #ffffff !important;
      border-radius: 5px;
    }
  }
}

//style banner page product cate
.slick__banner {
  position: relative;

  .slick-slide {
    position: relative;
  }

  .slick-dots {
    width: auto;
    position: absolute;
    left: 167px;
    bottom: 10px;
    display: flex !important;

    @media #{$info-ipad-pro} {
      left: 20px;
    }

    @media #{$info-phone-normal} {
      display: none !important;
    }

    li {
      display: block;
      background: rgba(0, 156, 167, 0.5);
      height: 2px;
      width: 21px;
      margin-right: 5px;
      position: relative;

      &.slick-active {
        background: #ffffff;
      }

      button {
        opacity: 0;
        position: absolute;
        width: 21px;
        height: 2px;
      }
    }
  }
}


// style pagination page product cate
.pagination {
  .el-pager li {
    background: transparent;

    &.active {
      background: #01ADAB;
    }
  }
}

</style>

