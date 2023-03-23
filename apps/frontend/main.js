import "./resources/css/style.css"
import PostsServices from "./resources/services/posts.js";

const selectLanguage = document.querySelector(".header__language")
let selectedLanguage = selectLanguage.value

selectLanguage.addEventListener("change", (e) => {
  selectedLanguage = e.target.value
  changeLanguage()
})

const changeLanguage = async () => {
  const lang = await import(`./locale/i18n/${selectedLanguage}.json`)
  document.querySelector(".btn__send").value = lang.btnSend
}

const displayMessages = async () => {
  const messages = (await PostsServices.getAll()).reverse()
  const divContent = document.querySelector('.messages__content')
  divContent.innerHTML = ''

  messages.forEach(message => {
    const divMessage = document.createElement('div')
    divMessage.classList.add('message')
    divMessage.innerHTML = `<span class='timestamp'>${message.createdAt}</span> - ${message.content}`
    divContent.appendChild(divMessage)
  })
}

const createMessage = async (message) => {
  await PostsServices.create({content: message})
  messageInput.value = ''
  await displayMessages()
}

await displayMessages()

const btnSend = document.querySelector('.btn__send')
const messageInput = document.querySelector('.message__input')
btnSend.addEventListener('click', async () => {
  await createMessage(messageInput.value)
})
messageInput.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    await createMessage(messageInput.value)
  }
})
