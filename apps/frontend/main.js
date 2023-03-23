import "./resources/css/style.css"

const selectLanguage = document.querySelector(".header__language")
let selectedLanguage = selectLanguage.value

selectLanguage.addEventListener("change", (e) => {
  selectedLanguage = e.target.value
  changeLanguage()
})

const changeLanguage = async () => {
  const lang = await import(`./locale/i18n/${selectedLanguage}`)
  document.querySelector(".btn__send").value = lang.btnSend
}
