var Person = /** @class */ (function () {
    function Person(id, name, surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    return Person;
}());
var PersonRepository = /** @class */ (function () {
    function PersonRepository() {
    }
    PersonRepository.prototype.getAll = function () {
        var PersonList = [];
        PersonList.push(new Person(1, "ahmet", "şimşek"));
        PersonList.push(new Person(2, "mehmet", "yıldız"));
        PersonList.push(new Person(3, "ali", "metin"));
        return PersonList;
    };
    return PersonRepository;
}());
var PersonService = /** @class */ (function () {
    function PersonService(personRepository) {
        this._personRepository = personRepository;
    }
    PersonService.prototype.getAll = function () {
        var newPersonList = [];
        this._personRepository.getAll().forEach(function (x) {
            newPersonList.push(new Person(x.id, x.name, x.surname));
        });
        return newPersonList;
    };
    return PersonService;
}());
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    PersonFactory.prototype.CreateRepository = function () {
        return new PersonRepository;
    };
    return PersonFactory;
}());
var personService = new PersonService(new PersonFactory().CreateRepository());
personService.getAll().forEach(function (x) {
    console.log("".concat(x.id, "-").concat(x.name, "-").concat(x.surname));
});
