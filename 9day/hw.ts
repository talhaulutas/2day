class Person {
    id:number;
    name:string;
    surname:string;
    constructor(id:number,name:string,surname:string)
    {
        this.id=id;
        this.name=name;
        this.surname=surname;
    }
}
class PersonRepository implements IPersonRepository
{
    getAll():Person[]
    {
        let PersonList:Person[]=[];
        PersonList.push(new Person(1,"ahmet","şimşek"));
        PersonList.push(new Person(2,"mehmet","yıldız"));
        PersonList.push(new Person(3,"ali","metin"));
        return PersonList;
    }
}
interface IPersonRepository
{
    getAll():Person[];
}
class PersonService
{
    private _personRepository:IPersonRepository;
    constructor(personRepository:IPersonRepository)
    {
        this._personRepository = personRepository;
    }
    getAll():Person[]
    {
        let newPersonList:Person[]=[];
        this._personRepository.getAll().forEach(x=>{
            newPersonList.push(new Person(x.id,x.name,x.surname));
        })
        return newPersonList;
    }
}
class PersonFactory
{
    public CreateRepository():IPersonRepository
    {
        return new PersonRepository;
    }
}
var personService = new PersonService(new PersonFactory().CreateRepository());
personService.getAll().forEach(x=>{
    console.log(`${x.id}-${x.name}-${x.surname}`);
})