// function s() {
//   var f = [];
//   for (var i = 0; i < 10; i++)
//     f[i] = function () {
//       return i;
//     };
//   return f;
// }
// var sd = s();
// console.log(sd[5]());

// (function () {
//   var a = (b = "42");
// })();
// console.log(typeof a);

function foo(array) {
  return Object.freeze(
    array.reduce((obj, item, index) => {
      if (typeof item === "string") {
        obj[(obj[index] = item.toUpperCase())] = index;
      }
      return obj;
    }, {})
  );
}
const bar = foo(["A", "B", "C"]);
console.log(bar.A + "|" + bar.b + "|" + bar.C);

for (var i = 0; i < 4; i++)
  setTimeout(() => {
    console.log(i);
  }, 0);

function x() {
  a();
  function a() {
    console.log("m");
  }
  a();
  function a() {
    console.log("n");
  }
  a();
}
// var func = constfuncs();

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();
