namespace opc{
    enum SalaryType {
        High,
        Medium,
        Low
    }
    interface ISalaryCalculate {
        calculate(salary: number): number;
    }
    class HighSalaryCalculate implements ISalaryCalculate {
        calculate(salary: number): number {
            return salary * 10;
        }
    
    }
    class MidSalaryCalculate implements ISalaryCalculate {
        calculate(salary: number): number {
            return salary * 7;
        }
    
    }
    class LowSalaryCalculate implements ISalaryCalculate {
        calculate(salary: number): number {
            return salary * 5;
        }
    
    }
    
    class SalaryCalculate {
        CalculateBad(salary: number, salaryType: SalaryType) {
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
        calculateGood(salary: number, salaryCalculate: ISalaryCalculate) {
            return salaryCalculate.calculate(salary);
        }
    }
    interface ISalaryKeyValue
    {
        salaryType:SalaryType;
        SalaryCalculate:ISalaryCalculate;
    }
    let externalSalaryType=SalaryType.High;
    let externalSalary = 2000;
    
    var salaryArray:ISalaryKeyValue[] = [];
    /*console.log(`high ${salaryCalculate.CalculateBad(1000,SalaryType.High)}`);
    console.log(`mid ${salaryCalculate.CalculateBad(1000,SalaryType.Medium)}`);
    console.log(`low ${salaryCalculate.CalculateBad(1000,SalaryType.Low)}`);*/
    
    salaryArray.push({salaryType:SalaryType.Low,SalaryCalculate:new LowSalaryCalculate()});
    salaryArray.push({salaryType:SalaryType.Medium,SalaryCalculate:new MidSalaryCalculate()});
    salaryArray.push({salaryType:SalaryType.High,SalaryCalculate:new HighSalaryCalculate()});
    
    let currentSalaryCalculate = salaryArray.find(x=>x.salaryType==externalSalaryType);
    console.log(currentSalaryCalculate?.SalaryCalculate.calculate(externalSalary));
    
    /*console.log(`high ${salaryCalculate.calculateGood(1000,new HighSalaryCalculate())}`);
    console.log(`mid ${salaryCalculate.calculateGood(1000,new MidSalaryCalculate())}`);
    console.log(`low ${salaryCalculate.calculateGood(1000,new LowSalaryCalculate())}`);*/
    
}
