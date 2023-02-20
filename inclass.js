var KDVType;
(function (KDVType) {
    KDVType[KDVType["Low"] = 0] = "Low";
    KDVType[KDVType["Mid"] = 1] = "Mid";
    KDVType[KDVType["High"] = 2] = "High";
})(KDVType || (KDVType = {}));
class ProductKDVCalculate {
    calculateBad(price, kdvtype) {
        let productPrice = 0;
        productPrice = price;
        if (kdvtype == KDVType.Low)
            productPrice = price * 1.01;
        if (kdvtype == KDVType.Mid)
            productPrice = price * 1.08;
        if (kdvtype == KDVType.High)
            productPrice = price * 1.18;
        return productPrice;
    }
    calculateGood(price, calculate1) {
        return calculate1.calculate(price);
    }
}
class LowKDVCalculation {
    calculate(price) {
        return price * 1.01;
    }
}
class MidKDVCalculation {
    calculate(price) {
        return price * 1.08;
    }
}
class HighKDVCalculation {
    calculate(price) {
        return price * 1.18;
    }
}
let externalKDVType = KDVType.High;
let externalPrice = 2000;
var priceArray = [];
priceArray.push({ kdvType: KDVType.Low, calculate: new LowKDVCalculation() });
priceArray.push({ kdvType: KDVType.Mid, calculate: new MidKDVCalculation() });
priceArray.push({ kdvType: KDVType.High, calculate: new HighKDVCalculation() });
let currentSalaryCalculate = priceArray.find(x => x.kdvType == externalKDVType);
console.log(currentSalaryCalculate === null || currentSalaryCalculate === void 0 ? void 0 : currentSalaryCalculate.calculate.calculate(externalPrice));
let price = new ProductKDVCalculate();
console.log(`high ${price.calculateBad(2000, KDVType.High)}`);
