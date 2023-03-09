import { Post } from "../models/post.js"

export const findAll = async (req, res) => {
  // set the status code and content-type
  const posts = Post.findAll()
  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(JSON.stringify(posts))
}

export const findOne = async (req, res, id) => {
  const post = Post.findByPk(id)
  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(JSON.stringify(post))
}
