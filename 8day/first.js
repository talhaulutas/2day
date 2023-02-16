var price = 20;
var price2 = 20.44;
var name2 = "ahmet";
var isShow = true;
var products = null;
var product = undefined;
var person = "ahmet";
var price4 = 30;
var numbers = [1, 2, 3, 4, 5];
var names = ["ahmet", "mehmet", "hasan"];
var productList = ["kalem", "defter", "silgi"];
var a = ["a", 3];
for (var index = 0; index < names.length; index++) {
    var element = names[index];
    console.log(element);
}
var Student = /** @class */ (function () {
    function Student(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    Student.prototype.show = function () {
        console.log("".concat(this.name, " ").concat(this.surName, " ").concat(this.age));
    };
    return Student;
}());
var Student1 = new Student("ahmet", "yıldız", 25);
Student1.show();
var Color;
(function (Color) {
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Green"] = 200] = "Green";
    Color[Color["Blue"] = 300] = "Blue";
})(Color || (Color = {}));
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
function Add(a, b) {
    return a + b;
}
function Sum(a, b) {
    console.log(a + b);
}
var color = Color.Red;
console.log(color);
console.log(Color[color]);
function GenericAdd(a, b) {
    var sum = a + b;
    console.log(sum);
    console.log("".concat(a, " ").concat(b));
}
var StudentGeneric = /** @class */ (function () {
    function StudentGeneric(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    StudentGeneric.prototype.show = function () {
        console.log("".concat(this.name, " ").concat(this.surName, " ").concat(this.age));
    };
    return StudentGeneric;
}());
var student3 = new StudentGeneric("Mehmet", "dertli", 23);
student3.show();
var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());
function calculate(a, b) {
    return [a + b, a * b, a - b];
}
function calculate2(a, b) {
    var result = new Result();
    result.toplama = a + b;
    result.cikarma = a - b;
    result.carpma = a * b;
    return result;
}
console.log("toplam:".concat(calculate(3, 3)[0]));
console.log("\u00E7arp\u0131m:".concat(calculate(3, 3)[1]));
console.log("\u00E7\u0131karma:".concat(calculate(3, 3)[2]));
