import "./resources/css/style.css"
import { displayMessages } from "./services/messages"
import { setupI18n } from "./services/languages"
import PostsServices from "./services/posts"

const selectLanguage = document.querySelector(".header__language")
setupI18n(selectLanguage)

const createMessage = async (message) => {
  await PostsServices.create({ content: message })
  messageInput.value = ""
  await displayMessages()
}

await displayMessages()

const btnSend = document.querySelector(".btn__send")
const messageInput = document.querySelector(".message__input")
btnSend.addEventListener("click", async () => {
  await createMessage(messageInput.value)
})
messageInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    await createMessage(messageInput.value)
  }
})
