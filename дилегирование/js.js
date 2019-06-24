// var ul = document.querySelector('.menu');
// ul.addEventListener('click', function(e) {
//   console.log(e.target);
//   if (e.target.classList.contains('men')) {
//     e.target.style.background = 'red';
//   } else if (e.target.tagName == 'A' && e.target.style.background == 'blue') {
//     e.target.style.background = 'red';
//   } else e.target.style.background = 'blue';
// });

var li = document.querySelectorAll('.menu li a');
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', displayblue);
}
function displayblue(e) {
  if (e.target.classList.contains('outline')) {
    e.target.classList.remove('outline');
  } else e.target.classList.add('outline');
  console.log('add outline');
}

// function displayblue(e) {
//   if (this.style.background == 'blue') {
//     this.style.background = 'red';
//   } else this.style.background = 'blue';
//   // body
// }
