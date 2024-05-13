var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OldCar = /** @class */ (function () {
    function OldCar() {
        console.log('Invoking super class constructor!');
    }
    OldCar.prototype.go = function () {
        return 'old car is going';
    };
    return OldCar;
}());
var NewCar = /** @class */ (function (_super) {
    __extends(NewCar, _super);
    function NewCar() {
        return _super.call(this) || this;
    }
    NewCar.prototype.horn = function () {
        console.log('new car is pooomp poomp!');
    };
    NewCar.prototype.go = function () {
        return 'new car is going';
    };
    return NewCar;
}(OldCar));
var newcar = new NewCar();
console.log(newcar.go()); // method overriding
newcar.horn();
