function greet(name : string){
    console.log('hello ' + name.toUpperCase());
}

greet('Vinidu');
// greet(50); // TypeError: name.toUpperCase is not a function

function getRandomNumber() : number{
    return Math.floor(Math.random() * 10);
}

console.log(getRandomNumber());

const getName = () : string => {
    return 'Vinidu'
}

const marks: number[] = [10, 20, 30, 40, 50];

marks.forEach(mark => {
    console.log(mark);
});

function printInfo(): void{
    let name: string = 'Vinidu';
    let age: number = 19;

    console.log(`My name is ${name} and I am ${age}`);
}

printInfo();







