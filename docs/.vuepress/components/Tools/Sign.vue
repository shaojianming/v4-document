<template>
<div>
  <el-form :inline="false" :model="inputData"  label-width="120px" label-suffix=":">
    <el-form-item label="accId">
      <el-input v-model="inputData.accId" placeholder="请输入accId"></el-input>
    </el-form-item>
    <el-form-item label="秘钥">
      <el-input v-model="inputData.salt" placeholder="请输入salt"></el-input>
    </el-form-item>
    <el-form-item label="签名范围">
      <component v-if="dynamicComponent"
                 :is="dynamicComponent"
                 v-model="inputData.scope"
                 mode="code"
                 lang="zh"
      ></component>
    </el-form-item>
    <el-form-item label="签名参数">
      <component
          v-if="dynamicComponent"
          :is="dynamicComponent"
          v-model="inputData.jsonData"
          mode="code"
          lang="zh"
          :expandedOnStart="true"
      ></component>
    </el-form-item>
    <el-form-item label="签名">
      <div>{{sign}}</div>
    </el-form-item>
    <el-form-item label="签名串">
      <div>{{signContent}}</div>
    </el-form-item>
  </el-form>
  <div style="display: flex;justify-content: flex-end">
    <el-button type="primary" @click="triggerSign">获取签名</el-button>
  </div>
</div>
</template>

<style>
div.jsoneditor-menu a.jsoneditor-poweredBy {
  font-size: 8pt;
  position: absolute;
  right: 0;
  top: 0;
  display: none;
}

.jsoneditor-vue{
  height: 100%;
}

textarea.jsoneditor-text, .ace-jsoneditor {
  min-height: 200px !important;
}
</style>

<script>
import signUtil from "/utils/signUtil";
import sha256 from "crypto-js/sha256";

export default {
  name: "sign",
  mounted() {
    import('vue-json-editor').then(module => {
      // use code
      this.dynamicComponent = module.default
    })
  },
  data(){
    return {
      dynamicComponent: null,
      signContent: "",
      sign: "",
      inputData:{
        accId:"2018092714313010016291",
        salt:"F78BC96A55548B2319EE68E0",
        jsonData:"",
        scope:["requestId", "accId", "clientId", "merchantTransactionId", "transactionId", "amount", "cardNum", "currency", "signType"],
      }
    }
  },
  methods:{
    triggerSign(){
     if (this.inputData.jsonData===undefined||this.inputData.jsonData===""){
       this.$message.error("请输入签名参数");
       return;
     }

      if (this.inputData.jsonData!==undefined&&this.inputData.jsonData.accId!==""&&this.inputData.jsonData.accId!==undefined){
        this.inputData.accId = this.inputData.jsonData.accId
      }

      this.signContent =  this.getSignContent(this.inputData.jsonData);
      this.sign = this.getSign(this.signContent);

    },
    getSign(signContent){
      let sign = sha256(signContent);
      // sign = base64.stringify(sign);
      sign = sign.toString();
      sign = sign.toUpperCase();
      console.log("sign:", sign)
      return sign;
    },
    getSignContent(requestData){
      let signScope = this.inputData.scope
      let needSignKeyMap = [];
      let needSignMap = [];
      for (let requestDataKey in requestData) {
        if (signScope.includes(requestDataKey)) {
          needSignKeyMap.push(requestDataKey);
        }
      }
      needSignKeyMap = needSignKeyMap.sort();
      needSignKeyMap.forEach((key) => {
        needSignMap[key] = requestData[key];
      })

      console.log("current request data:", requestData)
      console.log("Key value pairs within the signature range：", needSignMap);
      let OSignContent = new URLSearchParams();
      needSignKeyMap.forEach(function (key, idx, array) {
        OSignContent.append(key, needSignMap[key]);
      });
      let signContent = OSignContent.toString()
      signContent = this.inputData.salt + signContent;
      console.log("signContent:", signContent)

      return signContent;
    }
  }
}
</script>

<style scoped>

</style>