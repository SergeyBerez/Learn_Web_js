let i = 2;
let divs = document.querySelectorAll('.box');
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('box') &&i % 2 == 1) {
    e.target.textContent = 'X';
  } else if(e.target.classList.contains('box') && i % 2 == 0){
    e.target.textContent = 'O';
  }
  i++;

  

  repair();
});

function repair() {
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < divs.length; i++) {
    if (
      divs[arr[i][0]].innerHTML == 'X' &&
      divs[arr[i][1]].innerHTML == 'X' &&
      divs[arr[i][2]].innerHTML == 'X'
    ) {
      alert('выйграл Х');
      window.location.reload()
    } else if (
      divs[arr[i][0]].innerHTML == 'O' &&
      divs[arr[i][1]].innerHTML == 'O' &&
      divs[arr[i][2]].innerHTML == 'O'
    ) {
      alert('выйграл O');
      window.location.reload()
    }
  }
  
 
  

  
}
