const openPrivacy = () => {
  let privacyBtns = document.querySelectorAll('.link-privacy')
  let privacyBody = document.querySelector('.popup-privacy')
  let privacyBtnClose = document.querySelector('.popup-privacy > .close')

  
  for (let privacyBtn of privacyBtns) {
    privacyBtn.addEventListener("click", () => {
      if (privacyBody.style.visibility = "hidden") {
        privacyBody.style.visibility = "visible"
      }
    }
    )}
    privacyBtnClose.addEventListener("click", () => {
      if (privacyBody.style.visibility = "visible") {
        privacyBody.style.visibility = "hidden"
      }
  });
}
export default openPrivacy