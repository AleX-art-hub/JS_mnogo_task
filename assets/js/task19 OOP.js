//classi

class User {
    constructor(name, surname,age){
        this.name = name;
        this.surname=surname;
        this.age= age;
    }
    sayHello() {
        console.log(`Hello, ${this.name} ${this.surname}`);
    }
    getFullName(){
        //console.log(this);
        return`Hello, ${this.name} ${this.surname}`;
    }
    isAdult (){
        return this.age>=18;
    }
}
//sozdanie object
const AleX = new User('AleX', 'Fox', 21);
const Yurik = new User('Yurik','James', 17);

console.log(AleX);
console.log(Yurik);

//sayHell vyzov
AleX.sayHello();
Yurik.sayHello();

//isAdult vyzov
console.log(AleX.isAdult());
console.log(Yurik.isAdult());


//---------------------------------------------------

class Worker {
    #name ='';
    #surname = '';
    #rate = '';
    #days = '';
    constructor(name, surname, rate, days){
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    //getters
    get name (){
        return this.#name;
    }
    get days (){
        return this.#days;
    }
    //setters
    set name(newValue){
        this.#name= newValue;
    }
    set surname(newValue){
        this.#surname= newValue;
    }

    getSalary(){
        return this.rate * this.days; 
    }
}
const worker1 = new Worker('name','surname',450, 24);
const worker2 = new Worker('name','surname',350, 21);
const totalW = worker1.getSalary() + worker2.getSalary();
console.log(totalW);
