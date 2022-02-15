const phoneList = () => {
  let listBtn = document.querySelector('.header-contacts__arrow')
  let phone = document.querySelector('.header-contacts__phone-number-accord .header-contacts__phone-number')
  let arrow = document.querySelector('.header-contacts__arrow img')
  phone.style.opacity = "0"
  listBtn.addEventListener("click", () => {
    if (phone.style.opacity === '0') {
      phone.style.opacity = "1"
      phone.style.marginTop = "25px"
      arrow.style.transform = "rotate(180deg)"
      arrow.style.transition = "all 0.6s"
    } else if (phone.style.opacity = '1') {
        phone.style.opacity = "0"
        phone.style.marginTop = "0px"
        arrow.style.transform = "rotate(0deg)"
        arrow.style.transition = "all 0.6s"
    }
  });
}
export default phoneList