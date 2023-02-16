class person{
    id:number;
    name:string;
    age:number;
    salary:number;
    childCount:number;
    calculateSalary(){
        return this.salary + (this.childCount * 1000);
    }
}
class JuniorDevPerson extends person{
    calculateSalary() {
        var baseSalary = super.calculateSalary();
        return baseSalary;
    }
}
class MidDevPerson extends person{
    calculateSalary() {
        var baseSalary = super.calculateSalary();
        return baseSalary * 4;
    }
}
class SeniorDevPerson extends person{
    calculateSalary() {
        var baseSalary = super.calculateSalary();
        return baseSalary * 8;
    }
}
var junior = new JuniorDevPerson();
junior.id = 1;
junior.name = "ahmet";
junior.salary = 1000;
junior.childCount = 3;
console.log(`junior maaş hesaplama:${junior.calculateSalary()}`);
var mid = new MidDevPerson();
mid.id = 2;
mid.name = "mehmet";
mid.age = 23;
mid.salary = 1000;
mid.childCount = 3;
console.log(`mid maaş hesaplama:${mid.calculateSalary()}`);
var senior = new SeniorDevPerson();
senior.id = 3;
senior.name = "ali";
senior.salary = 1000;
senior.childCount = 3;
console.log(`senior maaş hesaplama:${senior.calculateSalary()}`);

let basePerson:person=junior;
console.log(`base maaş hesaplama:${basePerson.calculateSalary()}`);
basePerson = mid;
console.log(`base maaş hesaplama:${basePerson.calculateSalary()} - age : ${(basePerson as MidDevPerson).age}`);
basePerson = senior;
console.log(`base maaş hesaplama:${basePerson.calculateSalary()}`);
var person5:person = new person();
person5.id=5;
person5.name="mehmet";
person5.childCount = 2;
person5.salary=2000;

