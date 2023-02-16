class B implements IB{
id:number;
method1():number{return 10;};
method2(){};
method3(){};
method4(){};
method5(){};

}
class BType2 implements IB{
    
}
interface IB
{
    method1():number;
    method2();
}
class A{
 b:IB
}