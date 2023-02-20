var PersonService = /** @class */ (function () {
    function PersonService(personRepository) {
        this._personRepository = personRepository;
    }
    PersonService.prototype.Add = function (name) {
        this._personRepository.getName(name);
    };
    return PersonService;
}());
var PersonRepository = /** @class */ (function () {
    function PersonRepository() {
    }
    PersonRepository.prototype.getName = function (name) {
        console.log(name);
    };
    return PersonRepository;
}());
var personService = new PersonService(new PersonRepository());
personService.Add("ahmet");
