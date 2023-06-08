import { createRouter, createWebHistory } from "vue-router";
import ColumnDetail from "./views/ColumnDetail.vue";
import Login from "./views/Login.vue";
import CreatePost from "./views/CreatePost.vue";
import Home from "./views/Home.vue";
import store from "./store";
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/column/:id",
      name: "column",
      component: ColumnDetail
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      // meta: { redirectAlreadyLogin: true }
    },
    {
      path: "/create",
      name: "create",
      component: CreatePost,
      meta: { requiredLogin: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const { user } = store.state;
  const { requiredLogin, redirectAlreadyLogin } = to.meta;
  if (requiredLogin && !user.isLogin) {
    next("login");
  } else if (redirectAlreadyLogin && user.isLogin) {
    next("/");
  } else {
    next();
  }
});

export default router;
