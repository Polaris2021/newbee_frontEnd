
export default {
  data() {
    return {
      ruleForm: {
        uname: '',
        pwd: ''
      }
    };
  },
  methods: {
    toStudentRegister() {
      this.$router.push({
        path: '/studentRegister'
      });
    },
    toTeacherRegister() {
      this.$router.push({
        path: '/teacherRegister'
      });
    },
    doLogin() {
      let url = this.axios.urls.SYSTEM_USER_LOGIN;
      console.log(url)
      this.axios.get(url, {
        params: this.ruleForm
      }).then((response) => {
        console.log(response);
        if (response.data.code === 1) {
          this.$message({
            showClose:true,
            message:response.data.msg,
            type: 'success'
          });
        } else {
          this.$message({
            showClose:true,
            message:response.data.msg,
            type: 'error'
          });
        }

      }).catch((response) => {
        console.log(response);
      });
    }
  }
}
