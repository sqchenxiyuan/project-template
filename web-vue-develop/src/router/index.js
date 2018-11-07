import pageA from "../pages/page-a.vue"
import pageB from "../pages/page-b.vue"

let routerConfig = {
    mode: "history",
    routes: [
        {
            path: "/a",
            component: pageA
        },
        {
            path: "/b",
            component: pageB
        },
    ]
}

export default routerConfig