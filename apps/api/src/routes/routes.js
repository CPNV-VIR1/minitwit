import { findAll, findOne, create } from "../controllers/postController.js"

const setupRoutes = (router) => {
  router.add("GET", "/posts", findAll)
  router.add("GET", "/posts/:id", findOne)
  router.add("POST", "/posts", create)
}

export default setupRoutes
