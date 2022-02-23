<template>
  <section>
    <ul class="container">
      <li v-for="(item, index) in breadcrumbs()" :key="index">
        <router-link :to="{ name: item.name}">{{ item.title }}<i class="el-icon-arrow-right"></i></router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Breadcrumb",

  methods: {
    breadcrumbs () {
      if (this.$route.params.name) {
        return [
          {
            title: 'Trang chủ',
            name: 'Home'
          },
          {
            title: this.$route.params.name,
            name: 'Product cate'
          }
        ]
      }

      return  [{
        title: 'Trang chủ',
        name: 'Home'
      }]
    }
  },

  watch: {
    // call again the method if the route changes
    '$route': 'breadcrumbs'
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/variables/variables";

section {
  background: #E2E3E4;
  padding: 20px;
  margin-bottom: 15px;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      a {
        color: #808081;
        font-size: 12px;

        i {
          margin: auto 20px;

          @media #{$info-phone-normal} {
            margin: auto;
          }
        }
      }

      &:last-child a {
        font-weight: bold;
        color: #505050;

        i {
          display: none;
        }
      }
    }
  }
}
</style>
