abstract class Vehicle
{
    ileri():void
    {

    }
    abstract sag():void
    abstract sol():void


}
class Car extends Vehicle{
    sag(): void {
        console.log("sağa gider");
    }
    sol(): void {
        console.log("sola gider");
    }

}
class Car2 extends Vehicle
{
    sag(): void {
        console.log("sağa gider");
    }
    sol(): void {
        console.log("sola gider type2");;
    }
    
}
class Car3 extends Vehicle
{
    sag(): void {
        console.log("sağa gider type3");
    }
    sol(): void {
        console.log("sola gider");
    }
    
}
class Train extends Vehicle{
    sag(): void {
        throw new Error("sağa gidemez.");
    }
    sol(): void {
        throw new Error("sola gidemez");
    }

}