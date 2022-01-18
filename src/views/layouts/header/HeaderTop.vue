<template>
  <nav class="menu-top">
    <router-link to="/">
      <img src="../../../assets/images/icon-fire.png" alt="logo">
      <p>Khuyến mãi HOT</p>
    </router-link>

    <a href="">
      <img src="../../../assets/images/icon-bell.png" alt="icon bell" class="bell-img">
      <p class="has-notify">Thông báo<br/>
        <span>của tôi</span></p>
    </a>

    <a href="">
      <img src="../../../assets/images/icon-user.png" alt="icon user">
      <p>Đăng nhập<br/>
        <span>tài khoản</span></p>
    </a>
  </nav>
</template>

<script>
export default {
  name: "HeaderTop"
}
</script>

<style lang="scss" scoped>
@import '../../../assets/variables/variables';

.menu-top {
  display: flex;
  justify-content: flex-end;
  font-size: 13.2px;
  font-weight: bold;
  margin-bottom: 11px;

  @media #{$info-ipad-pro} {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    margin-left: 70px;

    img {
      margin-right: 5px;
    }

    .has-notify {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 5px;
        left: -15px;
        width: 10.14px;
        height: 10.14px;
        border-radius: 50%;
        background: #FA434E;
      }
    }

    span {
      font-size: 11.5px;
      font-weight: normal;
    }
  }
}
</style>
