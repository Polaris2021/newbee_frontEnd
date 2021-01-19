import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import StudentRegister from "@/views/StudentRegister";
import TeacherRegister from "@/views/TeacherRegister";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/studentRegister',
      name: 'StudentRegister',
      component: StudentRegister
    },
    {
      path: '/teacherRegister',
      name: 'TeacherRegister',
      component: TeacherRegister
    }
  ]
})
