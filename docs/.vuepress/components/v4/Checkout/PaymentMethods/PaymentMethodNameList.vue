<template>
  <el-table
      :data="tableData"
      style="width: 100%;"
      row-key="id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
        prop="ICON"
        label="ICON"
        width="300">
      <template slot-scope="scope">
        <div style="width: 100px;">
          <img :src="scope.row.icon" style="height: 50px" alt="">
        </div>
      </template>
    </el-table-column>
    <el-table-column
        prop="paymentMethod"
        label="paymentMethod"
        width="160"
    >
      <template slot-scope="scope">
        <div v-html="scope.row.paymentMethod"></div>
      </template>
    </el-table-column>

<!--    <el-table-column-->
<!--        prop="paymentCategory"-->
<!--        label="paymentCategory"-->
<!--    >-->
<!--    </el-table-column>-->
  </el-table>
</template>


<script>
import requestTableData from "../data/paymentMethods";


export default {
  name:"PaymentMethodNameList",
  data() {
    return {
      tableData: [],
      http:null
    }
  },
  mounted() {
    this.initTableData();
  },
  methods: {
    initTableData() {
      for (let dataKey in requestTableData.data) {
        requestTableData.data[dataKey]['icon'] = "/paymentMethods/" + requestTableData.data[dataKey]['icon'];
      }
      this.tableData.push(...requestTableData.data)
    }
  },
}
</script>

<style scoped>

.el-table /deep/ {
  color: var(--textColor);
  font-size: 16px !important;
  border: none !important;
}

::v-deep thead {
  color: var(--textColor) !important;
  font-weight: bold;
}

.el-table__expanded-cell  /deep/{
  background: none !important;
}


::v-deep .el-table th{
  background: none !important;
}


::v-deep .el-table__cell{
  border:none !important;
  border-bottom: 1px dashed rgb(11,91,178) !important;
}



::v-deep .el-table_1_column_2.is-leaf.el-table__cell{
   color: white !important;
   background: rgb(11,91,178);
   border-radius: 5px;
   margin-left: 10px;
}

::v-deep .item {
  margin-top: 10px;
  margin-right: 40px;
}

</style>

