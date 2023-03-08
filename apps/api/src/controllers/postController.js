import { Post } from "../models/post.js"

export const index = async (req, res) => {
  // set the status code and content-type
  const posts = Post.findAll()
  res.writeHead(200, { "Content-Type": "application/json" }) // send data
  res.end(JSON.stringify(posts))
}
