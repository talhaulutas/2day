class Person{
    id:number;
    name:string;
    protected age:number;
    salary:number;
    constructor(name:string){
        this.name = name;
    }
    show():void{
        console.log(`${this.id} ${this.name} ${this.age} ${this.salary}`)
    }
}
class JuniorDevPerson extends Person
{
    constructor(id:number,name:string,age:number){
        super(name);
        this.age = 20;
        this.id = id;
    }
}
class MidDevPerson extends Person
{

}
class SeniorDevPerson extends Person
{

}
var a = new MidDevPerson("ahmet");