'use strict';
//a programming paradigm (style of the code) based on the concept of objects
//we pack data and the corresponding behavior into one block
//4 fundamental principles of OOP:
//1. Abstraction: ignore, hide details that dont matter, allowing us to get an overview of the thing we are implementing
//2. Encapsulation: keeping properties and methods private inside the class, so they are not accessible from outside the class. But some methods can be exposed as a public interface (API)
//3. Inheritance: making all properties and methods of a certain class available to a child class, this allow us to reuse common logic.
//4. Polymorphism: a child class can overwrite a method it inherited from a parent class.

//OOP in JS
//Instances (Objects) are instantiated from a class
//in js OOP is prototypes, so objects are linked to a prototype object
//Prototypal inheritence: the prototype contains methods(behavior) that are accessible to all object linked to that prototype. So basically an instance inheriting from a class!!! Behavior is delegated to the linked prototype object.

//3 ways of implementing prototypal inheritance in js:
//1. constructor function: technique to create objects from a function, this is how built-in objects, like arrays, maps or sets are implemented.
//2. ES6 classes: modern alternative."Syntetic sugar": behind the scenes, ES6 calasses work like constructor functions. They do not behave like classes like in "classical" OOP.
//3. Object.create(): easisest and most straightforward way of linking an object to a prototype object.
//the 4 OOP pillars are still valid here!!!
