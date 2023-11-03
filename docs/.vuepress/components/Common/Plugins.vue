<template>

  <div style="display: flex;flex-direction:row;justify-content: space-between;flex-wrap: wrap;">
    <template v-for="plugin in plugins">
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
              name:<a :href="plugin.homeUrl" target="_blank">{{plugin.name}}</a>
              <div class="bottom clearfix">
                Click to proceed <a :href="plugin.docUrl" target="_blank">Configuration document</a>
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
      plugins:[
        {
          logo:"/v4/saas/plugin/woocommerce/logo.svg",
          banner:"/v4/saas/plugin/woocommerce/banner.png",
          homeUrl:"https://woocommerce.com",
          docUrl:"/pages/b78815/",
          name:"Woocommerce"
        },
        {
          logo:"/v4/saas/plugin/magento/logo.png",
          banner:"/v4/saas/plugin/magento/magentoLogo.svg",
          homeUrl:"https://business.adobe.com/products/magento/open-source.html",
          docUrl:"/pages/26e730/",
          name:"Magento 2"
        },
        {
          logo:"/v4/saas/plugin/prestashop/logo.png",
          banner:"/v4/saas/plugin/prestashop/banner.png",
          homeUrl:"https://prestashop.com/",
          docUrl:"/pages/89889b/",
          name:"Prestashop"
        }

      ]
    }
  },
}
</script>
