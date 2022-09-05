const openButtons = document.querySelectorAll('.popup-button');
const modalContainer = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal__close-button');

const isEscapeKey = (evt) => evt.key === 'Escape';

const modalOpen = () => {
  modalContainer.classList.remove('modal-container--closed');
  document.addEventListener('keydown', onModalEscClose);
  document.addEventListener('click', onModalAnyClickClose);
}

const openModal = () => {
  openButtons.forEach((button) => {
    button.addEventListener ('click', () => modalOpen());
  });
}

const modalClose = () => {
  modalContainer.classList.add('modal-container--closed');
  document.removeEventListener('keydown', onModalEscClose);
  document.removeEventListener('click', onModalAnyClickClose);
}

function onModalEscClose (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalClose();
  }
}

function onModalAnyClickClose (evt) {
  if (evt.target === modalContainer) {
    modalClose();
  }
}

const modalCloseFu = () => {
  modalCloseButton.addEventListener('click', () => modalClose());
}

export {openModal, modalCloseFu};
