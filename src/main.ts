import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

declare let document: any
const app = createApp(App as any)

router.afterEach(to => {
  const pageTitle = to.meta.title
  if (pageTitle) {
    document.title = pageTitle
  }
})

app.use(router).mount("#app")

