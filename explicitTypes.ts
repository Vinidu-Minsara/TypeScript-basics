function isPass(total: number){
    return total >= 75 ? 'pass' : 'fail';
}

isPass(54)
// isPass('hello')
// isPass(true)

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Vinidu', new Date());

//Type inference

let x = 10;
console.log(x)

// x = 'hello';
// console.log(x)