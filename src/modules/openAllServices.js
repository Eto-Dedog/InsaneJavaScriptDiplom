const openAllServices = () => {
  let modalServices = document.querySelector('.popup-repair-types')
  let menu = document.querySelector('.popup-menu')
  let menuBody = document.querySelector('.popup-dialog-menu')
  let modalServicesBtnsOpen = document.querySelectorAll('.link-list-menu')
  let modalServicesBtnsClose = document.querySelectorAll('.popup-repair-types > .close')
  let modalServicesBtnsCloseAdapt = document.querySelectorAll('.tablet-hide > .close')
  let modalServicesBtnsOpenAdapt = document.querySelectorAll('.link-list-repair > a')
  modalServices.style.visibility = "hidden"

    for (let modalServicesBtnOpen of modalServicesBtnsOpen) {
    modalServicesBtnOpen.addEventListener("click", () => {
      if (modalServices.style.visibility = "hidden") {
        modalServices.style.visibility = "visible"
        menu.style.visibility = "hidden"
        menuBody.style.transform = "translate3d(845px,0,0)"
      }
    }
    )}

    for (let modalServicesBtnOpenAdapt of modalServicesBtnsOpenAdapt) {
      modalServicesBtnOpenAdapt.addEventListener("click", () => {
        if (modalServices.style.visibility = "hidden") {
          modalServices.style.visibility = "visible"
          menu.style.visibility = "hidden"
          menuBody.style.transform = "translate3d(845px,0,0)"
        }
      }
      )}

    for (let modalServicesBtnClose of modalServicesBtnsClose) {
    modalServicesBtnClose.addEventListener("click", () => {
      if (modalServices.style.visibility = "visible") {
        modalServices.style.visibility = "hidden"
      }
    }
    )}

    for (let modalServicesBtnCloseAdapt of modalServicesBtnsCloseAdapt) {
      modalServicesBtnCloseAdapt.addEventListener("click", () => {
        if (modalServices.style.visibility = "visible") {
          modalServices.style.visibility = "hidden"
        }
      }
      )}
}
export default openAllServices