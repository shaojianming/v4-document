<template>
  <div style="display: flex;justify-content: space-between">
    <div class="threeDS-box-card-item">
      <a href="/pages/da865b/" >
        <el-card class="threeDS-box-card">
          <div class="threeDS-box-title">
            <a href="/pages/da865b/" >Force 3ds validation</a>
          </div>
          <div class="threeDS-box-text-container">
            <p>To enforce 3DS verification and utilize PingPongCheckout's 3DS solution <code>executeThreeD = Y</code></p>
          </div>
        </el-card>
      </a>
    </div>
    <div class="threeDS-box-card-item">
      <a href="/pages/78c43d/">
        <el-card class="threeDS-box-card">
          <div class="threeDS-box-title">
            <a href="/pages/78c43d/" >Risk control decisions made by PingPongCheckout</a>
          </div>
          <div class="threeDS-box-text-container">
            <p>The decision of whether to perform 3DS verification is determined by PingPongCheckout's risk assessment and decision-making process,<code>executeThreeD = depends</code></p>
          </div>
        </el-card>
      </a>
    </div>
    <div class="threeDS-box-card-item">
      <a href="/pages/5f4c3a/">
        <el-card class="threeDS-box-card">
          <div class="threeDS-box-title">
            <a href="/pages/5f4c3a/" >Merchant submits 3DS results</a>
          </div>
          <div class="threeDS-box-text-container">
            <p> 3DS results can be directly passed in through parameters，<code>executeThreeD = external</code>,This option is not applicable to the cash register</p>
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