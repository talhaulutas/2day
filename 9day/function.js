var add_anonymous = function (a, b) {
    return a + b;
};
add_anonymous(5, 6);
var type2 = function (a, b) { return a + b; };
type2(3, 4);
var type3 = function () { return console.log("boş method"); };
function add2() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sum = 0;
    a.forEach(function (x) {
        sum += x;
    });
    return sum;
}
function calculate(a, b, c) {
    if (c === void 0) { c = 6; }
    return a + b + c;
}
console.log(calculate(2, 4));
console.log(calculate(2, 4, 8));
console.log(add2(2, 3, 4, 5, 6));
