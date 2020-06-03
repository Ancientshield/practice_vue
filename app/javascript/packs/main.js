import Vue from "vue";
import Vuetify from "vuetify";
import user from "./components/User";

Vue.use(Vuetify);

document.addEventListener("turbolinks:load", () => {
  const app = new Vue({
    el: '[data-behavior="vue-app"]',
    vuetify: new Vuetify(),
    components: { user },
  });
});
