<template>
  <section id="section-functional-foods" class="container">
    <!-- title section -->
    <h2 class="title-section">Mua Thuốc Theo Toa Trực Tuyến</h2>
    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>

    <div class="wrap-section">
      <!-- highlight service card -->
      <div class="highlightCard" v-for="(item, index) in serviceHighlights" :key="index">
        <img :src="require(`../../../assets/images/${item.imgHref}`)" alt="">

        <h2>{{ item.title }}</h2>
        <p class="descrip">{{ item.descrip }}</p>
      </div>
    </div>

    <!-- btn upload -->
    <a href="upload/upload-form.html" class="cart__btn">
      <font-awesome-icon icon="clipboard" />
      Tạo toa thuốc ngay
    </a>
  </section>
</template>

<script>
export default {
  name: "SectionBuyMedicine",

  data() {
    return {
      serviceHighlights: [
        {
          id: 1,
          title: 'CHỤP HÌNH\n' +
              'TOA THUỐC',
          descrip: 'Và tải ảnh lên website\n' +
              'hoặc ứng dụng Jio Health.',
          imgHref: 'photo-mobile.png'
        },
        {
          id: 2,
          title: 'DƯỢC SĨ\n' +
              'TƯ VẤN',
          descrip: 'Các dược sĩ kinh nghiệm sẽ gọi\n' +
              ' điện tư vấn và xác nhận đơn thuốc.',
          imgHref: 'message.png'
        },
        {
          id: 3,
          title: 'GIAO HÀNG NHANH\n' +
              'TRONG 4H',
          descrip: 'Trong khu vực nội thành\n' +
              'Thành Phố Hồ Chí Minh',
          imgHref: 'ship-express.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables/variables";

.container {
  background: #ffffff;
  padding: 25px 35px;

  @media #{$info-phone-normal} {
    padding: 25px 15px;
  }

  h2 {
    font-size: 22px;
    font-weight: bold;
    color: #505050;
    margin-bottom: 13px;
    line-height: 26px;
    text-align: center;

    &.title-section {
      margin-bottom: 5px;
      text-align: left;
    }
  }

  p {
    font-size: 12px;
    color: #777777;
    margin-bottom: 33px;
    line-height: 18px;

    &.descrip {
      font-size: 15px;
    }
  }

  .wrap-section {
    display: flex;
    margin-bottom: 34px;

    @media #{$info-phone-normal} {
      flex-wrap: wrap;
    }


    .highlightCard {
      width: calc(100% / 3);
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 28px 20px 22px 20px;
      white-space: pre-line;

      @media #{$info-phone-normal} {
        width: 100%;
      }

      &:nth-child(2):before {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: #dfdfdf;
        top: 0;
        left: 0;

        @media #{$info-phone-normal} {
          width: 100%;
          height: 1px;
        }
      }

      &:nth-child(2):after {
        right: 0;
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: #dfdfdf;
        top: 0;

        @media #{$info-phone-normal} {
          width: 100%;
          height: 1px;
          top: unset;
          bottom: 0;
        }
      }

      img {
        margin-bottom: 13px;
      }

      p {
        text-align: center;
      }
    }
  }

  .cart__btn {
    background-color: #ea4036;
    font-size: 13.82px;
    color: #ffffff;
    display: flex;
    width: 174px;
    font-weight: bold;
    height: 36px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding-bottom: 2px;

    svg {
      margin-right: 10px;
    }
  }
}
</style>
