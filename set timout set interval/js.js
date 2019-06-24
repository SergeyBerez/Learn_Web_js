var box = document.querySelector('.box');
var btn = document.querySelector('#btn');
//console.log(box);

btn.addEventListener('click', anime);

function anime() {
  var pos = 0;
  var aaa = setInterval(ssss, 24);
  function ssss() {
    if (pos == 100) {
      clearInterval(aaa);
    } else {
      pos++;
      // box.style.top = pos + 'px';
      box.style.left = pos + 'px';
    }
  }
}

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
// var aaa = function() {
//   console.log('рекурия вызываю через 1сек');

//   setTimeout(aaa, 1000);
// };

// setTimeout(function() {
//   console.log(1);

//   console.log('рекурия вызываю через 1сек');

//   setTimeout(aaa, 1000);
// }, 1000);

