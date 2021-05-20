import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// createApp(App)
//   .use(router)
//   .mount("#app");

let app = createApp(App);
app.use(router).mount("#app");
