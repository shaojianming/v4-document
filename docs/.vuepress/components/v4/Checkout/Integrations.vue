<template>
<div >
   <div style="display: flex;justify-content: space-between">
     <el-card class="box-card" v-for="card in cards" style="width: 400px">
       <div slot="header" class="clearfix">
         <span>{{card.title}}</span>
       </div>
       <div class="text item">
         <ul>
           <li v-for="desc in card.descList">{{desc}}</li>
         </ul>
       </div>
     </el-card>
   </div>
<!--  <div>-->
<!--    <table>-->
<!--      <colgroup>-->
<!--        <col span="2">-->
<!--        <col class="Highlight-col">-->
<!--      </colgroup>-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th style="width: 216px;"><strong>特性</strong></th>-->
<!--        <th style="width: 216px;">Hosted</th>-->
<!--        <th style="width: 216px;">Non-Hosted</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr>-->
<!--        <td><strong>方案简介</strong></td>-->
<!--        <td>在您的网站上渲染PingPongCheckout集成式结账页面，持卡人在结账页面上完成付款</td>-->
<!--        <td>使用Direct API的方式集成，完成付款所需的信息由您自行收集</td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td><strong>UI 自定义</strong></td>-->
<!--        <td>使用PingPongCheckout集成式结账页面，少量UI可自定义</td>-->
<!--        <td>定制完整外观，通过商户的UI接受付款</td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td><strong>移动端支持</strong></td>-->
<!--        <td>响应式WEB</td>-->
<!--        <td>需要商户自定义页面支持</td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td><strong>网站PCI合规要求</strong></td>-->
<!--        <td>无</td>-->
<!--        <td>国际信用卡支付，需要持有PCI证书，本地支付不需要</td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--  </div>-->
</div>
</template>

<script>
export  default {
  data() {
    return {
      cards:[
        {
          title:"Hosted",
          img:"/sdk/example.png",
          descList:[
              "轻松方便的在您的网站上渲染集成式的收银台。",
              "响应式WEB页面，少量UI可自定义"
          ]
        },
        {
          title:"Non-hosted",
          img:"/v4/checkout/non-hosted-banner.png",
          descList:[
              "Direct API的方式集成，通过您的网站的UI接受付款，自由定制完整外观。",
              "国际信用卡支付，需要持有PCI证书，本地支付不需要"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>