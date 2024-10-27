import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/web";

// importing partials and auth components
// import login from './components/auth/Login.vue';
// import register from './components/auth/Register.vue';
import headerFile from "./partials/header.vue";
import footerFile from "./partials/footer.vue";
import ApiDev from "./components/products/ApiDev.vue";
import AutomationTool from "./components/products/AutomationTool.vue";
import CloudSolution from "./components/products/CloudSolution.vue";
import MobileAppDev from "./components/products/MobileAppDev.vue";
import WebAppDev from "./components/products/WebAppDev.vue";
import WebDesignDev from "./components/products/WebDesignDev.vue";

// importing components

const app = createApp(App);
// app.component('login',login)
// .component('register',register)

app
  .component("headerFile", headerFile)
  .component("footerFile", footerFile)
  .component("api-dev", ApiDev)
  .component("automation-tool", AutomationTool)
  .component("cloud-solution", CloudSolution)
  .component("mobile-app-dev", MobileAppDev)
  .component("web-app-dev", WebAppDev)
  .component("web-design-dev", WebDesignDev);
app.use(router);
app.mount("#app");
