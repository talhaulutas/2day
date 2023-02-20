abstract class dersler
{
    online():void{}
    abstract sayisal():void;
    abstract sozel():void;
}
class Matematik extends dersler
{
    sayisal(): void {
        console.log("Matematik sayısal bir derstir.");
    }
    sozel(): void {
        throw new Error("sözel değildir.");
    }
    
}
class Türkçe extends dersler
{
    sayisal(): void {
        throw new Error("sayısal değildir.");
    }
    sozel(): void {
        console.log("Türkçe sayısal bir derstir.");
    }
    
}
class Fizik extends dersler
{
    sayisal(): void {
        console.log("Fizik sayısal bir derstir.");
    }
    sozel(): void {
        throw new Error("sözel değildir.");
    }
    
}