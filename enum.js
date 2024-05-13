"use strict";
// IIFE -> Imediately invoked function on expression in JS
Object.defineProperty(exports, "__esModule", { value: true });
var Season;
(function (Season) {
    Season[Season["WINTER"] = 10] = "WINTER";
    Season[Season["AUTUMN"] = 11] = "AUTUMN";
    Season[Season["SPRING"] = 12] = "SPRING";
    Season[Season["SUMMER"] = 13] = "SUMMER";
})(Season || (Season = {}));
var season = Season.AUTUMN;
console.log(season);
exports.default = {};
