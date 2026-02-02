import App from "@/App/App.vue";
import { router } from "@/App/router/router";
import "@/App/style/main.css";
import { createApp } from "vue";

createApp(App).use(router).mount("#app");
