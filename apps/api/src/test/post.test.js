import { jest } from "@jest/globals"
import { create } from "../controllers/postController"
import { Post } from "../models/post"

const mockCreate = jest.fn().mocked
Post.create = mockCreate

describe("create method", () => {
  test("should create a post with valid content", async () => {
    const content = "This is a valid post."

    Post.create = jest.fn().mockResolvedValue({
      content,
    })

    const req = {
      body: {
        content,
      },
    }

    const res = {
      writeHead: jest.fn(),
      end: jest.fn(),
    }

    await create(req, res)

    expect(Post.create).toHaveBeenCalledWith({
      content,
    })

    expect(res.end).toHaveBeenCalledWith(JSON.stringify({ content }))
  })

  test("should return an error with null content", async () => {
    const req = {
      body: {
        content: null,
      },
    }

    const res = {
      writeHead: jest.fn(),
      end: jest.fn(),
    }

    await create(req, res)

    expect(res.writeHead).toHaveBeenCalledWith(400)

    expect(res.end).toHaveBeenCalledWith(
      JSON.stringify({
        message: "content cannot be null.",
      })
    )
  })
})
