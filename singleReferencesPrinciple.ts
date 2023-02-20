namespace srp {
    class ProductRepository {
        productList: Product[] = [];
        add(product: Product) {
            this.productList.push(product)
        }
        remove(id: number) {

        }
        update(product: Product) {

        }
    }
    class ProductPresenter {
        writeToConsole(productList: Product[]) {
            productList.forEach(x => {
                console.log(x);
            })
        }
    }
    class Product {
        id: number;
        name: string;
    }
}
/*anamik model katmanlı mimariye benziyor domain model karışık business logiclerde kullanılıyor. Proje büyüdükçe domain kullanmak 
daha uygun hale geliyor. DomainDrivenDesign Eric Evan incele..
OpenClosed:Gelişime açık ancak gelişime kapalı olma modeli. Interface tanımlanmalı.DesignPatternları incele. liskovu anlamadım..
DependencyInversion:High level modüller low level modüllere abstract olarak bağlanacak.
Bridge design pattern incele.




*/
