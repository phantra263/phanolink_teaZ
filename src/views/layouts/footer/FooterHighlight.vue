<template>
  <ul class="container">
    <li>
      <img src="../../../assets/images/genuine-service.png" alt="">
      <p>Sản phẩm<br>chính hãng</p>
    </li>

    <li>
      <img src="../../../assets/images/ship-service.png" alt="">
      <p>Giao hàng <br> toàn quốc</p>
    </li>

    <li>
      <img src="../../../assets/images/pay-service.png" alt="">
      <p>Thanh toán<br>linh hoạt</p>
    </li>

    <li>
      <img src="../../../assets/images/gift-service.png" alt="">
      <p>Tích điểm<br>đổi quà</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FooterHighlight",
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables/variables";

ul {
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 5px 15px;

  &:before {
    @media #{$info-phone-normal} {
      content: '';
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: #e5e5e4;
      left: 50%;
      transform: translate(-50%);
    }
  }

  &:after {
    @media #{$info-phone-normal} {
      content: '';
      position: absolute;
      height: 1px;
      width: calc(100% - 30px);
      background-color: #e5e5e4;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  @media #{$info-phone-normal} {
    flex-wrap: wrap;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: 17px 0 12px 0;
    width: calc(100% / 4);
    font-size: 16px;

    &:not(:last-child) {
      border-right: 2px solid #E5E5E4;
    }

    @media #{$info-phone-normal} {
      width: calc(100% / 2);
      border-right: 0 !important;
    }

    img {
      height: 72px;
      margin-bottom: 20px;
    }

    p {
      text-align: center;
    }

  }
}
</style>
