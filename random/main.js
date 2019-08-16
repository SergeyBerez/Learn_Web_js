// let inp = document.querySelectorAll('[name="name"]');
// document.querySelector('[name="send"]').addEventListener('click', function(e) {
//   e.preventDefault();
//   let div = document.createElement('p');
//   div.textContent = 'привет бла бла бла ';
//   div.style.backgroundColor = 'red';
//   document.body.children[0].appendChild(div);
//   for (let i = 0; i < inp.length; i++) {
//     console.log(inp[i].value);
//   }
// });

// setInterval(function() {
//   let a = Math.floor(Math.random() * 10);

//   console.log(a);
// }, 1000);

document.querySelector('button').addEventListener('click', function(e) {
  console.log('сработал 1 обработчик');

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
  }

  var div = document.querySelectorAll('div');
  function active() {
    //this.classList.toggle('active');

    if (this.style.border == '3px solid red') {
      this.style.border = '3px solid blue';
      this.style.backgroundColor = 'red';
      this.textContent = 'поставили красный фон синию рамку';
    } else {
      this.style.border = '3px solid red';
      this.style.backgroundColor = 'blue';
      this.textContent = 'поставили синий фон красную рамку';
    }
  }
  setInterval(function() {
    var i = rand(0, div.length - 1);
    console.log(i);
    active.call(div[i]);

    //console.log(div[i]);
  }, 1000);
});

// document
//   .querySelector('[value="delete"]')
//   .addEventListener('click', function(e) {
//     var div = document.querySelectorAll('div');
//     function del(a) {
//       a.style.display = 'none';
//     }

//     setInterval(function() {
//       var i = rand(0, div.length - 1);
//       del(div[i]);

//       //console.log(div[i]);
//     }, 1000);
//     function rand(min, max) {
//       return Math.floor(Math.random() * (max - min + 1));
//     }
//   });
