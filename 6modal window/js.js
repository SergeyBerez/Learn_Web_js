//--------------------- модальное окно

function Popup(obj) {
  this.overlay = document.querySelector(obj.overlay); // получаем через обьект параметры
  this.modal = document.querySelector(obj.modal);
  console.log(obj.selector);
  var popup = this;
  console.log(this);
  this.open = function(content) {
    // передаем параментр в метод что бы менять содержимое модального окна
    this.modal.innerHTML = content;
    this.overlay.classList.add(obj.selector);
    this.modal.classList.add(obj.selector);
  };
  // здесь именно нужно сохранить контекст в переменную popup
  this.close = function() {
    popup.overlay.classList.remove(obj.selector);
    popup.modal.classList.remove(obj.selector);
  };
  //  добавляем метод внутри обьекта его не видно снаружи делаем что бы обьект закрывался универсальрно метод внутри обекта
  this.overlay.onclick = this.close;
}

const popup = new Popup({
  modal: '.modal',
  overlay: '.overlay',
  selector: 'open',
}); // пердаем параметры в через обект в котором серектороы

document.querySelector('.button-modal').addEventListener('click', function(e) {
  // получаю див и записываю его содержимое с формой в  див с классом modal через параметры при вызове
  var cull = document.querySelector('.cull-popup');
  popup.open('первое модальное передал параметны' + cull.innerHTML);
  // здесь можно проверять форму на валидность
  var form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });
});

// setTimeout(function() {
//   popup.open();
// }, 1000);
