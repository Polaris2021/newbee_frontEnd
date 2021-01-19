import {getVerifyCode,toTeacherRegister,toLogin,register} from './common'
export default{
  name: "studentRegister",
  data(){
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
    return{
      ruleForm:{
        uname:'',
        pwd:'',
        pwd2:'',
        vCode:'',
        phone:'',
      },
      rules:{
        uname: [
          { type: 'string',required: true, message: '不能为空', trigger: 'blur'},
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        pwd:[
          {validator:validatePass,trigger:'blur'},
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        pwd2:[
          {validator:validatePass2,trigger:'blur'},
        ],
        vCode:[
          {type:'string',required:true,message:'不能为空',trigger:'blur'},
        ],
        phone:[
          {validator:validatePhone},
          {required:true,message:'请正确输入手机号',trigger:'blur'},
        ]
      }
    };
  },
  methods:{
    getVerifyCode,toTeacherRegister,toLogin,register
  }
}
