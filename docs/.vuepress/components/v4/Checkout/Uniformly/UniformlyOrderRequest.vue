<template>
  <el-table
      :data="tableData"
      style="width: 100%;"
      row-key="id"
      :row-class-name="tableRowClassName"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
        prop="value"
        label="attribute"
        sortable
        width="240">
    </el-table-column>
    <el-table-column
        prop="type"
        label="type"
        sortable
        width="120">
    </el-table-column>
    <el-table-column
        prop="required"
        label="required"
        sortable
        width="120">
    </el-table-column>
    <el-table-column
        prop="desc"
        sortable
        label="description">
      <template slot-scope="scope">
        <div v-html="scope.row.desc"></div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

import UniformlyOrderRequest from "./data/UniformlyOrderRequest";


export default {
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
    tableRowClassName({row, rowIndex}) {
      if (!row.hasOwnProperty("id")) {
        return 'warning-row';
      }
      if (row.id % 2 === 0) {
        return 'warning-row';
      }
      return 'success-row';
    },
    initTableData() {
      this.tableData.push(...UniformlyOrderRequest.data)
    }
  },
}
</script>

<style scoped>

</style>