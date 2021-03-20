let buttonActive = document.querySelector('.contacts__button');
let buttonClose = document.querySelector('.modal-close');
let modal = document.querySelector('.modal');

buttonActive.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-none'); 
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-none'); 
  modal.classList.add('modal-none');
});