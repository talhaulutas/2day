var SalaryType;
(function (SalaryType) {
    SalaryType[SalaryType["High"] = 0] = "High";
    SalaryType[SalaryType["Medium"] = 1] = "Medium";
    SalaryType[SalaryType["Low"] = 2] = "Low";
})(SalaryType || (SalaryType = {}));
class HighSalaryCalculate {
    calculate(salary) {
        return salary * 10;
    }
}
class MidSalaryCalculate {
    calculate(salary) {
        return salary * 7;
    }
}
class LowSalaryCalculate {
    calculate(salary) {
        return salary * 5;
    }
}
class SalaryCalculate {
    CalculateBad(salary, salaryType) {
        let sumSalary = 0;
        switch (salaryType) {
            case SalaryType.High:
                sumSalary = salary * 10;
                break;
            case SalaryType.Low:
                sumSalary = salary * 5;
                break;
            case SalaryType.Medium:
                sumSalary = salary * 7;
                break;
            default:
                break;
        }
        return sumSalary;
    }
    calculateGood(salary, salaryCalculate) {
        return salaryCalculate.calculate(salary);
    }
}
let externalSalaryType = SalaryType.High;
let externalSalary = 2000;
var salaryArray = [];
/*console.log(`high ${salaryCalculate.CalculateBad(1000,SalaryType.High)}`);
console.log(`mid ${salaryCalculate.CalculateBad(1000,SalaryType.Medium)}`);
console.log(`low ${salaryCalculate.CalculateBad(1000,SalaryType.Low)}`);*/
salaryArray.push({ salaryType: SalaryType.Low, SalaryCalculate: new LowSalaryCalculate() });
salaryArray.push({ salaryType: SalaryType.Medium, SalaryCalculate: new MidSalaryCalculate() });
salaryArray.push({ salaryType: SalaryType.High, SalaryCalculate: new HighSalaryCalculate() });
let currentSalaryCalculate = salaryArray.find(x => x.salaryType == externalSalaryType);
console.log(currentSalaryCalculate === null || currentSalaryCalculate === void 0 ? void 0 : currentSalaryCalculate.SalaryCalculate.calculate(externalSalary));
/*console.log(`high ${salaryCalculate.calculateGood(1000,new HighSalaryCalculate())}`);
console.log(`mid ${salaryCalculate.calculateGood(1000,new MidSalaryCalculate())}`);
console.log(`low ${salaryCalculate.calculateGood(1000,new LowSalaryCalculate())}`);*/ 
