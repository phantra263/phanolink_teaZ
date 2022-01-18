<template>
  <div class="menu-middle">
    <!-- img logo -->
    <router-link to="/" class="img-logo">
      <img src="../../../assets/images/logo.png" alt="logo" >
    </router-link>

    <div class="menu-right">
      <!-- hamburger responsive  -->
      <img src="../../../assets/images/icon-cate.png"
           alt="hamburger"
           class="img-hamburger"
           @click="$emit('showPopup', $event)">

      <!-- form search -->
      <form action="">
        <input type="text" placeholder="Bạn đang tìm thuốc gì...">
        <button class="btn-search">
          <img src="../../../assets/images/icon-search.png" alt="icon search"><span>Tìm kiếm</span>
        </button>
      </form>

      <!-- button create a prescription -->
      <a class="btn">
        <i class="el-icon-edit-outline"></i><span>Tạo tao thuốc</span>
      </a>

      <!-- button cart -->
      <a class="btn">
        <i class="el-icon-shopping-cart-2"></i><span>Giỏ hàng</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMiddle"
}
</script>

<style lang="scss" scoped>
@import '../../../assets/variables/variables';

.menu-middle {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  align-items: center;

  @media #{$info-ipad-pro} {
    display: block;
  }

  .img-logo {
    margin-right: 10px;
    text-align: center;
    display: block;
    @media #{$info-ipad-pro} {
      margin-bottom: 10px;
    }

    img {
      width: 200px;
    }
  }

  .img-hamburger {
    display: none;
    margin-right: 15px;
    cursor: pointer;

    @media #{$info-ipad-pro} {
      display: block;
      margin-right: 1.5vw;
    }
  }

  .menu-right {
    flex: 1;
    display: flex;
    align-items: center;

    .btn {
      width: 134px;
      height: 41px;
      border: 0;
      background: #ffffff;
      border-radius: 5px;
      margin-left: 15px;
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: bold;
      color: #838383;
      cursor: pointer;

      @media #{$info-ipad} {
        width: auto;
      }

      @media #{$info-phone-normal} {
        background: transparent ;
        margin-left: 0.5vw;
      }

      i {
        font-size: 25px;
        margin: 0 10px;

        @media #{$info-phone-normal} {
          margin: 0;
          color: #ffffff;
        }
      }

      span {
        @media #{$info-ipad} {
          display: none;
        }
      }
    }

    form {
      flex: 1;
      display: flex;
      position: relative;

      input {
        flex: 1;
        padding: 12px 20px;
        font-size: 14px;
        font-style: italic;
        border-bottom-left-radius: 6.38px;
        border-top-left-radius: 6.38px;
        border: 0;

        @media #{$info-phone-normal} {
          border-bottom-right-radius: 6.38px;
          border-top-right-radius: 6.38px;
          padding: 7px 20px;
        }
      }

      .btn-search {
        padding: 11px 17px 12px;
        background: #E2E3E4;
        border: 0;
        border-bottom-right-radius: 6.38px;
        border-top-right-radius: 6.38px;
        font-weight: bold;
        color: #838383;
        display: flex;
        align-items: center;

        @media #{$info-phone-normal} {
          position: absolute;
          right: 0;
          padding: 0 8px;
          height: 30.8px;
          background: #ffffff;
        }

        img {
          margin-right: 12px;
          line-height: 40px;
          @media #{$info-phone-normal} {
            margin-right: 0;
          }
        }

        span {
          @media #{$info-phone-normal} {
            display: none;
          }
        }
      }
    }
  }
}
</style>
