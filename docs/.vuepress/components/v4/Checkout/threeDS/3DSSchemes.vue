<template>
  <div style="display: flex;justify-content: space-between">
    <div class="threeDS-box-card-item">
      <a href="/pages/12fbcd/" >
        <el-card class="threeDS-box-card">
          <div class="threeDS-box-title">
            <a href="/pages/12fbcd/" >RiskJs Component</a>
          </div>
          <div class="threeDS-box-text-container">
            <p>By integrating PingPong risk management and 3DS, you can easily achieve PingPong risk management and 3DS authentication functionalities using this component.</p>
          </div>
        </el-card>
      </a>
    </div>
    <div class="threeDS-box-card-item">
      <a href="/pages/d96acf/">
        <el-card class="threeDS-box-card">
          <div class="threeDS-box-title"> <a href="/pages/d96acf/" >RiskDefense Component</a></div>
          <div class="threeDS-box-text-container">
            <p>We have optimized the integration solution for the Risk component. In this integration, we provide a redirect URL where shoppers can complete the identity verification.</p>
          </div>
        </el-card>
      </a>
    </div>
    <div class="threeDS-box-card-item">
      <a href="/pages/c25fd9/">
        <el-card class="threeDS-box-card">
          <div class="threeDS-box-title"> <a href="/pages/c25fd9/" >API Only</a></div>
          <div class="threeDS-box-text-container">
            <p>Without using a component, integrating 3DS solely through APIs requires merchants to have their own risk management capabilities.</p>
          </div>
        </el-card>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Integration"
}
</script>

<style scoped>

.threeDS-box-card-item {
  width: 29%;
  min-height: 200px;
  margin-bottom: 30px;
  box-sizing: border-box;
}

.threeDS-box-card{
  width: 100%;
  height: 100%;
}

.threeDS-box-title{
  text-align: center;
}

.threeDS-box-title > a {
  display: inline-block;
}

.threeDS-box-text-container{
  font-size: 14px;
}

.threeDS-box-text-container > p{
  margin: 16px 0 16px 0;
  overflow-wrap: break-word;
  text-align: center;
}


</style>