let add_anonymous=function(a:number,b:number):number{
    return a+b;
}
add_anonymous(5,6);
let type2 = (a:number,b:number):number => {return a+b};
type2(3,4);
let type3 =()=>console.log("boş method");
function add2(...a:number[])
{
    var sum = 0;
    a.forEach(x=>{
        sum += x;
    })
    return sum;
}
function calculate(a:number,b:number,c:number=6):number
{
    return a+b+c;
}
console.log(calculate(2,4));
console.log(calculate(2,4,8));
console.log(add2(2,3,4,5,6));