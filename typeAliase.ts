//without using type aliases
let box = {
    width: 10,
    height: 20,
    length: 5
}

function findBoxArea(box: {width: number, height: number, length: number}){
    console.log(box.width * box.height * box.length);
}

//using type aliases

type Box = {
    width: number,
    height: number,
    length: number
}

function findBoxAliasArea(box: Box){
    console.log(box.width * box.height * box.length);
}