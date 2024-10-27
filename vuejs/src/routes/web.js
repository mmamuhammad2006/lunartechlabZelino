import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";

const loadPage = (page) => {
  return () => import(`../pages/${page}.vue`);
};
// Define custom routes

const customRoutes = [
  {
    path: "/",
    name: "home",
    component: loadPage("Home"),
    meta: { layout: "App" },
  },
  {
    path: "/about-us",
    name: "aboutUs",
    component: loadPage("AboutUs"),
    meta: { layout: "App" },
  },
  {
    path: "/products/:product",
    name: "products",
    component: loadPage("Products"),
    meta: { layout: "App" },
  },
  {
    path: "/product-detail/:product",
    name: "productDetail",
    component: loadPage("ProductDetail"),
    meta: { layout: "App" },
  },
  {
    path: "/contact-us",
    name: "contactUs",
    component: loadPage("ContactUs"),
    meta: { layout: "App" },
  },
];

// const routes = [...customRoutes,...setupLayouts(generatedRoutes)];
const routes = setupLayouts(customRoutes);

const router = createRouter({
  history: createWebHistory(),
  // routes,
  routes: routes,
});

export default router;
