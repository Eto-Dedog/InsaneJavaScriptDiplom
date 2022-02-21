const openСonsultation = () => {
  let consultationBtns = document.querySelectorAll('.button_wide')
  let consultationBody = document.querySelector('.popup-consultation')
  let consultationBtnClose = document.querySelector('.close-consultation')
  for (let consultationBtn of consultationBtns) {
    consultationBtn.addEventListener("click", () => {
      if (consultationBody.style.visibility = "hidden") {
        consultationBody.style.visibility = "visible"
      }
    }
    )}
    consultationBtnClose.addEventListener("click", () => {
      if (consultationBody.style.visibility = "visible") {
        consultationBody.style.visibility = "hidden"
      }
  })
}
export default openСonsultation