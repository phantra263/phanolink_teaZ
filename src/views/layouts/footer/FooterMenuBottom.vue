<template>
  <div class="container">
    <!-- list infor company -->
    <div class="infor-company">
      <img src="../../../assets/images/logo-footer.png" alt="">
      <h3>CÔNG TY CỔ PHẦN DƯỢC PHẨM PHANO</h3>
      <p>Địa chỉ: 31 Hồ Biểu Chánh, P.12, Q.Phú Nhuận, TP.HCM</p>
      <ul>
        <li>MST: 0304860663</li>
        <li>Email: cskh@phanolink.com</li>
        <li>Tel: 1800 6768</li>
      </ul>
    </div>

    <!-- list support customer -->
    <div class="support-customer">
      <h3>HỖ TRỢ KHÁCH HÀNG</h3>
      <ul class="list-arrow">
        <li><a href="">Chính sách đổi trả</a></li>
        <li><a href="">Chính sách giao hàng</a></li>
        <li><a href="">Chính sách bảo mật</a></li>
        <li><a href="">Hướng dẫn thanh toán</a></li>
        <li><a href="">Hướng dẫn đặt hàng</a></li>
        <li><a href="">Giải quyết phản hồi</a></li>
        <li><a href="">Giấy phép kinh doanh</a></li>
      </ul>
    </div>

    <!-- List account control -->
    <div class="account-control">
      <h3>TÀI KHOẢN</h3>
      <ul class="list-arrow">
        <li><a href="">Đăng ký</a></li>
        <li><a href="">Đăng nhập</a></li>
        <li><a href="">Kiểm tra đơn hàng</a></li>
      </ul>
    </div>

    <!-- contact with us -->
    <div class="contact-us">
      <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
      <nav>
        <a href=""><img src="../../../assets/images/zalo.png" alt=""></a>
        <a href=""><img src="../../../assets/images/fb.png" alt=""></a>
        <a href=""><img src="../../../assets/images/google.png" alt=""></a>
        <a href=""><img src="../../../assets/images/youtube.png" alt=""></a>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  name: "FooterMenuBottom"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables/variables";

li, a, p {
  font-size: 14px;
  color: #595959;
}

ul li {
  margin-bottom: 8px;
}
.container {
  display: flex;
  justify-content: space-between;
  padding: 72px 15px 84px;
  flex-wrap: wrap;

  @media #{$info-ipad-pro} {
    padding: 35px 15px
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
    color: #595959;
    line-height: 20px;

    &:first-child {
      font-size: 18px;
      margin-bottom: 48px;

      @media #{$info-ipad-pro} {
        margin: 20px auto;
      }
    }
  }

  .infor-company {
    img, p {
      margin-bottom: 25px;
    }
  }

  .list-arrow {
    li {
      padding-left: 16px;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        background-image: url("../../../assets/images/arrow.png");
        left: 4px;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 9px;
      }
    }
  }

  .contact-us {
    nav {
      a {
        margin-right: 10px;
      }
    }
  }
}
</style>
