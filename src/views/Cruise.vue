<template>
  <div class="cruise">
    <p class="cruise-steptext">当前正在进行第 {{ current + 1 }} 步</p>
    <Steps :current="current" class="cruise-step">
        <Step title="选择游轮"></Step>
        <Step title="填写订单"></Step>
        <Step title="网上支付"></Step>
        <Step title="预定成功"></Step>
    </Steps>
    <div v-if="current === 0" class="cruise-stepcontent">
      <div class="cruise-search">
        <div class="cruise-search-input">
          <input type="text" name="" placeholder="例如：邮轮、航线或目的地">
        </div>
        <button>搜索</button>
      </div>

      <div class="cruise-searchinfo">
        <ul class="search-info" v-for="item in boat" :key="item">
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
    </div>

    <div v-if="current === 1" class="cruise-stepcontent">
      <div class="curise-form">
        <Form :model="formItem" label-position="left" :label-width="80">
            <Form-item label="班次选择">
              <Date-picker type="date" placeholder="班次选择" v-model="formItem.time"></Date-picker>
            </Form-item>

            <Form-item label="日期选择">
              <Date-picker type="date" placeholder="日期选择" v-model="formItem.date"></Date-picker>
            </Form-item>

            <Form-item label="备注">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </Form-item>

            <Form-item label="价格">
                <Input v-model="formItem.price" disabled type="text"></Input>
            </Form-item>
        </Form>
      </div>
    </div>

    <div v-if="current === 2" class="cruise-stepcontent">
      <div class="cruise-pay">
        <p>
          单号：L_2017041302001546  支付金额：¥ 3280 
          <span>您需要支付：¥ <strong>3280</strong> 元</span>
        </p>
      </div>
    </div>

    <div class="cruise-next">
      <i-button type="primary" @click="next">下一步</i-button>
    </div>

  </div>
</template>
<script>
import {boat} from '@/mock'

export default {
  name: 'cruise',
  created () {
  },
  data () {
    return {
      current: 0,
      boat: boat,
      formItem: {
        time: '',
        data: '',
        textarea: '',
        price: '9999'
      }
    }
  },
  methods: {
    next () {
      if (this.current === 3) {
        this.current = 0
        this.$Notice.success({
          title: '预定成功！',
          top: 50,
          duration: 3
        })
      } else {
        this.current += 1
      }
    }
  }
}
</script>
<style lang="less">
@import '../assets/styles/colors.less';
@import '../assets/styles/helper.less';

.cruise {
  .container;
  padding: 20px 0;
  &-steptext {
    padding: 20px 0;
    font-size: 16px;
  }

  &-step {
    padding: 20px 0;
  }

  &-stepcontent {
    min-height: 300px;
  }

  &-search {
    width: 570px;
    padding: 2px;
    margin: auto;
    background-color: #ff9913;
    &-input {
      display: inline-block;
      vertical-align: middle;
      width: 470px;
      height: 36px;
      overflow: hidden;
      position: relative;
      z-index: 6;
      background-color: #fff;
      input {
        width: 432px;
        height: 36px;
        padding-left: 10px;
        border: 0 none;
        background: 0;
        outline: 0;
        font-size: 16px;
        line-height: 36px;
      }
    }

    button {
      width: 90px;
      height: 36px;
      padding: 1px 0;
      border: 0;
      background: 0;
      font-size: 20px;
      line-height: 36px;
      color: #fff;
      text-align: center;
      outline: 0;
      cursor: pointer;
    }
  }

  &-searchinfo {
    padding: 20px 20%;
  }

  &-next {
    padding-right: 20%;
    text-align: right;
  }

  &-form {
    width: 70%;
    margin: auto;
  }

  &-pay {
    padding: 0 20%;
    p {
      span {
        float: right;
      }
    }
  }
}
</style>
