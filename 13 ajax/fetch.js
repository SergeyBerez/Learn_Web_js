// запрос POST отправляем данные
document.forms[1].addEventListener('submit', function(e) {
  e.preventDefault();
  let data = {
    Name: document.querySelector('[data-name="name"]').value,
    Password: document.querySelector('[data-name="password"]').value,
    email: document.querySelector('[data-name="email"]').value,
  };

  // let data = new FormData(document.forms[1]);
  // for (let [name, value] of data) {
  //   console.log(name);
  // }
  fetch('https://my-json-server.typicode.com/SergeyBerez/server/myPost', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(dat => {
      console.log(dat);

      div.textContent = JSON.stringify(dat);
    })
    .catch(function(error) {
      console.log(`ошибка ${error}`);
    });
});
// запрос GEt сортируем массив обьектов по именни
document.querySelector('.btn3').addEventListener('click', function(e) {
  fetch('https://my-json-server.typicode.com/SergeyBerez/server/myGet')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(arr => {
      arr.sort((a, b) => (a.age > b.age ? 1 : -1));
      console.log(arr);
      div.textContent = JSON.stringify(arr);
    })
    .catch(error => {
      console.log(`ошибка ${error}`);
    });
});
