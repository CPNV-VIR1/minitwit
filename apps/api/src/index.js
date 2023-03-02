import Router from "./routes/router.js"
import setupRoutes from "./routes/routes.js"
const port = process.env.PORT || 3000
const router = new Router(port, "/api/v69")
setupRoutes(router)
router.run()
