function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });
function printId2(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
printId2('Hello0001'); //HELLO0001
printId2(2002); //2002
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(['Vinidu', 'Vimukthi', 'Nipun']); //Hello, Vinidu and Vimukthi and Nipun
welcomePeople('Dinil'); //Welcome lone traveler Dinil
// let data: number[] | boolean[] = [10, 20, true, false];
var data = [10, 20, true, false];
//----------------------------------------------------
// strict union
function windowStatus(status) {
    console.log('Window is ' + status);
}
windowStatus("open");
windowStatus("close");
// windowStatus("hello"); //Illegal
