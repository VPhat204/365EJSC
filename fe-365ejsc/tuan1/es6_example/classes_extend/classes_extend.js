class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}