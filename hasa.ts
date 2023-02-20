namespace hasa {
    interface IRightBehavior {
        Right(): void;
    }
    interface ILeftBehavior {
        Left(): void;
    }
    abstract class BaseVehicle {
        public _rightBehavior:IRightBehavior;
        public _leftBehavior:ILeftBehavior;
        constructor(rightBehavior:IRightBehavior,leftBehavior:ILeftBehavior)
        {
            this._rightBehavior = rightBehavior;
            this._leftBehavior = leftBehavior;
        }
        SetRightOrLeftBehavior(rightBehavior:IRightBehavior,leftBehavior:ILeftBehavior)
        {
            this._rightBehavior = rightBehavior;
            this._leftBehavior = leftBehavior;
        }
        Forward(): void {
            console.log("ileri")
        }
        Backward(): void {
            console.log("geri")
        }
        Right():void
        {
            this._rightBehavior.Right();
        }
        Left():void
        {
            this._leftBehavior.Left();
        }
    }
    class RightBehaviorType1 implements IRightBehavior{
        Right(): void {
            console.log("right type 1");
        }
}
    class RightBehaviorType2 implements IRightBehavior{
        Right(): void {
            console.log("right type 2")
        }
}
    class RightBehaviorType3 implements IRightBehavior{
        Right(): void {
            console.log("right type 3")
        }
}
    class LeftBehaviorType1 implements ILeftBehavior{
        Left(): void {
            console.log("left type 1");
        }
}
    class LeftBehaviorType2 implements ILeftBehavior{
        Left(): void {
            console.log("right type 3");
        }
}
    class Car1 extends BaseVehicle { }
    class Car2 extends BaseVehicle { }
    class Car3 extends BaseVehicle { }
    class Train extends BaseVehicle { }

    var c1 = new Car1(new RightBehaviorType2(),new LeftBehaviorType2())
    c1.Forward();
    c1.Backward();
    c1.Right();
    c1.Left();
    c1.SetRightOrLeftBehavior(new RightBehaviorType1(),new LeftBehaviorType1());
    c1.Right();
    c1.Left();
}