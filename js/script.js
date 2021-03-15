let buttonActive = document.querySelector('.contacts__button');
let buttonClose = document.querySelector('.modal-close');
let modal = document.querySelector('.modal');
buttonActive.onclick = function() {
    modal.classList.remove('modal-none'); 
  }
buttonClose.onclick = function() {
    modal.classList.add('modal-none'); 
  }