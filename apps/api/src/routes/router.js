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
        this.#routes.forEach((route) => {
          if (
            req.url.toLowerCase() === `${this.#prefix}${route.url.toLowerCase()}` &&
            req.method.toLowerCase() === route.method.toLowerCase()
          ) {
            route.callback(req, res)
          }
        })
      })
      .listen(this.#port, () => console.log(`Server is running on port ${this.#port}`))
  }
}
