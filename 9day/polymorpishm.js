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
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.calculateSalary = function () {
        return this.salary + (this.childCount * 1000);
    };
    return person;
}());
var JuniorDevPerson = /** @class */ (function (_super) {
    __extends(JuniorDevPerson, _super);
    function JuniorDevPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JuniorDevPerson.prototype.calculateSalary = function () {
        var baseSalary = _super.prototype.calculateSalary.call(this);
        return baseSalary;
    };
    return JuniorDevPerson;
}(person));
var MidDevPerson = /** @class */ (function (_super) {
    __extends(MidDevPerson, _super);
    function MidDevPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MidDevPerson.prototype.calculateSalary = function () {
        var baseSalary = _super.prototype.calculateSalary.call(this);
        return baseSalary * 4;
    };
    return MidDevPerson;
}(person));
var SeniorDevPerson = /** @class */ (function (_super) {
    __extends(SeniorDevPerson, _super);
    function SeniorDevPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeniorDevPerson.prototype.calculateSalary = function () {
        var baseSalary = _super.prototype.calculateSalary.call(this);
        return baseSalary * 8;
    };
    return SeniorDevPerson;
}(person));
var junior = new JuniorDevPerson();
junior.id = 1;
junior.name = "ahmet";
junior.salary = 1000;
junior.childCount = 3;
console.log("junior maa\u015F hesaplama:".concat(junior.calculateSalary()));
var mid = new MidDevPerson();
mid.id = 2;
mid.name = "mehmet";
mid.age = 23;
mid.salary = 1000;
mid.childCount = 3;
console.log("mid maa\u015F hesaplama:".concat(mid.calculateSalary()));
var senior = new SeniorDevPerson();
senior.id = 3;
senior.name = "ali";
senior.salary = 1000;
senior.childCount = 3;
console.log("senior maa\u015F hesaplama:".concat(senior.calculateSalary()));
var basePerson = junior;
console.log("base maa\u015F hesaplama:".concat(basePerson.calculateSalary()));
basePerson = mid;
console.log("base maa\u015F hesaplama:".concat(basePerson.calculateSalary(), " - age : ").concat(basePerson.age));
basePerson = senior;
console.log("base maa\u015F hesaplama:".concat(basePerson.calculateSalary()));
var person5 = new person();
person5.id = 5;
person5.name = "mehmet";
person5.childCount = 2;
person5.salary = 2000;
