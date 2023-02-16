class Product
{
    id:number;
    name:string;
    price:number;
    constructor(id:number,name:string,price:number)
    {
        this.id=id;
        this.name=name;
        this.price=price;
    }

}
class ProductRepository implements IProductRepository
{
    getAll():Product[]
    {
        let productList:Product[]=[];
        productList.push(new Product(1,"kalem 1",100));
        productList.push(new Product(2,"kalem 2",200));
        productList.push(new Product(3,"kalem 3",300));
        return productList;

    }
}
class ProductRepositoryWithOracle implements IProductRepository
{
    getAll():Product[]
    {
        let productList:Product[]=[];
        productList.push(new Product(1,"Orackalem 1",100));
        productList.push(new Product(2,"kalem 2",200));
        productList.push(new Product(3,"kalem 3",300));
        return productList;

    }
}
interface IProductRepository{
    getAll():Product[];
}
class ProductService
{
    private _productRepository:IProductRepository;
    readonly _kdv:number=1.18;
    constructor(productRepository:IProductRepository)
    {
        this._productRepository=productRepository;
    }

    getAll():Product[]
    {
        let newProductList:Product[]=[];
        this._productRepository.getAll().forEach(x=>{
            newProductList.push(new Product(x.id,x.name,x.price * this._kdv));
        })
        return newProductList;
    }
}
class ProductFactory
{
    public CreateRepository():IProductRepository
    {
        return new ProductRepository;
    }
    public CreateRepositoryWithOracle():IProductRepository
    {
        return new ProductRepositoryWithOracle;
    }
}


var productService = new ProductService(new ProductFactory().CreateRepositoryWithOracle());
productService.getAll().forEach(x=>{
    console.log(`${x.id} ${x.name} ${x.price}`);
})