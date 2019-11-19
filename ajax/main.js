// ======================запрос axios
document.forms[0].addEventListener('submit', function(e) {
  e.preventDefault();
  // let data = {
  //   Name: document.querySelector('[type="text"]').value,
  //   Password: document.querySelector('[type="password"]').value,
  //   email: document.querySelector('[name="email"]').value,
  // };
  const obj = {};
  const form = new FormData(this);
  for (const [key, value] of form) {
    obj[key] = value;
  }
  console.log(obj);
  // подвешиваем событие на форму и вызываем axios.post()
  axios
    .post('https://my-json-server.typicode.com/SergeyBerez/server/myPost', obj)
    .then(function(response) {
      console.log(response);
      let data = response.data;
      return data;
    })
    .then(data => {
      div.textContent = JSON.stringify(data);
    })
    .catch(error => {
      console.log(`ошибка ${error}`);
    });
});

//===

//=====

//============================
// // ==============самописная функиция  myAxios
document.querySelector('.btn1').onclick = function(e) {
  myAxiosGet('https://my-json-server.typicode.com/SergeyBerez/server/myGet')
    .then(Arr => {
      createCart(Arr);
    })
    .catch(error => {
      console.log(error);
    });
};
// функция по вствки с карточек в нtml
function createCart(Arr) {
  Arr.forEach(obj => {
    let div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<img src="${obj.photo}" alt="">`;
    document.querySelector('header').insertAdjacentElement('beforeend', div);
  });
}
// ---------------------------

// =================сама функция
function myAxiosGet(url) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let arr = JSON.parse(xhr.response);
        //console.log(xhr);
        // console.log(xhr.response);
        resolve(arr);
      } else {
        var error = new Error('ошибка');
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error('Network Error'));
    };
  });
}

// document.addEventListener('click', function(e) {
//   httpGetAsync(
//     'https://my-json-server.typicode.com/SergeyBerez/server/myGet',
//     function(e) {
//       console.log(e);
//     },
//   );
// });
// function httpGetAsync(url, callback) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function() {
//     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//       callback(xmlHttp.responseText);
//   };
//   xmlHttp.open('GET', url, true);
//   xmlHttp.send(null);
// }
