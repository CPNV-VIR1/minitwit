import { jest } from "@jest/globals"
import PostsServices from "../services/posts"
import { displayMessages } from "../services/messages"

describe("displayMessages", () => {
  it("should display messages", async () => {
    const messages = [{ createdAt: "2022-04-05T10:00:00Z", content: "Message 1" }]
    jest.spyOn(PostsServices, "getAll").mockResolvedValue(messages)

    const divContent = document.createElement("div")
    divContent.classList.add("messages__content")
    document.body.appendChild(divContent)

    await displayMessages()

    expect(divContent.innerHTML.trim()).toEqual(
      '<div class="message"><span class="timestamp">05.04 - 12:00</span> - Message 1</div>'
    )
  })
})
