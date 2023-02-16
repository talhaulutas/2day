class Product {
    #stock = 500;
    constructor() {
        var name = "kalem 1";
        var price;
    }
    setStock(stock){
        if (stock > 1000) {
            this.#stock = stock;
        }
        else{
            throw "price değeri 1000'den fazla olmalıdır.";
        }
    }
    getStock(){
        return this.#stock;
    }
    setPrice(price) {
        if (price > 1 && price < 100) {
            this.price = price;
        }
        else{
            throw "price değeri 1 ile 100 arasında olmalıdır.";
        }
    }
    getPrice(){
        return this.price
    }
    publicCalculate(){
        return this.#Calculate();
    }

    #Calculate(){
        return 10;
    }
}
class Person {
    static ageConst = 85;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    calculate(ageConst2){
        console.log(`${this.name} ${ageConst2-this.age}`);
    }
}
var p1 = new Person("ahmet,20");
p1.calculate();
var p2 = new Person("mehmet,30");
console.log(Person.ageConst);
var product = new Product();
product.setPrice(85);
console.log(product.getPrice());
console.log(product.publicCalculate());
product.setStock(2000);
console.log(product.getStock());