<template>
  <div class="code-block-drawer">
    <el-drawer
        :visible.sync="drawerVisible"
        :title="this.title"
        direction="rtl"
        :modal="modal"
        size="25%">
      <slot>
        {{this.$slots}}
      </slot>
    </el-drawer>
    <el-button type="primary" class="show-code-button" icon="el-icon-reading" circle @click="openDrawer"></el-button>
  </div>
</template>

<script>

export default {
  name: "CodeBlockDrawer",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      modal:false,
      drawerVisible: true,
    };
  },
  methods: {
    openDrawer() {
      this.drawerVisible = true;
    },
    beforeClose(){

    },
    closeDrawer() {
      this.drawerVisible = false;
    },
  },
};
</script>

<style scoped>
.show-code-button {
  position: fixed;
  right: 30px;
  bottom: 230px;
}

.code-block-drawer {
  position: relative;
}

::v-deep .el-drawer__header {
  background: var(--codeBg) !important;
}

::v-deep .el-drawer__body{
  background: var(--codeBg) !important;
}

::v-deep .el-drawer.rtl{
  background: var(--codeBg) !important;
}

</style>
