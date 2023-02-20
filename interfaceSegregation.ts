    interface IProductRepositories
    {


    }
    interface IReadProductRepository
    {
        getAll();
        getById(id:number);
    }
    interface IWriteProductRepository
    {
        uptDate(data:string);
        delete(id:number);
    }
    class ProductRepositories implements IWriteProductRepository , IReadProductRepository
    {
        uptDate(data: string) {
            throw new Error("Method not implemented.");
        }
        delete(id: number) {
            throw new Error("Method not implemented.");
        }
        getAll() {
            throw new Error("Method not implemented.");
        }
        getById(id: number) {
            throw new Error("Method not implemented.");
        }

    } 


