import {getVerifyCode,toStudentRegister,toLogin} from './common'
export default{
  name: "teacherRegister",
  data(){

    return{
      imageUrl:'',
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
    getVerifyCode,toStudentRegister,toLogin,



    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      alert(this.imageUrl)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return (isJPG||isPNG)&&isLt2M;
    }
  }
}
