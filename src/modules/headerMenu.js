const headerMenu = () => {
    let menu = document.querySelector('.popup-menu')
    let menuBody = document.querySelector('.popup-dialog-menu')
    let menuBtnsOpen = document.querySelectorAll('.menu__icon')
    let menuBtnClsoe = document.querySelector('.close-menu')
    if (window.matchMedia("(min-width: 576px)").matches) {
        for (let menuBtnOpen of menuBtnsOpen) {
            menuBtnOpen.addEventListener("click", () => {
            if (menu.style.visibility = "hidden") {
                menu.style.visibility = "visible"
                menuBody.style.transform = "translate3d(0px,0,0)"
            }
        })};
        menuBtnClsoe.addEventListener("click", () => {
            if (menu.style.visibility = "visible") {
                menu.style.visibility = "hidden"
                menuBody.style.transform = "translate3d(845px,0,0)"
            }
        });
      } else {
        for (let menuBtnOpen of menuBtnsOpen) {
            menuBtnOpen.addEventListener("click", () => {
            if (menu.style.visibility = "hidden") {
                menu.style.visibility = "visible"
                menuBody.style.transform = "translate3d(0px,0,0)"
            }
        })};
        menuBtnClsoe.addEventListener("click", () => {
            if (menu.style.visibility = "visible") {
                menu.style.visibility = "hidden"
                menuBody.style.transform = "translate3d(0px, -150vh,0)"
            }
        });
      }
}
export default headerMenu