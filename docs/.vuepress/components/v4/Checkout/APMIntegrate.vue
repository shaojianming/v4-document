<template>
  <a href="">
    <div style="margin-top: 2rem;display: flex;justify-content: space-between">
      <el-card class="box-card" style="width: 31%;height: 100%;padding: 0">
        <div style="padding: 24px">
          <div style="display: flex;justify-content: center;">
            <div style="width: 40px;height: 40px"><img :src="$withBase('/v4/paymentMethods/access/web.svg')" style="width: 100%;height: 100%" alt=""></div>
          </div>
          <h6 style="text-align: center;font-size: 20px;font-weight: 600;margin: 6px 0 !important;">Web</h6>
        </div>
        <div class="card_body" style="font-weight: 600;font-size: 16px;line-height: 28px;margin: 16px 0 16px 0;overflow-wrap: break-word;text-align: center;">
          <p>Use our pre-built UI solutions to add Alipay to your website.</p>
        </div>
      </el-card>
    </div>
  </a>
</template>

<script>
export default {
  name: "APMIntegrate"
}
</script>

<style scoped>

</style>