var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var A = parseInt(valores[0]);
var B = parseInt(valores[1])


var X = A + B;

console.log("x = " + X);