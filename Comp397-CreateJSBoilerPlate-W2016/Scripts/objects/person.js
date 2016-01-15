var objects;
(function (objects) {
    var Person = (function () {
        //Constructor +
        function Person(name) {
            this._name = name;
        }
        //public methods
        Person.prototype.speaks = function () {
            console.log(this._name + " says Hello!");
        };
        return Person;
    })();
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map