<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="login-wrap">
    <el-form :model="ruleForm" label-width="100px" class="demo-ruleForm login-container">
      <h3 style="text-align: center;">教师注册</h3>
      <el-form-item label="用户名">
        <el-input v-model="ruleForm.uname"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input type="password" v-model="ruleForm.pwd"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-row gutter="25">
          <el-col :span="11">
            <el-input type="verifyCode" v-model="ruleForm.vCode"></el-input>
          </el-col>
          <el-col :span="5">
            <el-button type="primary" plain>获取验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="ruleForm.pwd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="ruleForm.pwd2"></el-input>
      </el-form-item>
      <el-form-item label="教师资格证">
        <el-upload
          class="avatar-uploader"
          accept="image/jpeg,image/png"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-button type="primary" style="width:100% ;">提交</el-button>
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

<script src="../js/teacherRegister.js"></script>
<style scoped src="../assets/css/login_register.css"></style>

