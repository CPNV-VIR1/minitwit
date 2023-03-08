import { findAll } from "../controllers/postController.js"

const setupRoutes = (router) => {
  router.add("GET", "/posts", findAll)
}

export default setupRoutes
