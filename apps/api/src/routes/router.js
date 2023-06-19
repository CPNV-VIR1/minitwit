import http from "http"
import { cors } from "../config/cors.js"
export default class Router {
  #routes = []
  #port
  #prefix
  constructor(port, prefix = "") {
    this.#port = port
    this.#prefix = prefix
  }

  add(method, url, callback) {
    this.#routes.push({
      method,
      url,
      callback,
    })
  }

  run() {
    http
      .createServer((req, res) => {
        let matchedRoute = null
        let body = ""
        req.on("data", (chunk) => {
          body += chunk.toString()
        })
        req.on("end", () => {
          try {
            req.body = JSON.parse(body)
          } catch (error) {
            req.body = {}
          }
          this.#routes.forEach((route) => {
            const urlPattern = `^${this.#prefix}${route.url.replace(/:\w+/g, "(\\w+)")}$`
            const urlRegex = new RegExp(urlPattern, "i")
            const matches = urlRegex.exec(req.url)
            if (matches && req.method.toLowerCase() === route.method.toLowerCase()) {
              matchedRoute = route
              matchedRoute.params = matches.slice(1)
            }
          })

          if (matchedRoute) {
            const header = req.headers.origin ?? req.headers.referer ?? `http://${req.headers.host}`;
            const splitedOrigin = header.toLowerCase()?.split('://')
            const origin = splitedOrigin[1]
            const method = splitedOrigin[0]
            const url = cors.includes(origin) ? origin : cors[0]

            res.writeHead(200, {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": `${method}://${url}`,
              "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
              "Access-Control-Max-Age": 2592000, // 30 days
            })
            matchedRoute.callback(req, res, ...matchedRoute.params)
          } else {
            res.writeHead(404, { "Content-Type": "text/plain" })
            res.end("Not Found")
          }
        })
      })
      .listen(this.#port, () => console.log(`Server is running on port ${this.#port}`))
  }
}
