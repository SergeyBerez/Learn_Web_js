// -----------------слайдер

// var imgs = document.querySelectorAll('img');
// var btn = document.querySelectorAll('button');
// var i = 0;
// btn[1].onclick = function() {
//   imgs[i].classList.remove('show');
//   i++;

//   if (i >= imgs.length) {
//     i = 0;
//   }
//   imgs[i].classList.add('show');
// };

// btn[0].onclick = function() {
//   imgs[i].classList.remove('show');
//   i--;

//   if (i < 0) {
//     i = imgs.length - 1;
//   }
//   imgs[i].classList.add('show');
// };

// ===============слайдер через jquery
// var i = 0;
// var $img = $('img');
// console.log($img);
// $('button').on('click', function(e) {
//   $img.eq(i).removeClass('show');
//   i++;
//   if (i >= $img.length) {
//     i = 0;
//   }
//   $img.eq(i).addClass('show');
// });

//------------ создаем обьект салйдера
(function() {
  //модуль слайдера

  function Slider(elements, btn, auto, time) {
    this.element = elements;
    var i = 0;
    this.btn = btn;
    this.time = time || 1000;
    this.auto = auto;
    var slider = this;
    slider.next = function() {
      slider.element[i].classList.remove('show');
      i++;

      if (i >= slider.element.length) {
        i = 0;
      }
      slider.element[i].classList.add('show');
    };

    slider.prev = function() {
      slider.element[i].classList.remove('show');
      i--;

      if (i < 0) {
        i = slider.element.length - 1;
      }
      slider.element[i].classList.add('show');
    };

    slider.btn[0].onclick = slider.next;

    slider.btn[1].onclick = slider.prev;
    if (this.auto == 'auto') {
      setInterval(slider.next, this.time);
    }

    console.log(slider);
  }

  var btn = document.querySelectorAll('button');
  var imgs = document.querySelectorAll('.slider1 img');
  var newSlider = new Slider(imgs, btn, 'auto', 5000);

  var btn2 = document.querySelectorAll('.button');
  var imgs2 = document.querySelectorAll('.slider2 img');
  var newSlider2 = new Slider(imgs2, btn2, 'auto', 2000);
})();
