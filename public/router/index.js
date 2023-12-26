import VueHome from "../VueHome.js"
import manage from "../manage.js"
import insert from "../insert.js"
import VueSign from "../VueSign.js"
import home from "../home.js"
import sign from "../sign.js"

const routes = {
  '/': {layout: VueHome, component: home},
  '/manage': {layout: VueHome, component: manage},
  '/insert': {layout: VueHome, component: insert},
  '/sign': {layout: VueSign, component: sign}
}
let current = null

function handleChange() {
  const path = window.location.hash.slice(1)
  const route = routes[path] || routes['/']
  const {layout: Layout, component: Component} = route
  if (current)
    current.unmount()
  current = Vue.createApp({
    template: `
    <Layout />
    <main class="container card shadow my-5 py-3">
      <Component />
    </main>
    `,
    components: {
      Layout,
      Component
    }
  })
  current.mount('#app')
}
window.addEventListener("hashchange", handleChange)
window.addEventListener("load", handleChange)