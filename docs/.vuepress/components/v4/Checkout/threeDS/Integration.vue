<template>
  <div style="display: flex;justify-content: space-between">
    <div class="threeDS-box-card-item">
      <a href="/pages/12fbcd/" >
        <el-card class="threeDS-box-card">
          <div class="threeDS-box-title">
            <el-badge value="recommend" class="item">
              <a href="/pages/12fbcd/" >RiskJs Components</a>
            </el-badge>
          </div>
          <div class="threeDS-box-text-container">
            <p>By integrating the PingPong risk control and 3DS authentication, you can effortlessly incorporate both functionalities using this component alone.</p>
          </div>
        </el-card>
      </a>
    </div>
    <div class="threeDS-box-card-item">
      <a href="/pages/d96acf/">
        <el-card class="threeDS-box-card">
          <div class="threeDS-box-title"> <a href="/pages/d96acf/" >RiskDefense Components</a></div>
          <div class="threeDS-box-text-container">
            <p>We have enhanced the integration solution for the RiskJs component. In this integration, we offer a redirect URL where shoppers can finalize the authentication process.</p>
          </div>
        </el-card>
      </a>
    </div>
    <div class="threeDS-box-card-item">
      <a href="/pages/c25fd9/">
        <el-card class="threeDS-box-card">
          <div class="threeDS-box-title"> <a href="/pages/c25fd9/" >API Only</a></div>
          <div class="threeDS-box-text-container">
            <p> If not using a component, integrating 3DS solely through APIs necessitates that merchants possess their own risk control capabilities.</p>
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