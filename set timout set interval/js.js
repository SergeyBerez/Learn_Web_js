var box = document.querySelector('.box');
var btn = document.querySelector('#btn');

btn.addEventListener('click', anime);
setInterval(function() {
  box.style.background = 'red';
  box.style.opacity = 1;
  if ((box.style.background = 'red')) {
    setTimeout(function() {
      box.classList.toggle('box1');
      box.style.background = 'blue';
      // box.style.opacity = 0;
    }, 500);
  }
}, 1000);
function anime() {
  var pos = 0;
  var aaa = setInterval(ssss, 24);
  function ssss() {
    if (pos == 300) {
      box.classList.toggle('box1');
      pos = 0;
      console.log(1);
    } else {
      pos++;
      // box.style.top = pos + 'px';
      box.style.left = pos + 'px';
    }
  }
}
box.addEventListener('click', function(e) {
  box.classList.toggle('box1');
  if (box.classList.contains('box1'))
    box.innerHTML = 'кликни меня я стану квадратом';
  else {
    box.innerHTML = 'кликни меня я стану шариком';
  }
});
var buttons = document.querySelectorAll('button');
document.querySelector('.table').addEventListener('click', function(e) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].
  }
  e.target.innerHTML = 0;
});

/*var timer = setTimeout(function log() {
  var box = document.querySelector('.box');
  console.log('set timeout');
  var aaa = setInterval(ssss, 10);
  var pos = 0;
  function ssss() {
    console.log('set i');
    if (pos == 100) {
      console.log('finish');
      clearInterval(aaa);
    } else {
      pos++;
      // box.style.top = pos + 'px';
      box.style.left = pos + 'px';
    }
  }
setTimeout(log, 7000);
}, 5000);*/
//--------- функцию ааа нужно вызвать ааа()------
// var aaa = function() {
//   console.log('рекурия вызываю через 1сек');

//   setTimeout(aaa, 1000);
// };

//-----------------сама вызывающая функция через рекурсию

// setTimeout(function show() {
//   //console.log(' сработал 1 setTimeout через 5 сек');

//   setTimeout(function() {
//     show();
//     console.log('рекурия вызываю через 5сек функцию show');
//   }, 5000);
// }, 5000);
