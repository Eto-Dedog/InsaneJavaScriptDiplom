const modalAdd = () => {
  let openModalAdd = document.querySelector('.btn-addItem')
  let closeModalAdd = document.querySelector('.button__close')
  let cancelModalAdd = document.querySelector('.cancel-button')
  let sendModalAdd = document.querySelector('.button-ui_firm')
  let modalAdd = document.querySelector('#modal')

  openModalAdd.addEventListener('click', function (e) {
    e.preventDefault()
    modalAdd.style.display = "flex"
  })
  closeModalAdd.addEventListener('click', function (e) {
    e.preventDefault()
    modalAdd.style.display = "none"
  })
  cancelModalAdd.addEventListener('click', function (e) {
    e.preventDefault()
    modalAdd.style.display = "none"
  })
  sendModalAdd.addEventListener('click', function (e) {
    e.preventDefault()
    modalAdd.style.display = "none"
  })
};
export default modalAdd;