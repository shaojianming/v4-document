<template>

  <div style="display: flex;flex-direction:row;justify-content: space-between;flex-wrap: wrap;">
    <template v-for="card in cards">
      <div  class="saas-box-card-item">
        <el-card class="box-card" :body-style="{ padding: '0px'}" style="  width: 270px;
  height: 290px;
  margin-bottom: 30px;
  box-sizing: border-box;">
          <div slot="header" class="clearfix saas-box-header">
            <img  :src="$withBase(card.logo)" alt="" style="width: 100%;height: 100%">
          </div>
          <div>
            <img  class="saas-banner-img" :src="$withBase(card.banner)" alt="">
            <div class="sass-desc-div">
              Platform:<a :href="card.homeUrl" target="_blank">{{card.name}}</a>
              <div class="bottom clearfix">
                Link     <a :href="card.docUrl" target="_blank">document</a>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </template>
  </div>
</template>

<style>
.saas-box-card-item {
  width: 270px;
  height: 290px;
  margin-bottom: 30px;
  box-sizing: border-box;
}

.saas-banner-img{
  width: 100%;height: 120px;
}

.sass-desc-div {
  padding: 10px;
  height: 65px
}

.saas-box-header{
  width: 120px;
  height: 45px;
}

</style>


<script type="application/javascript">
export default {
  props:['type'],
  data() {
    return {
      cards: [
        {
          logo:"https://www.shoplus.net/images/logo@2x.png",
          banner:"https://myshoplus.zhizh.com/shoplus/202112081432375269.png",
          homeUrl:"https://www.shoplus.net",
          docUrl:"/pages/962663/",
          name:"超店Shoplus"
        },
        {
          logo:"https://www.funpinpin.cn/fpp/logo.png",
          banner:"https://www.funpinpin.cn/fpp/fpp_%E7%BC%96%E7%BB%84_7.png",
          homeUrl:"https://www.funpinpin.cn/",
          docUrl:"/pages/c42a81/",
          name:"FunPinPin"
        },
        {
          logo:"/v4/saas/leadong/logo.png",
          banner:"/v4/saas/leadong/banner.jpg",
          homeUrl:"https://www.leadongshop.com/",
          docUrl:"/pages/76e4c1/",
          name:"领动·领售"
        },
        {
          logo:"/v4/saas/shoptop/logo.gif",
          banner:"/v4/saas/shoptop/banner.png",
          homeUrl:"https://www.shoptop.com/",
          docUrl:"https://helpcenter.shoptop.com/hc/zh-cn/articles/4411887801241-%E5%A6%82%E4%BD%95%E7%BB%91%E5%AE%9A-Pingpong-pay",
          name:"Shoptop"
        },
        {
          logo:"/v4/saas/shopify/logo.webp",
          banner:"/v4/saas/shopify/banner.webp",
          homeUrl:"https://www.shopify.cn/",
          docUrl:"/saas/shopify/shopify.pdf",
          name:"Shopify"
        },
        {
          logo:"/v4/saas/wqy/logo.png",
          banner:"/v4/saas/wqy/banner.png",
          homeUrl:"https://www.51microshop.com/",
          docUrl:"https://docs.51microshop.com/document/35-315",
          name:"万全云电商"
        },
        {
          logo:"/v4/saas/shoplazza/logo.svg",
          banner:"/v4/saas/shoplazza/banner.png",
          homeUrl:"https://www.shoplazza.cn",
          docUrl:"https://helpcenter.shoplazza.com/hc/zh-cn/articles/4809154001817-Pingpongpay",
          name:"SHOPLAZZA店匠"
        },
        {
          logo:"/v4/saas/xorder/logo.svg",
          banner:"/v4/saas/xorder/banner.png",
          homeUrl:"https://www.xorder.com.cn/",
          docUrl:"/pages/fc9101/",
          name:"奇单Xorder"
        },
        {
          logo:"/v4/saas/huaweiyun/logo.svg",
          banner:"/v4/saas/huaweiyun/banner.png",
          homeUrl:"https://marketplace.huaweicloud.com/markets/sailing/index.html",
          docUrl:"/saas/huaweiyun/config.pdf",
          name:"华为云跨境电商平台"
        },
        {
          logo:"/v4/saas/allValue/logo.png",
          banner:"/v4/saas/allValue/banner.png",
          homeUrl:"https://www.allvalue.com.cn/",
          docUrl:"https://qima.feishu.cn/docx/doxcn6QVJ56xp8zKtjUkNk7elWe",
          name:"有赞AllValue"
        },
        {
          logo:"/v4/saas/ueeShop/ueeshoplogo.png",
          banner:"/v4/saas/ueeShop/banner.png",
          homeUrl:"https://www.ueeShop.com/",
          docUrl:"https://help.ueeshop.com/info/i-755.html",
          name:"UeeShop"
        },
        {
          logo:"/v4/saas/linkedmall/logo.png",
          banner:"/v4/saas/linkedmall/banner.png",
          homeUrl:"https://www.aliyun.com/product/applicationservice/linkedmall",
          docUrl:"/v4/saas/linkedmall/Linkedmall&PingPongCheckout.pdf",
          name:"LinkedMall"
        },
        {
          logo:"/v4/saas/shopLine/shopLineLogo.png",
          banner:"/v4/saas/shopLine/banner.png",
          homeUrl:"https://www.aliyun.com/product/applicationservice/linkedmall",
          docUrl:"/v4/saas/shopLine/shopLine.pdf",
          name:"ShopLine"
        }
      ]
    }
  }
}
</script>
