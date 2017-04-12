<template>
  <div class="index">
    <div class="index-middle">
      <Row>
        <Col class="index-middle-search" span="8">
          <p class="index-middle-search__title"><Icon type="ios-people" />搜索酒店</p>
          <div class="index-middle-search__form">
            <Form :model="hotelform" label-position="left" :label-width="80">
              <Form-item label="目的地">
                <v-distpicker :placeholders="hotelform.address"></v-distpicker>
              </Form-item>
              <Form-item label="入驻日期">
                <Date-picker type="date" placeholder="入驻日期" v-model="hotelform.enterdate"></Date-picker>
              </Form-item>
              <Form-item label="退房时间">
                <Date-picker type="date" placeholder="退房时间" v-model="hotelform.outdate"></Date-picker>
              </Form-item>
              <Form-item label="价格区间">
                <Input-number :min="1" v-model="hotelform.pricerange[0]"></Input-number>
                <span>~</span>
                <Input-number :min="1" v-model="hotelform.pricerange[1]"></Input-number>
              </Form-item>
              <Form-item>
                <Button type="primary">搜索</Button>
              </Form-item>
            </Form>
          </div>
        </Col>
        <Col class="index-middle-banner" span="16">
          <Carousel autoplay v-model="banner">
              <Carousel-item>
                  <div class="index-middle-banner__carouse">
                    <router-link to="/">
                      <img src="../assets/images/banner/banner1.jpg">
                    </router-link>
                  </div>
              </Carousel-item>
              <Carousel-item>
                  <div class="index-middle-banner__carouse">
                    <router-link to="/">
                      <img src="../assets/images/banner/banner2.jpg">
                    </router-link>
                  </div>
              </Carousel-item>
              <Carousel-item>
                  <div class="index-middle-banner__carouse">
                    <router-link to="/">
                      <img src="../assets/images/banner/banner3.jpg">
                    </router-link>
                  </div>
              </Carousel-item>
              <Carousel-item>
                  <div class="index-middle-banner__carouse">
                    <router-link to="/">
                      <img src="../assets/images/banner/banner4.jpg">
                    </router-link>
                  </div>
              </Carousel-item>
              <Carousel-item>
                  <div class="index-middle-banner__carouse">
                    <router-link to="/">
                      <img src="../assets/images/banner/banner5.jpg">
                    </router-link>
                  </div>
              </Carousel-item>
          </Carousel>

          <div class="group">
            <ul class="search-info" v-for="item in hotel" :key="item">
              <li class="search-info-pic">
                <img src="../assets/images/hotel.jpg">
              </li>
              <li class="search-info-title">
                <h3>{{item.title}}</h3>
                <div class="search-info-title__address">
                  {{item.address}}
                </div>
                <div class="search-info-title__comment">
                  {{item.score + '分'}}
                  <b style="color:#CCC;">|</b>
                   来自{{item.count}}人点评
                </div>
              </li>
              <li class="search-info-price">
                <div class="price-box">
                  <span class="price">
                    <dfn>¥</dfn>
                    <b>{{item.price}}</b>起
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import {hotel} from '@/mock/hotel'

export default {
  name: 'hotel',
  created () {
  },
  data () {
    return {
      hotel: hotel,
      hotelform: {
        province: '',
        address: {
          province: '省',
          city: '市',
          area: '区'
        },
        city: '',
        district: '',
        destination: '',
        enterdate: '',
        outdate: '',
        pricerange: [0, 1000]
      },
      banner: 0
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
@import '../assets/styles/colors.less';
@import '../assets/styles/helper.less';

.index {
  &-middle {
    .container;
    padding: 20px 0;
    &-search {
      padding: 10px 10px;
      background: @light-blue;
      border-radius: 2%;
      &__title {
        padding: 6px;
        font-size: 18px;
        color: white;
        i {
          padding-right: 10px;
        }
      }
      &__form {
        background: white;
        padding: 20px;
        padding-bottom: 1px;
        border-radius: 2%;
        select {
          margin-bottom: 15px;
          display: inline-block;
          width: 100%;
          height: 32px;
          line-height: 1.5;
          padding: 4px 7px;
          font-size: 12px;
          border: 1px solid #d7dde4;
          border-radius: 4px;
          color: #657180;
          background-color: #fff;
          background-image: none;
          position: relative;
          cursor: text;
          transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
        }
        .ivu-form.ivu-form-label-left {
          button {
            color: white;
            background-color: @light-yellow;
            width: 100%;
            border: none;
            &:active {
              border-width: 1px;
            }
            &:hover {
              background-color: #39f;
              border-color: #39f;
            }
          }
        }
      }
    }

    &-banner {
      padding: 0 20px;
      &__carouse {
        img {
          width: 100%;
          height: 321px;
        }
      }
    }
  }
}
</style>
