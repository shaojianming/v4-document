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
              name:<a :href="card.homeUrl" target="_blank">{{card.name}}</a>
              <div class="bottom clearfix">
                Click to proceed <a :href="card.docUrl" target="_blank">Configuration document</a>
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
          logo:"/v4/saas/shopify/logo.webp",
          banner:"/v4/saas/shopify/banner.webp",
          homeUrl:"https://www.shopify.cn/",
          docUrl:"/v4/saas/shopify/shopify.pdf",
          name:"Shopify"
        },
        {
          logo:"/v4/saas/shoplazza/logo.svg",
          banner:"/v4/saas/shoplazza/banner.png",
          homeUrl:"https://www.shoplazza.cn",
          docUrl:"https://helpcenter.shoplazza.com/hc/zh-cn/articles/10524404715801-PingPong",
          name:"SHOPLAZZA"
        },
        {
          logo:"https://www.shoplus.net/images/logo@2x.png",
          banner:"https://myshoplus.zhizh.com/shoplus/202112081432375269.png",
          homeUrl:"https://www.shoplus.net",
          docUrl:"/pages/962663/",
          name:"Shoplus"
        },
      ]
    }
  },
}
</script>
