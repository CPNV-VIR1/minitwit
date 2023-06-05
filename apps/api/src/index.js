import dotenv from "dotenv"
import Router from "./routes/router.js"
import setupRoutes from "./routes/routes.js"
import { sequelize } from "./config/database.js"

dotenv.config()
const port = process.env.PORT
const router = new Router(port, "/api/v1")
setupRoutes(router)
sequelize.sync()

router.run()
