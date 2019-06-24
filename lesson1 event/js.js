//-------демонстрация всплытия и прогружения  смотреть через debugger-----
var but = document.querySelector('button');
var div = document.querySelectorAll('div');

var clickElenment = null;
var clickHanler = function(e) {
  console.log(e.target);
  if (clickElenment) {
    clickElenment.classList.remove('cliked');
  }
  clickElenment = e.currentTarget;
  clickElenment.classList.add('cliked');
};
// for (var i = 0; i < div.length; i++) {
//   div[i].addEventListener('click', clickHanler, true);
// }
//but.addEventListener('click', clickHanler);

document.body.addEventListener('click', clickHanler);

//------------переключаем классы ---------
// var a = document.querySelector("a");
// var button = document.querySelector("button");
// var fff = function(e) {
//   a.classList.toggle("on-ofRed");
//   console.log(e);
// };
// button.addEventListener("click", fff);
//-------вставка и создание новых элементов----
// var ul = document.querySelector("ul");
// var newA = document.createElement("a");
// newA.textContent = "aaaaaaaaa";
// ul.insertBefore(newA, ul.children[0]);
// var insNewA = ul.insertBefore(newA, ul.children[0]);
// console.log(insNewA);
// var li1 = ul.children[1];
// console.log(li1);
// var newP = document.createElement("p");
// newP.innerHTML = "<h1>привет</h1>";
// ul.children[2].appendChild(newP);
// var user = {
//   name: "васлий",
//   say1: function() {
//     say(this);
//   }
// };

// var say = function(aaa) {
//   console.log(aaa.name);
// };
// user.say1();
// var arr = ["a", "b"];
// arr.push(function() {
//   console.log(this);
// });
// arr[2]();

//------------добавляем елемент вешаем обработчик на все события меняем класс----
var ul = document.querySelector('.menu');
console.log(ul);
//----на ссылку при клике сначала добавляет элемент помот удаляет
ul.addEventListener('click', function(e) {
  var newLi = document.createElement('li');
  // ul.classList.add("menu");

  newLi.textContent = 'это новый элемент';
  ul.insertBefore(newLi, ul.children[0]);
});
