
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyAwz5fzarj9DeWCVyWffcCO2V4c4p1bXsU",
    },
    installComponents: true,
});

new Vue({
    render: (h) => h(App),
}).$mount("#app");