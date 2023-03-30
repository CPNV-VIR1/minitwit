import { dates } from "@cpnv/dates"
import PostsServices from "../services/posts.js"

export const displayMessages = async () => {
  const messages = (await PostsServices.getAll()).reverse()
  const divContent = document.querySelector(".messages__content")
  divContent.innerHTML = ""

  messages.forEach((message) => {
    const divMessage = document.createElement("div")
    divMessage.classList.add("message")
    divMessage.innerHTML = `<span class='timestamp'>${dates(message.createdAt).format("DD.MM - hh:mm")}</span> - ${
      message.content
    }`
    divContent.appendChild(divMessage)
  })
}
