const modalAdd = () => {
  let openModalAdd = document.querySelector('.btn-addItem')
  let closeModalAdd = document.querySelector('.button__close')
  let modalAdd = document.querySelector('#modal')

  openModalAdd.addEventListener('click', function (e) {
    e.preventDefault()
    modalAdd.style.display = "flex"
  })
  closeModalAdd.addEventListener('click', function (e) {
    e.preventDefault()
    modalAdd.style.display = "none"
  })
};
export default modalAdd;