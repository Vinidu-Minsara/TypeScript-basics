function greet(name) {
    console.log('hello ' + name.toUpperCase());
}
greet('Vinidu');
// greet(50); // TypeError: name.toUpperCase is not a function
function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}
console.log(getRandomNumber());
var getName = function () {
    return 'Vinidu';
};
var marks = [10, 20, 30, 40, 50];
marks.forEach(function (mark) {
    console.log(mark);
});
function printInfo() {
    var name = 'Vinidu';
    var age = 19;
    console.log("My name is ".concat(name, " and I am ").concat(age));
}
printInfo();
