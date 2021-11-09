const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const buttonClose = modalOverlay.querySelector('.close-modal')

for (let card of cards) {
  card.addEventListener('click', () => {
    var idVideo = card.getAttribute('id');
    window.location.href = "/video?id="+idVideo
    modalOverlay.classList.add('active');
  });
}

buttonClose.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
})



