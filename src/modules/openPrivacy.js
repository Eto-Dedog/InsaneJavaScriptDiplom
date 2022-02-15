const openPrivacy = () => {
  let privacyBtns = document.querySelectorAll('.link-privacy')
  let privacyBody = document.querySelector('.popup-privacy')
  let privacyBtnsClose = document.querySelectorAll('.close')
  
  for (let privacyBtn of privacyBtns) {
    privacyBtn.addEventListener("click", () => {
      if (privacyBody.style.visibility = "hidden") {
        privacyBody.style.visibility = "visible"
      }
    }
    )}
    for (let privacyBtnClose of privacyBtnsClose)
    privacyBtnClose.addEventListener("click", () => {
      if (privacyBody.style.visibility = "visible") {
        privacyBody.style.visibility = "hidden"
      }
  });
}
export default openPrivacy