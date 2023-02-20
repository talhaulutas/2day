var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hasa;
(function (hasa) {
    var BaseVehicle = /** @class */ (function () {
        function BaseVehicle(rightBehavior, leftBehavior) {
            this._rightBehavior = rightBehavior;
            this._leftBehavior = leftBehavior;
        }
        BaseVehicle.prototype.SetRightOrLeftBehavior = function (rightBehavior, leftBehavior) {
            this._rightBehavior = rightBehavior;
            this._leftBehavior = leftBehavior;
        };
        BaseVehicle.prototype.Forward = function () {
            console.log("ileri");
        };
        BaseVehicle.prototype.Backward = function () {
            console.log("geri");
        };
        BaseVehicle.prototype.Right = function () {
            this._rightBehavior.Right();
        };
        BaseVehicle.prototype.Left = function () {
            this._leftBehavior.Left();
        };
        return BaseVehicle;
    }());
    var RightBehaviorType1 = /** @class */ (function () {
        function RightBehaviorType1() {
        }
        RightBehaviorType1.prototype.Right = function () {
            console.log("right type 1");
        };
        return RightBehaviorType1;
    }());
    var RightBehaviorType2 = /** @class */ (function () {
        function RightBehaviorType2() {
        }
        RightBehaviorType2.prototype.Right = function () {
            console.log("right type 2");
        };
        return RightBehaviorType2;
    }());
    var RightBehaviorType3 = /** @class */ (function () {
        function RightBehaviorType3() {
        }
        RightBehaviorType3.prototype.Right = function () {
            console.log("right type 3");
        };
        return RightBehaviorType3;
    }());
    var LeftBehaviorType1 = /** @class */ (function () {
        function LeftBehaviorType1() {
        }
        LeftBehaviorType1.prototype.Left = function () {
            console.log("left type 1");
        };
        return LeftBehaviorType1;
    }());
    var LeftBehaviorType2 = /** @class */ (function () {
        function LeftBehaviorType2() {
        }
        LeftBehaviorType2.prototype.Left = function () {
            console.log("right type 3");
        };
        return LeftBehaviorType2;
    }());
    var Car1 = /** @class */ (function (_super) {
        __extends(Car1, _super);
        function Car1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Car1;
    }(BaseVehicle));
    var Car2 = /** @class */ (function (_super) {
        __extends(Car2, _super);
        function Car2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Car2;
    }(BaseVehicle));
    var Car3 = /** @class */ (function (_super) {
        __extends(Car3, _super);
        function Car3() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Car3;
    }(BaseVehicle));
    var Train = /** @class */ (function (_super) {
        __extends(Train, _super);
        function Train() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Train;
    }(BaseVehicle));
    var c1 = new Car1(new RightBehaviorType2(), new LeftBehaviorType2());
    c1.Forward();
    c1.Backward();
    c1.Right();
    c1.Left();
    c1.SetRightOrLeftBehavior(new RightBehaviorType1(), new LeftBehaviorType1());
    c1.Right();
    c1.Left();
})(hasa || (hasa = {}));
