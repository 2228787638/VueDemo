<template>
    <div>
      <el-card class="box-card">
        创建新用户
        <br><br>
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <br><br>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
        <br><br>
        <el-button type="success" round @click="create">创建</el-button>
      </el-card>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: '',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  component: {
    // someComponent
  },
  methods: {
    ...mapActions('user', ['createUser']),
    async create () {
      await this.createUser({'username': this.username, 'password': this.password})
      this.$router.push('/user/list')
    }
  }
}
</script>
<style scoped>
  .box-card {
    width: 60%;
    margin: 20px auto auto;
  }
</style>
