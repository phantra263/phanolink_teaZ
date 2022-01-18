<template>
  <section class="container">
    <div class="wrap-section">
      <div class="cate-wrap" v-for="(cate, index) in dataCate"
           :style="{ backgroundImage: `url(${cate.imgBg})`}"
           @click="scroll(cate.id)"
           :key="index">

        <img :src="cate.imgIcon" :alt="cate.name">
        <p>{{ cate.name }}</p>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "SectionMenuProduct",

  props: ['dataCate'],

  data() {
    return {
      menuCate: [
        {
          id: 'section-medicine',
          name: 'Thuốc không kê đơn',
          imgBg: require('../../../assets/images/medicine.png'),
          imgIcon: 'icon-cate-1.png'
        },
        {
          id: 'section-functional-foods',
          name: 'Thực phẩm chức năng',
          imgBg: require('../../../assets/images/functional-foods.png'),
          imgIcon: 'icon-cate-2.png'
        },
        {
          id: 'section-consumer-goods',
          name: 'Hàng tiêu dùng',
          imgBg: require('../../../assets/images/consumer-goods.png'),
          imgIcon: 'icon-cate-3.png'
        },
        {
          id: 'section-cosmetics',
          name: 'Mỹ phẩm',
          imgBg: require('../../../assets/images/cosmetics.png'),
          imgIcon: 'icon-cate-4.png'
        },
        {
          id: 'section-medical-instruments',
          name: 'Dụng cụ y tế',
          imgBg: require('../../../assets/images/medical-instruments.png'),
          imgIcon: 'icon-cate-5.png'
        },
      ]
    }
  },

  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables/variables";

.wrap-section {
  display: flex;
  padding: 25px 15px 15px;
  margin-left: -40px;
  margin-right: -40px;
  justify-content: center;
  flex-flow: wrap;

  .cate-wrap {
    cursor: pointer;
    width: 207px;
    height: 144px;
    background-size: cover;
    background-position: center;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
    }

    @media #{$info-phone-normal} {
      width: 100px;
      height: 100px;
    }

    img {
      z-index: 1;
      @media #{$info-phone-normal} {
        width: 50px;
      }
    }

    p {
      z-index: 1;
      color: #ffffff;
      font-weight: bold;

      @media #{$info-phone-normal} {
        display: none;
      }
    }
  }
}
</style>
