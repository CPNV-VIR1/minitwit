import { Post } from "../models/post.js"

export const findAll = async (req, res) => {
  // set the status code and content-type
  const posts = await Post.findAll()
  res.end(JSON.stringify(posts))
}

export const findOne = async (req, res, id) => {
  const post = await Post.findByPk(id)
  res.end(JSON.stringify(post))
}

export const create = async (req, res) => {
  if (!req.body.content) {
    res.writeHead(400)
    res.res.end(
      JSON.stringify({
        message: "content cannot be null.",
      })
    )
  } else {
    const post = await Post.create({
      content: req.body.content,
    })
    res.end(JSON.stringify(post))
  }
}
