<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="type"
        label="Payment type"
        min-width="90">
    </el-table-column>
    <el-table-column
        prop="paymentFlow"
        label="Payment flow"
        min-width="90">
    </el-table-column>
    <el-table-column
        prop="supportCountries"
        label="Countries"
        min-width="90">
    </el-table-column>
    <el-table-column
        prop="supportCurrencies"
        label="Currencies"
        min-width="90">
    </el-table-column>
    <el-table-column
        prop="recurring"
        label="Recurring"
        min-width="90">
      <template slot="header" slot-scope="scope">
        <a href="#">Recurring</a>
      </template>
      <template slot-scope="scope">
        <div v-html="scope.row.recurring"></div>
      </template>
    </el-table-column>
    <el-table-column
        prop="supportRefunds"
        label="Refunds"
        min-width="90">
      <template slot="header" slot-scope="scope">
        <a href="#">Refunds</a>
      </template>
      <template slot-scope="scope">
        <div v-html="scope.row.supportRefunds"></div>
      </template>
    </el-table-column>
    <el-table-column
        prop="supportHosted"
        label="Hosted"
        min-width="90">
      <template slot="header" slot-scope="scope">
        <a href="#">Hosted</a>
      </template>
      <template slot-scope="scope">
        <div v-html="scope.row.supportHosted"></div>
      </template>
    </el-table-column>
    <el-table-column
        prop="supportNonHosted"
        label="Non-Hosted"
        min-width="90">
      <template slot="header" slot-scope="scope">
        <a href="#">Non-Hosted</a>
      </template>
      <template slot-scope="scope">
        <div v-html="scope.row.supportNonHosted"></div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

import payMethods from "./Uniformly/Alternative/data/payMethods.js";

export default {
  name: "APMFeatures",
  props: [
    'apmName'
  ],
  data() {
    return {
      tableData: []
    }
  },
  created() {
    // console.log(payMethods);
    if (payMethods===undefined||payMethods[this.apmName]===undefined){
      console.error(this.apmName+" is not exist");
      return;
    }
    let currentPayMethodItem = payMethods[this.apmName];
    // console.log("currentPayMethodItem", currentPayMethodItem);
    let needReplace = [
      'recurring',
      'supportRefunds',
      'partialRefunds',
      'chargebacks',
      'supportHosted',
      'supportNonHosted',
    ]

    currentPayMethodItem['paymentFlow'] = "Redirect"
    currentPayMethodItem['recurring'] = "N"
    if (currentPayMethodItem['supportHosted'] === undefined) {
      currentPayMethodItem['supportHosted'] = "N";
    }
    if (currentPayMethodItem['supportNonHosted'] === undefined) {
      currentPayMethodItem['supportNonHosted'] = "N";
    }
    // console.log("recurring", currentPayMethodItem['recurring']);
    // console.log("supportRefunds", currentPayMethodItem['supportRefunds']);
    for (const key in currentPayMethodItem) {
      // console.log('key-value:',key,currentPayMethodItem[key])
      if (!needReplace.includes(key)) {
        // console.log("not includes", key, needReplace.includes(key))
        continue;
      }
      // console.log(key)
      // console.log("----------------includes---------------------");
      if (currentPayMethodItem[key] === 'Y') {
        // console.log(key, '-Y')
        currentPayMethodItem[key] = '<div class="el-result__icon"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="icon-success"><path d="M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M34.5548098,16.4485711 C33.9612228,15.8504763 32.9988282,15.8504763 32.4052412,16.4485711 L32.4052412,16.4485711 L21.413757,27.5805811 L21.413757,27.5805811 L21.4034642,27.590855 C21.0097542,27.9781674 20.3766105,27.9729811 19.9892981,27.5792711 L19.9892981,27.5792711 L15.5947588,23.1121428 C15.0011718,22.514048 14.0387772,22.514048 13.4451902,23.1121428 C12.8516033,23.7102376 12.8516033,24.6799409 13.4451902,25.2780357 L13.4451902,25.2780357 L19.6260786,31.5514289 C20.2196656,32.1495237 21.1820602,32.1495237 21.7756472,31.5514289 L21.7756472,31.5514289 L34.5548098,18.614464 C35.1483967,18.0163692 35.1483967,17.0466659 34.5548098,16.4485711 Z"></path></svg></div>'
      }

      if (currentPayMethodItem[key] === 'N') {
        // console.log(key, '-N')
        currentPayMethodItem[key] = '<div class="el-result__icon"><svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="icon-error"><path d="M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.57818,15.42182 C32.0157534,14.8593933 31.1038797,14.8593933 30.541453,15.42182 L30.541453,15.42182 L24.0006789,21.9625941 L17.458547,15.42182 C16.8961203,14.8593933 15.9842466,14.8593933 15.42182,15.42182 C14.8593933,15.9842466 14.8593933,16.8961203 15.42182,17.458547 L15.42182,17.458547 L21.9639519,23.9993211 L15.42182,30.541453 C14.8593933,31.1038797 14.8593933,32.0157534 15.42182,32.57818 C15.9842466,33.1406067 16.8961203,33.1406067 17.458547,32.57818 L17.458547,32.57818 L24.0006789,26.0360481 L30.541453,32.57818 C31.1038797,33.1406067 32.0157534,33.1406067 32.57818,32.57818 C33.1406067,32.0157534 33.1406067,31.1038797 32.57818,30.541453 L32.57818,30.541453 L26.0374059,23.9993211 L32.57818,17.458547 C33.1406067,16.8961203 33.1406067,15.9842466 32.57818,15.42182 Z"></path></svg></div>'
      }
      // console.log("----------------includes---------------------");
    }
    this.tableData.push(currentPayMethodItem);
    // console.log(this.tableData)
  }
}
</script>

<style scoped>

::v-deep table {
  margin: 0;
}

::v-deep th {
  border: none !important;
  border-bottom: 1px solid #11a8cd !important;
  color: #909399;
  font-weight: 500;
  padding-right: 1rem;
}

::v-deep td {
  border: none !important;
  color: #909399;
  font-weight: 500;
  padding: 1rem 1rem 0 0 !important;
}

::v-deep .cell {
  text-align: center;
}

::v-deep tr:hover > td {
  color: #fff !important;
}

::v-deep .icon-success {
  fill: #67c23a;
}

::v-deep .icon-error {
  fill: #f56c6c;
}

::v-deep .el-result__icon > svg {
  width: 32px;
  height: 32px;
}

</style>