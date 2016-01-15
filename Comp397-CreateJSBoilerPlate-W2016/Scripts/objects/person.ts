module objects {
    export class Person {
        //private instance variables
        protected _name: string;
        //Constructor +
        constructor(name: string) {
            this._name = name;
        }

        //public methods
        public speaks(): void {
            console.log(this._name + " says Hello!");
        }
    }
}