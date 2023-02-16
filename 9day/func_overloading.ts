class Calculate
{
    public getSalary(a:number, b:number):number;

    public getSalary(a:string, b:string): string;
    
    public getSalary(a: any, b:any): any {
        if (typeof(a) == "number") {return 5;}
        return "salary";
    }
}
var calculate = new Calculate();
console.log(calculate.getSalary(1,2));