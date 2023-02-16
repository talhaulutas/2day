let price:number = 20;
let price2:number =20.44;
let name2:string = "ahmet";
let isShow:boolean = true;
let products:null = null;
let product:undefined = undefined;
let person:any="ahmet";
let price4:unknown = 30;
let numbers:number[] = [1,2,3,4,5];
let names:string[] = ["ahmet","mehmet","hasan"];
let productList:Array<string>=["kalem","defter","silgi"];
let a:[string,number] = ["a",3];

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
}
class Student 
{
    name:string;
    surName:string;
    age:number;
    constructor(name:string,surName:string,age:number){
        this.name=name;
        this.surName=surName;
        this.age=age;
    }
    show()
    {
        console.log(`${this.name} ${this.surName} ${this.age}`)
    }
}
var Student1 = new Student("ahmet","yıldız",25);
Student1.show();
enum Color{
    Red=100,Green=200,Blue=300
}
enum Gender{
    Male,Female
}
function Add(a:number,b:number): number {
    return a + b;
}
function Sum(a:number,b:number): void {
    console.log(a+b);
}
var color:Color = Color.Red;
console.log(color);
console.log(Color[color]);

function GenericAdd<T1,T2>(a:T1,b:T2): any{
    let sum = (a as number) + (b as number);
    console.log(sum);
    console.log(`${a} ${b}`);
}
class StudentGeneric<T1>{
    name:T1;
    surName:string;
    age:number;
    constructor(name:string,surName:string,age:number){
        (this.name as string) = name;
        this.surName = surName;
        this.age = age;
    }
    show()
    {
        console.log(`${this.name} ${this.surName} ${this.age}`)
    }
}
var student3 = new StudentGeneric<string>("Mehmet","dertli",23);
student3.show();
class Result{
    toplama:number;
    cikarma:number;
    carpma:number;
}
function calculate(a:number,b:number):[number,number,number]{
    return [a+b,a*b,a-b];
}
function calculate2(a:number,b:number):Result {
    var result = new Result();
    result.toplama = a+b;
    result.cikarma = a-b;
    result.carpma = a*b;
    return result;
}
interface IPerson {
    name:string;
    age:number;
    calculate();
    show(id:string,name:string):number;
}
interface IProduct {
    id:number;
    name:string;
    price:number;
}
class Person implements IPerson{
    name: string;
    age: number;
    birthDate:Date;
    calculate():void {
        throw new Error("Method not implemented.");
    }
    show(id: string, name: string): number {
        throw new Error("Method not implemented.");
    }

}
var p1 = new Person();
p1.age= 20;
p1.name = "ahmet";
p1.birthDate = new Date();

let person2: IPerson = p1;
(person2 as Person).birthDate;
let personInterface:IPerson = {name:"ahmet",age:23,calculate:function(){},show:function(id,name){return 5}};
var product5:IProduct = {id:1,name}
console.log(`toplam:${calculate(3,3)[0]}`);
console.log(`çarpım:${calculate(3,3)[1]}`);
console.log(`çıkarma:${calculate(3,3)[2]}`);
