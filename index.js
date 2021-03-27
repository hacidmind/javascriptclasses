
// function Hero(name, level) {
//     this.name = name;
//     this.power = level
// }

class Hero{
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    superPower() {
        return `${this.name} is strong with a power level of ${this.power}`;
    }
}

class Person{
    constructor(name='Joe', age=0) {
        this.name = name;
        this.age = age;
    }
    getGreetings() {
        return `Hi! my name is ${this.name}`;
    }
    getDescription() {
        return `Hi! ${this.name} is ${this.age} `
    }
}

const me = new Person('Adeyemi');
console.log(me);
const you = new Person();
console.log(you);


// Setup constructor to take name and age (default to 0)
// Create a brand new method getDescription(It should take a string) - Hafeez is 26 years old
const her = new Person('Funmi', 25);
console.log(her.getDescription());

// Subclasses
class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return `I major in ${this.major}`
    }
    getDescription() {
        let desc = super.getDescription();
        if (this.hasMajor()) {
            desc += ` and his/her major is ${this.major}`
        }
        return desc
    }
}

const other = new Student('Hafeez', 30, 'chemistry');
console.log(other);
console.log(other.getDescription()); 
console.log(other.hasMajor()); 

class Doctor extends Person{
    constructor(name, age, spec) {
        super(name, age);
        this.spec = spec;
    }
    mySpec() {
        return `. I am a ${this.spec}`
    }
    getGreetings() {
        let greet = super.getGreetings();
        if (this.mySpec()) {
            greet += ` I am an awesome ${this.spec}`
        }
        return greet
    }
}

let doc1 = new Doctor('Hafeez', 50, 'anaesthetist');
console.log(doc1);
console.log(doc1.mySpec());
console.log(doc1.getGreetings());

