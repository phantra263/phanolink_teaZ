<template>
  <div class="footer-contact">
    <div class="container">
      <!-- contact phone -->
      <div class="contact-left contact">
        <p>BẠN ĐANG CẦN ĐƯỢC TƯ VẤN</p>
        <a href="">
          <img src="../../../assets/images/icon-phone.png" alt="">
          <p>Gọi ngay <strong>1800 6768</strong> (miễn phí)</p>
        </a>
      </div>

      <!-- input email -->
      <div class="contact-right contact">
        <p>NHẬP EMAIL NHẬN MÃ GIẢM GIÁ</p>
        <form class="email-type">
          <button><img src="../../../assets/images/icon-email.png" alt="icon mail"></button>
          <input type="email" placeholder="Nhập email của bạn">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterContact"
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables/variables";

.footer-contact {
  background: #01ADAB;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 15px;

    @media #{$info-ipad} {
      flex-direction: column;
    }

    p {
      color: #ffffff;
      margin-right: 10px;
      font-size: 18px;

      @media #{$info-laptop-medium} {
        margin-bottom: 10px;
      }
    }

    .contact {
      display: flex;
      align-items: center;

      @media #{$info-laptop-medium} {
        flex-direction: column;
        justify-content: center;
      }

      @media #{$info-ipad} {
        margin-bottom: 10px;
      }
    }

    .contact-left {
      a {
        height: 44px;
        width: 324px;
        display: flex;
        background: #ffffff;
        border-radius: 24px;
        align-items: center;
        justify-content: center;

        p {
          color: #757575;
          margin-bottom: 5px;

          strong {
            color: #EA4036;
            font-size: 25px;
            font-weight: bold;
          }
        }

        img {
          margin-right: 7px;
        }
      }
    }

    .contact-right {
      .email-type {
        position: relative;
        height: 44px;
        width: 324px;
        display: flex;

        button {
          border: 0;
          background: transparent;
          position: absolute;
          left: 51px;
          top: 50%;
          transform: translateY(-50%);
        }

        input {
          width: 100%;
          padding: 0 13px 0 97px;
          border: 0;
          border-radius: 24px;
          font-size: 16.7px;
        }
      }
    }
  }
}
</style>
