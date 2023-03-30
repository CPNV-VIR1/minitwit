export const setupI18n = (input) => {
  let selectedLanguage = input.value
  input.addEventListener("change", (e) => {
    selectedLanguage = e.target.value
    changeLanguage(selectedLanguage)
  })
}
const changeLanguage = async (language) => {
  const lang = await import(`../locale/i18n/${language}.json`)
  document.querySelector(".btn__send").value = lang.btnSend
}
