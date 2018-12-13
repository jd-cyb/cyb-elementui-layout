import dashboard from "../pages/dashboard.vue";
import page404 from "../pages/404.vue";
import login from "../pages/login.vue";
import app from "../App.vue";

// Routes
const routes = [{
  path: '/login',
  component: login
}, {
  path: '',
  component: app,
  children: [{
    path: '/index',
    component: dashboard
  }, {
    path: '*',
    component: page404
  }]
}]
export default routes
