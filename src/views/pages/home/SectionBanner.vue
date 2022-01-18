<template>
  <section>
    <div class="container">
      <el-carousel trigger="click">
        <el-carousel-item v-for="(bannerItem, index) in bannerImgs"
                          :key="index" >
          <img :src="bannerItem.imgHref" alt="banner">

          <!-- btn join now -->
          <div class="btn-wrap">
            <a href="" class="btn-join">
              <img src="../../../assets/images/arrow-btn-icon.png" alt="icon arrow">
              <p>THAM GIA NGAY</p>
            </a>
          </div>
        </el-carousel-item>
      </el-carousel>

      <!-- content icon -->
      <div class="banner-icon">
        <div class="icon-item">
          <img src="../../../assets/images/customer-service-icon.svg" alt="icon custom service">
          <p>Dược sĩ<br>tư vấn</p>
        </div>

        <div class="icon-item">
          <img src="../../../assets/images/percent-green-icon.svg" alt="icon percent greeen">
          <p>Sản phẩm<br>chính hãng</p>
        </div>

        <div class="icon-item">
          <img src="../../../assets/images/delivery-green-icon.svg" alt="icon deliverygreen">
          <p>Giao hàng<br>toàn quốc</p>
        </div>

        <div class="icon-item">
          <img src="../../../assets/images/gift-green-icon.svg" alt="icon gift green">
          <p>Tích luỹ<br>dổi quà</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionBanner",

  data() {
    return {
      bannerImgs: [
        {
          id: 1,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 2,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 3,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 4,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 5,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 6,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 7,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 8,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 9,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 10,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 11,
          imgHref: require('../../../assets/images/banner-img.png')
        },
        {
          id: 12,
          imgHref: require('../../../assets/images/banner-img.png')
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables/variables";

section {
  padding: 25px 0;
  background: #ffffff;

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .el-carousel {
      max-width: 902px;
      width: 902px;
      border-radius: 20px;
      position: relative;
      height: 278px;

      @media #{$info-ipad-pro} {
        height: 208px;
      }

      @media #{$info-ipad} {
        height: 160px
      }

      @media #{$info-phone-normal} {
        height: 28.5vw;
      }

      .btn-wrap {
        position: absolute;
        left: 61%;
        bottom: 20px;
        border: 2px solid #ffffff;
        border-radius: 5px;
        width: 16vw;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media #{$info-ipad-pro} {
          width: 17.13vw;
          height: 3.18vw;
          left: 70%;
        }

        .btn-join {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 98%;
          height: 92%;
          border-radius: 5px;
          background: #FFAB78;
          padding: 6px;

          img {
            @media #{$info-ipad-pro} {
              width: 2.27vw;
            }
          }

          p {
            font-size: 1.4vw;
          }
        }
      }

    }

    .banner-icon {
      display: flex;
      flex-flow: wrap;
      flex: 1;
      align-items: center;

      .icon-item {
        flex-flow: column;
        display: flex;
        width: 50%;
        justify-content: center;
        margin: 7px auto;

        @media #{$info-laptop-smallest} {
          width: 25%;
        }

        img {
          height: 70px;
        }

        p {
          text-align: center;
          font-size: 17px;
          color: #777777;
        }
      }
    }
  }
}



</style>
