abstract class BaseVehicle
{
    id:number;
    type:string;
    WriteToLog(log:string){
        console.log(log);
    }

}
class Car extends BaseVehicle
{

}
class train extends BaseVehicle
{

}
var car = new Car();
car.id = 1;
car.type ="type 1";
car.WriteToLog("car 1 log");