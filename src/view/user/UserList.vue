<template>
  <div>
    <br>
    <el-button type="success" size="medium" round @click="handleCreate">新增用户</el-button>
    <el-table
      :data="tableData.content"
      style="width: 100%">
      <el-table-column
        label="账号"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column
        label="密码"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.password }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.totalElements">
    </el-pagination>
    <el-dialog title="更新用户" :visible.sync="dialogFormVisible">
      <el-form :model="user">
        <el-form-item label="账号">
          <el-input v-model="user.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdateUser">确 定</el-button>
      </div>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>

<script>
// import someComponent from './someComponent'
import Header from '../../components/Header'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: '',
  components: {Header},
  data () {
    return {
      page: 1,
      size: 10,
      tableData: [],
      user: {},
      dialogFormVisible: false
    }
  },
  computed: {
    ...mapGetters('user', ['getUserListPage', 'getUser'])
  },
  async mounted () {
    await this.getUserList({page: this.page, size: this.size})
    this.tableData = this.getUserListPage
  },
  methods: {
    ...mapActions('user', ['getUserList', 'deleteUser', 'getUserById', 'updateUser']),
    async handleEdit (index, row) {
      this.dialogFormVisible = true
      await this.getUserById(row.id)
      this.user = this.getUser
    },
    async handleDelete (index, row) {
      await this.deleteUser(row.id)
      await this.getUserList({page: this.page, size: this.size})
      this.tableData = this.getUserListPage
    },
    handleCreate () {
      this.$router.push('add')
    },
    async handleCurrentChange (currentPage) {
      this.page = currentPage
      await this.getUserList({page: this.page, size: this.size})
      this.tableData = this.getUserListPage
    },
    async handleSizeChange (size) {
      this.size = size
      await this.getUserList({page: this.page, size: this.size})
      this.tableData = this.getUserListPage
    },
    async handleUpdateUser () {
      await this.updateUser()
      this.dialogFormVisible = false
      await this.getUserList({page: this.page, size: this.size})
      this.tableData = this.getUserListPage
    }
  },
  component: {
    // someComponent
  }
}
</script>
<style scoped>

</style>
