<template>

</template>

<script>
export default {
  name: "Hosted",
  mounted () {
    // console.log("meta",this.$page.meta)
    // console.log("$site",this.$site.themeConfig.sidebar['/v4/paymentMethods/zh'][0]['children'])

    const groups = this.$site.themeConfig.sidebar
    console.log("page",this.$page)
    const path = this.$page.path;
    console.log("path",path)
    console.log("customData",this.$page.frontmatter.customData)
    // console.log("groups",groups)
  }
}
</script>

<style scoped>

</style>