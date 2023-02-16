abstract class BasePerson
{
    id:number;
    name:string;
    show()
    {
        console.log(`${this.id} ${this.name}`)
    };
    abstract details(a:number);
}
class Person extends BasePerson
{
    details(a: number) {
        throw new Error("Method not implemented.");
    }

}
var p = new Person();
p.id = 1;
p.name ="ahmet";