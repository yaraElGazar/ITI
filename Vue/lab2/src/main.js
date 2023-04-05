import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { createRouter, createWebHistory } from "vue-router";
import allUsers from "./pages/allUsers.vue";
import createUser from "./pages/createUsers.vue";
import notFound from "./pages/error.vue";
import updateUser from "./pages/updateUser.vue";
import userDetails from "./pages/userDetails.vue";

const routes = [
  {
    path: "/",
    component: allUsers,
    alias: "/users",
  },
  {
    path: "/users/update/:id",
    component: updateUser,
  },
  {
    path: "/users/:id",
    component: userDetails,
  },
  {
    path: "/create",
    component: createUser,
  },
  {
    path: "/:NotFound(.*)*",
    component: notFound,
    meta: {
      hideNavbar: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
