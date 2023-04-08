import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import "./assets/main.css";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// Access the $router object
createApp(App).config.globalProperties.$router = router;

createApp(App).use(vuetify).use(router).mount("#app");
