<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="Credit Card" name="first">
        <CreditCardRequestTable></CreditCardRequestTable>
      </el-tab-pane>
      <el-tab-pane label="APM" name="second">
        <AlternativeRequestTable></AlternativeRequestTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import CreditCardRequestTable from "./Card/CreditCardRequestTable";

export default {
  components: {
    CreditCardRequestTable: () => import('./Card/CreditCardRequestTable'),
    AlternativeRequestTable: () => import('./Alternative/AlternativeRequestTable'),
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