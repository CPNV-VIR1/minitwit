import { jest } from "@jest/globals"
import PostsServices from "../services/posts"
import { displayMessages } from "../services/messages"
import dates from "moment"

describe("displayMessages", () => {
  it("should display messages", async () => {
    const dateNow = new Date
    const messages = [{ createdAt: dateNow, content: "Message 1" }]
    jest.spyOn(PostsServices, "getAll").mockResolvedValue(messages)

    const divContent = document.createElement("div")
    divContent.classList.add("messages__content")
    document.body.appendChild(divContent)

    await displayMessages()

    expect(divContent.innerHTML.trim()).toEqual(
      '<div class="message"><span class="timestamp">'+dates(dateNow).format("DD.MM - hh:mm")+'</span> - Message 1</div>'
    )
  })
})
