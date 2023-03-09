import http from "http"

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
          matchedRoute.callback(req, res, ...matchedRoute.params)
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" })
          res.end("Not Found")
        }
      })
      .listen(this.#port, () => console.log(`Server is running on port ${this.#port}`))
  }
}
