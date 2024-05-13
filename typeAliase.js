//without using type aliases
var box = {
    width: 10,
    height: 20,
    length: 5
};
function findBoxArea(box) {
    console.log(box.width * box.height * box.length);
}
function findBoxAliasArea(box) {
    console.log(box.width * box.height * box.length);
}
