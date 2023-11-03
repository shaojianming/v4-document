<template>
  <el-table
      :data="tableData"
      style="width: 100%;"
      row-key="id"
      :row-class-name="tableRowClassName"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
        prop="value"
        label="属性"
        sortable
        width="280">
    </el-table-column>
    <el-table-column
        prop="type"
        label="类型"
        sortable
        width="120">
    </el-table-column>
    <el-table-column
        prop="required"
        label="必填"
        sortable
        width="120">
    </el-table-column>
    <el-table-column
        prop="desc"
        sortable
        label="描述">
      <template slot-scope="scope">
        <div v-html="scope.row.desc"></div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

import defenseReasonsResponse from "./data/defenseReasonsResponse"

export default {
  name: "defenseReasonsResponseTable.vue",
  data() {
    return {
      tableData: []
    }
  },
  created() {
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
      {
        return 'success-row';
      }
    },
    initTableData() {
      this.tableData.push(...defenseReasonsResponse.data)
    }
  }
}


</script>

<style scoped>

.el-table /deep/ {
  color: var(--textColor);
  font-size: 16px !important;
  border: 1px solid var(--borderColor);
}

::v-deep thead {
  color: var(--textColor) !important;
  font-weight: bold;
}

::v-deep .el-table, ::v-deep .el-table__expanded-cell {
  background: none !important;
}

::v-deep .el-table__body, ::v-deep .el-table__footer, ::v-deep .el-table__header {
  margin: 0;
  background: none !important;
}

::v-deep .el-table th.el-table__cell {
  background: none !important;
}

::v-deep .el-table tr {
  background: none !important;
}

.el-table td /v-deep/ .el-table__cell /v-deep/, .el-table th /v-deep/ .el-table__cell /v-deep/ .is-leaf /v-deep/ {
  border-bottom: none !important;
  border-left: none !important;
}

::v-deep .el-table__cell {
  border-left: none !important;
}


::v-deep tr:nth-child(2n) {
  background: rgba(150, 150, 150, 0.1) !important;
}

::v-deep tr:hover > td {
  background: #4e72b8 !important;
  color: white !important;
}
</style>