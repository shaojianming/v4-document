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

<style>

.el-table {
  color: var(--textColor);
  font-size: 16px;
  border: 1px solid var(--borderColor);

}


.el-table, .el-table__expanded-cell {
  background: none !important;
}

.el-table__body, .el-table__footer, .el-table__header {
  margin: 0;
  background: none !important;
}

.el-table th.el-table__cell {
  background: none !important;
}

.el-table tr {
  background: none !important;
}

.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
  border-bottom: none !important;
  border-left: none !important;
}

.el-table__body, .el-table__footer, .el-table__header {
  border-collapse: collapse !important;
}

tr:nth-child(2n){
  background:  rgba(150, 150, 150, 0.1) !important;
}

tr:hover>td {
  background:#4e72b8 !important;
  color: white !important;
}

</style>

<script>
import requestTableData from "./data/AlternativePublicRequestParamsTable";

export default {
  name:"AlternativePublicRequestParamsTable",
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
      this.tableData.push(...requestTableData.data)
    }
  },
}
</script>

