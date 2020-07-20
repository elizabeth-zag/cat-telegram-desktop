const burgerMenu = document.querySelector('.chat-list__burger-menu');
const popupMenu = document.querySelector('.popup-menu');
const blur = document.querySelector('.blur');

burgerMenu.addEventListener('click', function () {
  popupMenu.style.transform = 'translateX(350px)';
  blur.style.display = 'block';
});

blur.addEventListener('click', function () {
  popupMenu.style.transform = 'translateX(-350px)';
  blur.style.display = 'none';
});