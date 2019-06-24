//--------------------- модальное окно

function Popup(obj) {
  this.overlay = document.querySelector(obj.overlay); // получаем через обьект параметры
  this.modal = document.querySelector(obj.modal);
  var popup = this;
  console.log(this);
  this.open = function(content) {
    // передаем параментр в метод что бы менять содержимое модального окна
    popup.modal.innerHTML = content;
    popup.overlay.classList.add('open');
    popup.modal.classList.add('open');
  };
  this.close = function() {
    console.log(popup.modal);
    popup.overlay.classList.remove('open');
    popup.modal.classList.remove('open');
  };
  this.overlay.onclick = this.close; //  добавляем метод внутри обьекта его не видно снаружи делаем что бы обьект закрывался универсальрно метод внутри обекта
}

var objModal = new Popup({
  modal: '.modal',
  overlay: '.overlay',
}); // пердаем параметры в через обект в котором серектороы

document.querySelector('.button-modal').addEventListener('click', function(e) {
  objModal.open('первое модальное оксно');
});
document.querySelector('.button-modal2').addEventListener('click', function(e) {
  var form = document.querySelector('.cull-popup');

  objModal.open(form.innerHTML);
});

// setTimeout(function() {
//   popup.open();
// }, 1000);
