function sum(a) {
  let res = '';
  
  let arr = a.split(',');
  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i];
  }
  console.log( arr);
  return res;

  // body
}
sum('1, 3, 4');

var user = {
  firstName: 'Василий',

    // toString: function() {
    //   return 'Пользователь ' + this.firstName;
    // },
};
console.log(user);


var sum = require('./js');
 console.log(sum(5, 5));

