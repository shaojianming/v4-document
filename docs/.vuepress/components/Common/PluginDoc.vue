<template>

  <div style="display: flex;flex-direction:row;justify-content: space-between;flex-wrap: wrap;">
    <template v-for="plugin in pluginList">
      <div  class="saas-box-card-item">
        <el-card class="box-card" :body-style="{ padding: '0px' }"style="  width: 270px;
  height: 290px;
  margin-bottom: 30px;
  box-sizing: border-box;">
          <div slot="header" class="clearfix saas-box-header">
            <img  :src="$withBase(plugin.logo)" alt="" style="width: 100%;height: 100%">
          </div>
          <div>
            <img  class="saas-banner-img" :src="$withBase(plugin.banner)" alt="">
            <div class="sass-desc-div">
              名称:<a :href="plugin.homeUrl" target="_blank">{{plugin.name}}</a>
              <div class="bottom clearfix">
                点击前往<a :href="plugin.docUrl" target="_blank">配置文档</a>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </template>
  </div>
</template>

<style>
.saas-box-card-item /deep/ {
  width: 270px;
  height: 290px;
  margin-bottom: 30px;
  box-sizing: border-box;
}

.saas-banner-img /deep/{
  width: 100%;height: 120px;
}

.sass-desc-div /deep/{
  padding: 10px;
  height: 65px
}

.saas-box-header /deep/{
  width: 120px;
  height: 45px;
}

</style>


<script type="application/javascript">
export default {
  data() {
    return {
      pluginList:[
        {
          logo:"/v4/saas/plugin/magento/logo.png",
          banner:"/v4/saas/plugin/magento/magentoLogo.svg",
          homeUrl:"https://business.adobe.com/products/magento/open-source.html",
          docUrl:"/pages/26e730/",
          name:"Magento 2"
        },
        {
          logo:"/v4/saas/plugin/woocommerce/logo.svg",
          banner:"/v4/saas/plugin/woocommerce/banner.png",
          homeUrl:"https://woocommerce.com",
          docUrl:"/pages/b78815/",
          name:"Woocommerce"
        },
        {
          logo:"/v4/saas/plugin/prestashop/logo.png",
          banner:"/v4/saas/plugin/prestashop/banner.png",
          homeUrl:"https://prestashop.com/",
          docUrl:"/pages/89889b/",
          name:"Prestashop"
        },
        {
          logo:"/v4/saas/plugin/opencart/logo.png",
          banner:"/v4/saas/plugin/opencart/banner.png",
          homeUrl:"https://www.opencart.com/",
          docUrl:"/pages/2ac081/",
          name:"OpenCart"
        },
        {
          logo:"/v4/saas/plugin/zenCart/logo.png",
          banner:"/v4/saas/plugin/zenCart/banner.png",
          homeUrl:"https://www.zen-cart.com",
          docUrl:"/pages/3e3080/",
          name:"Zen Cart®"
        },
      ]
    }
  },
  created(){
    if (this.type==="saas"){
      this.cards = this.cardList;
    }

    if (this.type==="plugin"){
      this.cards = this.pluginList;
    }
  }
}
</script>
