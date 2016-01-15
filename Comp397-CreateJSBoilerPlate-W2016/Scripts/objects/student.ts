module objects {
    export class Student extends Person {
        //Private instance Variables
        private _studentNumber: number
        //Constructor
        constructor(name: string, studentNumber: number) {
            super(name);
            this._studentNumber = studentNumber;
        }

        //public methods
        public studys(): void {
            console.log(this._name + " is studying");
        }
    }
} 