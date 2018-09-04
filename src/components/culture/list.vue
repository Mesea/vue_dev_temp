<template>
<div class="statis" v-wechat-title="$route.meta.title">
   你好我是One
</div>
</template>
<script>
import params from "@/core/api/config/params.js"
export default {
 
}
</script>
<style scoped lang="scss">
.statis{
  .default_rank{
    @include backgroundImg("culture/default_rank.png", center, center);
    @include wh(400,500)
    @include center;
    font-size: r(32);
    color: #A0A0A0;
    z-index: 11;
    top: 55%;
    .txt{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
  .culture{
    background:url("../../assets/images/culture/bg_bottom2.png") left bottom no-repeat #2BC2F4;
    background-size: 100% auto;
    bottom:auto;
    height: r(240);
    padding: 0;
    @include fj;
    .tj{
      @include wh(180,180);
      border-radius:100%;
      border: 1px solid rgba(255,255,255,.18);
      .s36{margin-bottom: r(20);}
      @include fjt;
      margin: 0 auto;
    }
  }
  .tjtab{
    @include fj;
    position: fixed;
    top: 0;
    left: 0;
    height: r(88);
    width: 100%;
    border: 1px solid #EEEEEE;
    background: #fff;
    z-index: 2;
    li{
      width: 50%;
      text-align: center;
      position: relative;
      line-height: r(88);
      color: #ABABAB;
      font-size: r(36);
    }
    li.hover{
      color: #2BC2F4;
    }
    li.hover:after{
      content: "";
      @include wh(40,6);
      @include cl;
      bottom: 0;
      border-radius: r(6);
      background:$blue;
    }
    li:before{
      content: "";
      @include wh(2,40);
      border-left:1px solid #eee;
      position: absolute;
      top: r(28);
      left: 0;
    }
    li:first-child:before{display: none;}
  }
  .top3{margin-top:r(240)}
  .tjlist{
    @include setRem(padding,20,16,60);
    li{
        @include setRem(padding,20,44);
        box-shadow: 0 1px 5px 0 rgba(190,196,219,0.5);
        border-radius:r(16);
        line-height:r(72);
        @include fj;
        color: $blue;
        font-size: r(32);
        margin-bottom: r(20);
        .pic{
          @include wh(72,72);
          @include setRem(margin,0,8,0,0);
          border-radius: 100%;
          @include vc;
        }
        span{
          @include vc;
        }
        .number{min-width:r(40)}
    }
    .btn_tj{
      border: 1px solid $blue;
      font-size: r(36);
      box-shadow: 0 0 0 0;
      p{width: 100%;}
    }
  }
  .tip{
    position: fixed;
    left: 0;
    bottom:0;
    padding-bottom:r(20);
    color: #C5C5C5;
    width: 100%;text-align: center;
    background: #fff;z-index: 3;
  }
  .top1{margin-top: r(328)}
  .top2{margin-top: r(88)}
  .jico{
      width: r(48);
      margin-right:r(48);
  }
}
</style>
