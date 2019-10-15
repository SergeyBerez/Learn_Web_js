var tagl = document.querySelector('.toggle');
var ul = document.querySelector('.menu');

tagl.onclick = function(e) {
  ul.classList.toggle('showed');
  console.log(tagl);
};
