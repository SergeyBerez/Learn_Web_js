// -----------------проверка валидности формы

window.onload = function() {
  var inpts = document.querySelectorAll('.input');
  var form = document.querySelector('form');
  //var but = document.querySelector('[type="submit"]');

  form.onsubmit = formSend;

  function formSend(e) {
    var err = false;
    for (var i = 0; i < inpts.length; i++) {
      if (inpts[i].value == '') {
        inpts[i].classList.add('error');
        err = true;
        //console.log('err');
      } else {
        inpts[i].classList.remove('error');
        // console.log('remove err');
        err = false;
      }

      if (err) {
        e.preventDefault();
        console.log('e.preven');
      }
    }
  }
};
// ----------- проверка отправки формы через слушатель собитий

// form.addEventListener('submit', submit);

// function submit(e) {
//   console.log(1);
//   for (let i = 0; i < inpts.length; i++) {
//     if (inpts[i].value == '') {
//       e.preventDefault();
//       inpts[i].classList.add('error');
//     } else {
//       inpts[i].classList.remove('error');
//     }
//   }
// }
