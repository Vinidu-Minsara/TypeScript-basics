function isPass(total) {
    return total >= 75 ? 'pass' : 'fail';
}
isPass(54);
// isPass('hello')
// isPass(true)
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet('Vinidu', new Date());
//Type inference
var x = 10;
console.log(x);
x = 'hello';
console.log(x);
