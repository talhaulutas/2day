namespace inclass
{
    enum KDVType {
        Low,
        Mid,
        High
    }
    interface ICalculate {
        calculate(price: number): number;
    }
    interface IPriceKeyValue {
        kdvType: KDVType;
        calculate: ICalculate;
    }
    class ProductKDVCalculate {
    
        calculateBad(price: number, kdvtype: KDVType): number {
            let productPrice=0;
    
            productPrice=price;
            if (kdvtype == KDVType.Low) productPrice = price * 1.01;
            if (kdvtype == KDVType.Mid) productPrice = price * 1.08;
            if (kdvtype == KDVType.High) productPrice = price * 1.18;
           
           
           
            return productPrice;
        }
        calculateGood(price: number, calculate1: ICalculate) {
            return calculate1.calculate(price);
        }
    }
    class LowKDVCalculation implements ICalculate
    {
            calculate(price: number): number {
            return price * 1.01;
        }
    }
    class MidKDVCalculation implements ICalculate
    {
            calculate(price: number): number {
            return price * 1.08;
        }
    }
    class HighKDVCalculation implements ICalculate
    {
            calculate(price: number): number {
            return price * 1.18;
        }
    }
        let externalKDVType=KDVType.High;
        let externalPrice = 2000;
    
        var priceArray:IPriceKeyValue[] = [];
        priceArray.push({kdvType:KDVType.Low,calculate:new LowKDVCalculation()});
        priceArray.push({kdvType:KDVType.Mid,calculate:new MidKDVCalculation()});
        priceArray.push({kdvType:KDVType.High,calculate:new HighKDVCalculation()});
        
        let currentSalaryCalculate = priceArray.find(x=>x.kdvType==externalKDVType);
        console.log(currentSalaryCalculate?.calculate.calculate(externalPrice));
        let price = new ProductKDVCalculate();
        console.log(`${price.calculateBad(2000,KDVType.High)}`);
}

