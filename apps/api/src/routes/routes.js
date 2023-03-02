import { home } from "../controllers/homeController.js"

const setupRoutes = (router) => {
  router.add("GET", "/", home)
}

export default setupRoutes
