<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    active-text-color="#ffd04b">
    <el-menu-item index="1"><router-link to="/user/list">用户管理</router-link></el-menu-item>
    <el-menu-item index="2">处理中心</el-menu-item>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
  </el-menu>

</template>

<script>
// import someComponent from './someComponent'
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>

</style>
