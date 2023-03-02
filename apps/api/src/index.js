import http from "http"
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
