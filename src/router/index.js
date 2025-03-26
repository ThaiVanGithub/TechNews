import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AppHeader from '@/components/AppHeader.vue'
import PostDetail from '../views/PostDetail.vue'
import NotFound from '../views/NotFound.vue'
import Economy from '@/components/Economy.vue'
import Technology from '@/components/Technology.vue'
const routes = [
  {
    path: '/danh-muc/cong-nghe',
    name: 'Technology',
    component: Technology,
    meta: { title: 'Công Nghệ' }
  },
  {
    path: '/danh-muc/kinh-te',
    name: 'Economy',
    component: Economy,
    meta: { title: 'Kinh Tế' }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Trang chủ - Báo điện tử'
    }
  },
  {
    path: '/bai-viet/:id',
    name: 'post',
    component: PostDetail,
    meta: {
      title: 'Chi tiết bài viết'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: {
      title: 'Trang không tồn tại'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Báo điện tử'
})

export default router