<template>
 <div id="container">
   <el-card class="box-card" v-for="(item, key, index) in testData">
     <div slot="header" class="clearfix">
       <span>{{item.name}}</span>
     </div>
     <div>
       <table v-for="(store, storeKey) in item.stores">
           <tr v-for="(storeItem,storeKey) in store">
             <th>{{storeKey}}</th>
             <td>{{store[storeKey]}}</td>
           </tr>
       </table>
       <br/>
       <table v-for="(card) in item.cards">
         <tr v-for="property in card.properties">
            <th>{{property.key}}</th>
            <td>{{property.value}}</td>
         </tr>
       </table>
     </div>
   </el-card>
 </div>
</template>

<script>
export default {
  name: "sandboxTest",
  data(){
    return {
      testData:[
        {
          name:"拉美地区",
          stores:[
            {
              accId:"2018092714313010016147",
              salt:"90B348C7F5BB1C52B5FBFA0A",
            }
          ],
          cards:[
            {
              properties:[
                {
                  key:"卡号",
                  value:"4000483222224503"
                },
                {
                  key:"卡品牌",
                  value:"VISA"
                },
                {
                  key:"过期时间",
                  value:"12/25"
                },
                {
                  key:"cvv",
                  value:"666"
                },
                {
                  key:"测试场景",
                  value:"阿根廷-交易成功"
                },
                {
                  key:"阿根廷证件号",
                  value:"41073034038"
                },
              ]
            },
            {
              properties:[
                {
                  key:"卡号",
                  value:"4004434443454516"
                },
                {
                  key:"卡品牌",
                  value:"VISA"
                },
                {
                  key:"过期时间",
                  value:"12/25"
                },
                {
                  key:"cvv",
                  value:"666"
                },
                {
                  key:"测试场景",
                  value:"墨西哥-交易成功"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>