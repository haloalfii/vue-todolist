import { createApp } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import router from "./router";

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

import dayjs from "dayjs";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;

app.use(VueAxios, axios);
app.use(router);
app.mount("#app");
