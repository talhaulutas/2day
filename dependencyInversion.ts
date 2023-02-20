//High level modüle
class ProductService
{
    _productRepository:IProductRepository
    constructor(productRepository:IProductRepository){
        this._productRepository = productRepository;
    }
    Add(data:string)
    {
        this._productRepository.addToLog(data);
    }
}
interface IProductRepository
{
    addToLog(data:string);
}
// Low Level modüle
class ProductRepository implements IProductRepository
{
    addToLog(data:string)
    {
        console.log(data);
    }
}
class ProductRepositoryWithOracle implements IProductRepository
{
    addToLog(data:string)
    {
        console.log(`${data} (oracle)`);
    }
}
let productService = new ProductService(new ProductRepositoryWithOracle());
productService.Add("log 1");
