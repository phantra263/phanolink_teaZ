<template>
  <section class="container">
    <div class="title-wrap">
      <div class="title-left">
        <h3 class="title-section">Góc sức khoẻ</h3>
      </div>

      <!-- btn see more -->
      <a href="" class="btn-see-more">Xem tất cả ></a>
    </div>

    <div class="news__content">
      <div class="content__left content__detail">
        <!-- description news -->
        <article v-for="(news, index) in listNews" :key="index">
          <a href="">
            <!-- img news -->
            <div class="item__img">
              <img :src="require(`../../../assets/images/${news.imgHref}`)" alt="">
            </div>

            <!-- description and detail news -->
            <div class="item__infor">
              <h4>{{ news.title }}</h4>
              <p>{{ news.detail }}</p>
            </div>
          </a>
        </article>
      </div>

      <div class="content__right content__detail">
        <!-- title good news -->
        <h4 class="title"><span>Bài Viết Hay Nên Đọc</span></h4>

        <!-- description news -->
        <article v-for="(news, index) in listGoodNews" :key="index">
          <a href="">
            <!-- img news -->
            <span class="count__news">{{ news.id }}</span>


            <!-- description and detail news  -->
            <div class="item__infor item__infor-border">
              <h4>{{ news.title }}</h4>
              <p>{{ news.detail }}</p>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionNews",

  data() {
    return {
      listNews: [
        {
          id: 1,
          imgHref: 'news1.png',
          title: 'Lorem ipsum dolor sit amet, ',
          detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ',
        },
        {
          id: 2,
          imgHref: 'news2.png',
          title: 'Lorem ipsum dolor sit amet, ',
          detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ',
        },
        {
          id: 3,
          imgHref: 'news3.png',
          title: 'Lorem ipsum dolor sit amet, ',
          detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ',
        }
      ],

      listGoodNews: [
        {
          id: 1,
          imgHref: 'news1.png',
          title: 'Lorem ipsum dolor sit amet, ',
          detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ',
        },
        {
          id: 2,
          imgHref: 'news2.png',
          title: 'Lorem ipsum dolor sit amet, ',
          detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ',
        },
        {
          id: 3,
          imgHref: 'news3.png',
          title: 'Lorem ipsum dolor sit amet, ',
          detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ',
        },
        {
          id: 4,
          imgHref: 'news3.png',
          title: 'Lorem ipsum dolor sit amet, ',
          detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ',
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/variables/variables";

.container {
  background: #ffffff;
  padding: 0 33px 50px;

  @media #{$info-ipad} {
    padding: 0 15px 30px;
  }

  .title-wrap {
    padding: 25px 0;
    border-bottom: 0;
  }

  .news__content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media #{$info-ipad-pro} {
      flex-wrap: wrap;
    }


    .content__detail {
      width: 548px;

      @media #{$info-ipad-pro} {
        width: 100%;
      }

      h4 {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;

        @media #{$info-phone-normal} {
          font-size: 17px;
        }

        &.title {
          color: #01B1AF;
          position: relative;
          overflow: hidden;
          padding-bottom: 10px;

          span:after {
            content: '';
            position: absolute;
            top: 50%;
            width: 100%;
            height: 2px;
            background: #E2E3E4;
            transform: translateY(-50%);
          }

        }
      }

      &.content__right {
        article {
          margin-bottom: 15px;

          &:last-child a {
            border: 0;
          }

          a {
            padding-bottom: 15px;
            border-bottom: 1px solid #E2E3E4;
          }
        }
      }

      article {
        margin-bottom: 38px;

        a {
          color: #505050;
          display: flex;
          align-items: center;

          .item__img {
            width: 53.1%;
            max-width: 167px;
            height: 117px;
            overflow: hidden;
            margin-right: 17px;

            @media #{$info-phone-normal} {
              width: 30vw;
              margin-right: 10px;
              height: 100px;
            }

            img {
              object-fit: cover;
              width: 100%;
              height: inherit;
            }
          }

          .count__news {
            font-size: 57px;
            color: #EBEBEB;
            margin-right: 10px;
          }

          .item__infor {
            flex: 1;

            p {
              font-size: 15px;
              font-style: italic;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style>
