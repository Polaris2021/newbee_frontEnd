<template>
  <div class="login-wrap">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm login-container">
      <h3 style="text-align: center;">学生注册</h3>
      <el-form-item label="用户名" prop="uname">
        <el-input v-model="ruleForm.uname"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="vCode">
        <el-row gutter="25">
          <el-col :span="11">
            <el-input v-model="ruleForm.vCode"></el-input>
          </el-col>
          <el-col :span="5">
            <el-button type="primary" plain @click="getVerifyCode">获取验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="pwd2">
        <el-input type="password" v-model="ruleForm.pwd2" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-button type="primary" style="width:100% ;" @click="register('ruleForm')">提交</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple-dark">
              <el-link type="success" @click="toTeacherRegister">教师注册</el-link>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-dark">
              <el-link type="success" @click="toLogin">用户登录</el-link>
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

<script src="../js/studentRegister.js" ></script>
<style scoped src="../assets/css/login_register.css"></style>

