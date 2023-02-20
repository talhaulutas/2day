class PersonService
{
    _personRepository:IPersonRepository
    constructor(personRepository:IPersonRepository)
    {
        this._personRepository = personRepository;
    }
    Add(name:string)
    {
        this._personRepository.getName(name);
    }

}
interface IPersonRepository
{
    getName(name:string);
}
class PersonRepository implements IPersonRepository
{
    getName(name: string) {
        console.log(name);
    }

}
let personService = new PersonService(new PersonRepository());
personService.Add("ahmet");