document.addEventListener('click', function(e) {
  console.log(`1 высота окна ${document.documentElement.clientHeight} `);
  console.log(
    `2 высота всего документа ${document.documentElement.scrollHeight}`,
  );
  console.log(`3 текущая прокрутка окна ${document.documentElement.scrollTop}`);
  // лучше пользовать этим методом
  console.log(`3 текущая прокрутка окна ${window.pageYOffset}`);
  //прокрутить окно на оперделенное px число вниз
  //window.scrollTo(0, 500);
  //прокрутить окно к элементу
  //window.scrollTo(0, partner.offsetTop);

  //получем где находится елемент от родителя по умолчанию от боди если нету у родителя свойства relative
  console.log(
    `4 элемент  was находится относительно родителя указанного в relative ${was.offsetTop}`,
  );
  //плучаем родителя  только нужно указать ему позишион relative
  console.log(was.offsetParent);

  //иплучаем элемнте где он находтся относительно окна
  let coords = was.getBoundingClientRect().top + window.pageYOffset;
  console.log(' 4 точные координаты елемента не зависит от родителя ' + coords);
  // координати где был клик
  console.log('5 собитие мыши относительно документа  ' + e.pageY);
  console.log(' 6 собитие мыши относительно елемента  ' + e.offsetY);
});

// document.addEventListener('mousemove', function (e) {
//   // console.log(e.offsetY);
//   // console.log(e.offsetX);
//   //иплучаем элемнте где он находтся относительно окна
//   console.log(was.getBoundingClientRect().top);
// });

// function createMes(e) {
//   let coordTop = e.pageY;
//   let coordLeft = e.pageX;

//   let div = document.createElement('span');
//   div.classList.add('span');
//   div.style.top = coordTop + 'px';
//   div.style.left = coordLeft + 'px';
//   console.log(div);
//   div.textContent = 'close';
//   document.body.before(div);
//   // body
// }

// window.addEventListener('scroll', function(e) {
//   console.log(was.getBoundingClientRect().top);
//   if (was.getBoundingClientRect().top == 0) {
//     setTimeout(function() {
//       overlay.classList.add('show');
//       modal.classList.add('show');
//       overlay.addEventListener('click', function(e) {
//         overlay.classList.remove('show');
//         modal.classList.remove('show');
//       });
//     }, 500);
//   }
// });
