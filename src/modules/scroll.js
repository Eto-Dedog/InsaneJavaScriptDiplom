const scroll = () => {
  const smoothLinks = document.querySelectorAll('a[href^="#main"],a[href^="#formula"],a[href^="#repair-types"],a[href^="#portfolio"],a[href^="#transparency"],a[href^="#director"],a[href^="#reviews"],a[href^="#faq"],a[href^="#main"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
          let menu = document.querySelector('.popup-menu')
          let menuBody = document.querySelector('.popup-dialog-menu')
          if (menu.style.visibility = "visible") {
            menu.style.visibility = "hidden"
            menuBody.style.transform = "translate3d(845px,0,0)"
        }
      });
  };
}
export default scroll