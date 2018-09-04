<template>
  <div ref="map" class="culture padding0" v-wechat-title="$route.meta.title">
    <div class="map">
      你大爷的
    </div>
  </div>
</template>
<script>
import { Toast, Indicator, MessageBox } from 'mint-ui';
export default {
  mounted() {
    this.pageInit();
  },
  methods: {
    pageInit() {
      this.$api.testFGet().then(function(value) {
        console.log(value);
      }, function(error) {
        console.log(error)
      });
    }
  }
}

</script>
<style scoped lang="scss">
.culture {
  @include backgroundImg("culture/bg_bottom.png", 0, bottom);
  .pic {
    height: 100%;
    margin-right: r(20);
  }
  .photo {
    @include wh(80, 80);
    position: absolute;
    top: r(-60);
    left: r(110);
    border: 2px solid #4E84E6;
    border-radius: r(24);
  }
  .btn_ruler {
    @include center;
    top: 83%;
    position: fixed;
    background: #2BC2F4;
    color: #fff;
    line-height: r(70);
    font-size: r(32);
    border-radius: r(70);
    padding: 0 r(26);
  }
  .ico_kuo {
    @include backgroundImg("culture/ico_biao.png", 0, 48%) @include wh(16, 32);
    @include vc;
    opacity: 0.5;
  }
  .map {
    width: r(2384);
    height: r(1094);
    position: relative;
    li {
      position: absolute;
      top: 18%;
      left: 4.4%;
    }
    .item2 {
      top: 16%;
      left: 20%;
    }
    .item3 {
      top: 39%;
      left: 14%;
    }
    .item4 {
      top: 69%;
      left: 11%;
    }
    .item5 {
      top: 64%;
      left: 27%;
    }
    .item6 {
      top: 60%;
      left: 39.7%;
    }
    .item7 {
      top: 46.5%;
      left: 56.5%;
    }
    .item8 {
      top: 39%;
      left: 44.8%;
    }
    .item9 {
      top: 24%;
      left: 34.5%;
    }
    .item10 {
      top: 12%;
      left: 47.3%;
    }
    .item11 {
      top: 19%;
      left: 60.4%;
    }
    .item12 {
      top: 10%;
      left: 77.3%;
    }
    .item13 {
      top: 19%;
      left: 91%;
    }
    .item14 {
      top: 42%;
      left: 78.5%;
    }
    .item15 {
      top: 67.5%;
      left: 74.8%;
    }
    .item16 {
      top: 69%;
      left: 88.5%;
    }
    span:first-child {
      @include wh(134, 134);
      display: block;
      background: url("../../assets/images/culture/ico_chao.png") no-repeat;
      background-size: auto 200%;
    }
    span.icos1 {
      background-position: 0 114%;
    }
    span.icos2 {
      background-position: 4.73% 114%;
    }
    span.icos3 {
      background-position: 4.73%*2 114%;
    }
    span.icos4 {
      background-position: 4.73%*3 114%;
    }
    span.icos5 {
      background-position: 4.73%*4 114%;
    }
    span.icos6 {
      background-position: 4.73%*5 114%;
    }
    span.icos7 {
      background-position: 4.73%*6 114%;
    }
    span.icos8 {
      background-position: 4.73%*7 114%;
    }
    span.icos9 {
      background-position: 4.73%*8 114%;
    }
    span.icos10 {
      background-position: 4.73%*9 114%;
    }
    span.icos11 {
      background-position: 4.73%*10 114%;
    }
    span.icos12 {
      background-position: 4.73%*11 114%;
    }
    span.icos13 {
      background-position: 4.73%*12 114%;
    }
    span.icos14 {
      background-position: 4.73%*13 114%;
    }
    span.icos15 {
      background-position: 4.73%*14 114%;
    }
    span.icos16 {
      background-position: 4.73%*15 114%;
    }

    span.hover.icos1 {
      background-position: 0 0;
    }
    span.hover.icos2 {
      background-position: 4.73% 0;
    }
    span.hover.icos3 {
      background-position: 4.73%*2 0;
    }
    span.hover.icos4 {
      background-position: 4.73%*3 0;
    }
    span.hover.icos5 {
      background-position: 4.73%*4 0;
    }
    span.hover.icos6 {
      background-position: 4.73%*5 0;
    }
    span.hover.icos7 {
      background-position: 4.73%*6 0;
    }
    span.hover.icos8 {
      background-position: 4.73%*7 0;
    }
    span.hover.icos9 {
      background-position: 4.73%*8 0;
    }
    span.hover.icos10 {
      background-position: 4.73%*9 0;
    }
    span.hover.icos11 {
      background-position: 4.73%*10 0;
    }
    span.hover.icos12 {
      background-position: 4.73%*11 0;
    }
    span.hover.icos13 {
      background-position: 4.73%*12 0;
    }
    span.hover.icos14 {
      background-position: 4.73%*13 0;
    }
    span.hover.icos15 {
      background-position: 4.73%*14 0;
    }
    span.hover.icos16 {
      background-position: 4.73%*15 0;
    }
    .stars {
      text-align: center;
      margin-top: r(-10);
      white-space: nowrap;
      span {
        @include wh(34,
        34);
        @include vc;
        margin-left: r(10);
        @include backgroundImg("culture/ico_biao.png",
        0,
        9%);
      }
      span.hover {
        background-position: 0 0;
      }
    }
  }
}

</style>
