<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="Credit Card" name="first">
        <CCResponse></CCResponse>
      </el-tab-pane>
      <el-tab-pane label="APM" name="second">
        <APMResponseTable></APMResponseTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>


export default {
  components: {
    CCResponse: () => import('./Card/CCResponse'),
    APMResponseTable: () => import('./Alternative/APMResponseTable'),
  },
  data() {
    return {
      activeName: "first"
    }
  }
}
</script>

<style scoped>

</style>