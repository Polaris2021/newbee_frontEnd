
export {
  getVerifyCode,toStudentRegister,toTeacherRegister,toLogin,register
}

//手机号注册获取验证码
function getVerifyCode(phone) {
  this.$refs.ruleForm.validateField('phone', (errorMsg) => {
      //如果校验通过，errorMsg为空串；否则为错误信息
      if (errorMsg) {
        this.axios.post('/', {
          phone: phone
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log(errorMsg)
      }
    }
  )
}
function register(formName){
  this.$refs[formName].validate((valid) => {
    //校验成功
    if (valid) {
      let url = this.axios.urls.SYSTEM_USER_STUREG;
      this.axios.post(url, this.ruleForm)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          alert(error)
          console.log(error);
        });
      //2、提交表单
    } else {
      console.log('提交失败!!');
      return false;
    }
  });
}
function toStudentRegister() {
  this.$router.push({
    path: '/studentRegister'
  });
}
function toTeacherRegister() {
  this.$router.push({
    path: '/teacherRegister'
  });
}
function toLogin(){
  this.$router.push({
    path:'/login'
  });
}

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== this.ruleForm.pwd) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
};
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    if (this.ruleForm.pwd !== '') {
      this.$refs.ruleForm.validateField('pwd2');
    }
    callback();
  }
};
const validatePhone=(rule, value,callback)=> {
  const reg =/^[1][3-9][0-9]{9}$/;
  if(value===''||value===undefined||value===null){
    callback();
  }else {
    if ((!reg.test(value)) && value !== '') {
      callback(new Error('请输入正确的手机号'));
    } else {
      callback();
    }
  }
};
