<template>
  <div class="login-wrap">
    <el-form :model="ruleForm" label-width="100px" class="demo-ruleForm login-container">
      <h3 style="text-align: center;">用户登录</h3>
      <el-form-item label="用户名">
        <el-input v-model="ruleForm.uname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="ruleForm.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-button type="primary" style="width:100% ;" @click="doLogin">提交</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple-dark">
              <el-link type="success" @click="toStudentRegister">学生注册</el-link>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-dark">
              <el-link type="success" @click="toTeacherRegister">教师注册</el-link>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-dark">
              <el-link type="success">忘记密码</el-link>
            </div>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="../js/login.js">
</script>
//scoped="scoped" 表示样式仅仅规范当前VUE
<style scoped="scoped" src="../assets/css/login_register.css">
</style>


