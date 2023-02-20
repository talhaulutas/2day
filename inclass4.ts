namespace inclass4 {
    interface ISayisalBehavior {
        sayisal(): void;
    }
    interface ISozelBehavior {
        sozel(): void;
    }
    class SayisalBehaviorType1 implements ISayisalBehavior
    {
        sayisal(): void {
            throw new Error("Method not implemented.");
        }
        
    }

    class SayisalBehaviorType2 implements ISayisalBehavior
    {
        sayisal(): void {
            throw new Error("Method not implemented.");
        }

    }
    class SozelBehaviorType1 implements ISozelBehavior
    {
        sozel(): void {
            throw new Error("Method not implemented.");
        }

    }
    class SozelBehaviorType2 implements ISozelBehavior
    {
        sozel(): void {
            throw new Error("Method not implemented.");
        }

    }
    abstract class Lessons
    {
        public _sayisalBehavior:ISayisalBehavior;
        public _sozelBehavior:ISozelBehavior;
        constructor(sayisalBehavior:ISayisalBehavior,sozelBehavior:ISozelBehavior)
        {
            this._sayisalBehavior = sayisalBehavior;
            this._sozelBehavior = sozelBehavior;
        }
        SetRightOrLeftBehavior(rightBehavior: ISayisalBehavior, leftBehavior: ISozelBehavior) {
            this._s = rightBehavior;
            this._leftBehavior = leftBehavior;
        }
        sozel():void
        {
            this._sozelBehavior.sozel();
        }
        sayısal():void
        {
            this._sayisalBehavior.sayisal();
        }
    }
}
