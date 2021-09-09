import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import QuestionList from '../views/questions/QuestionList.vue';
import GroupList from '../views/groups/GroupList.vue';
import Profile from '../views/users/Profile.vue';
import Settings from '../views/users/Settings.vue';
import QuestionDetail from '../views/questions/QuestionDetail.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: QuestionList },
    { path: '/profile', component: Profile },
    { path: '/settings', component: Settings },
    { path: '/groups', component: GroupList },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/q/:id', component: QuestionDetail, name: 'questionDetail' },
  ],
});
