/// <reference path="_reference.ts" />

import Person = objects.Person;
import Student = objects.Student;

console.log("Game Started ...");

var person: Person = new Person("Jake");
person.speaks();

var student: Student = new Student("Jake", 300736469);
student.studys();
student.speaks();


