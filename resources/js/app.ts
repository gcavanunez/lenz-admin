// require('./bootstrap');

// import { createApp, h } from 'vue';
// import { createInertiaApp } from '@inertiajs/inertia-vue3';
// import { InertiaProgress } from '@inertiajs/progress';

// const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => require(`./Pages/${name}.vue`),
//     setup({ el, app, props, plugin }) {
//         return createApp({ render: () => h(app, props) })
//             .use(plugin)
//             .mixin({ methods: { route } })
//             .mount(el);
//     },
// });

// InertiaProgress.init({ color: '#4B5563' });

import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";
import "../css/app.css";
import { InertiaProgress } from "@inertiajs/progress";
InertiaProgress.init({ color: "#4B5563" });

import _ from "lodash";
import axios from "axios";

window._ = _;
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

function withVite(pages: Record<string, any>, name: string) {
    for (const path in pages) {
        if (path.endsWith(`${name.replace(".", "/")}.vue`)) {
            return pages[path]();
        }
    }
}

createInertiaApp({
    resolve: (name) => withVite(import.meta.glob("./Pages/**/*.vue"), name),
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .mixin({ methods: { route: window.route } })
            .component("InertiaLink", Link)
            .mount(el);
    },
});
