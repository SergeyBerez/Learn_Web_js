// const http = require("http");
// const port = 3000;
// const requestHandler = (request, response) => {
//   console.log(request.url);
//   response.end("Hello Node.js Server!");
// };
// const server = http.createServer(requestHandler);
// server.listen(port, err => {
//   if (err) {
//     return console.log("something bad happened", err);
//   }
//   console.log(`server is listening on ${port}`);
// });

// var sum = require("./main");
// sum();

var obj1 = {
  name2: "sergey",
  name1: "vasya"
};
var obj2 = {
  name1: "vasya",
  name2: "sergey"
};
function obj(a, b) {
  if (Object.keys(a).length == Object.keys(b).length) {
    console.log(Object.keys(b).length);
    var res2 = 0;
    for (const keya in a) {
      for (const keyb in b) {
        if (keya == keyb) res2++;
      }
    }

    if (Object.keys(a).length == res2) {
      console.log("обьекты равны ");
    } else {
      console.log("обьекты не равны ");
    }
  } else {
    console.log("обьекты не равны ");
  }
}

obj(obj1, obj2);
