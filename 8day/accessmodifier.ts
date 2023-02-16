class A{
    private name:string;
    public method1():void{

    }
    protected age:number;
    private _count:number;
    private _count2:number;
    public get count2()
    {
        return this._count2;
    }
    public set count2(a:number)
    {
        if(a>50 && a<250){
            this._count2 = a;
        }
        else{
            throw new Error("değer 50 ile 250 arasında olmalıdır.")
        }
    }
    public SetCount(number:number){
        if (number>1&&number<100){
            this._count = number;
        }
        else{
            throw new Error("değer 1 ile 100 arasında olmalıdır.")
        }
    }
    public GetCount(){
        return this._count;
    }
}
var a = new A();
a.method1();
