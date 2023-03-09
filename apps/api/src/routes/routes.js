import { findAll, findOne } from "../controllers/postController.js"

const setupRoutes = (router) => {
  router.add("GET", "/posts", findAll)
  router.add("GET", "/posts/:id", findOne)
}

export default setupRoutes
