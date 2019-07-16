function sum(a) {
  let res = '';
  console.log(a);
  let arr = a.split(',');
  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i];
  }
  return res;

  // body
}
console.log(sum('1, 3, 4'));

var user = {
  firstName: 'Василий',

  //   toString: function() {
  //     return 'Пользователь ' + this.firstName;
  //   },
};
console.log(user.toString());
console.log(32);

var sum = require('/Users/User/Desktop/proj_loft/src/js');
console.log(sum(5, 5));
console.log(1111);
