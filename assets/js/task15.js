//--------Prototype---------
//this - na tekuschiy object, element i t.d., ukazatel na samogo sebya

const objectTest = {
    prototype1: "value1",
    prototype2: "value2",
    outThisObject: function(){
        console.log(this);
    }
};

objectTest.outThisObject();
console.log(objectTest);

//--------------------------------------------
function Product(name,price){
    this.name=name;
    this.price=price;
    this.priceForUser =function (coef){
        return this.price+coef;
    } 
}

const product1 = new Product ('ball', 100);
const product2 = new Product ('car', 300);
product1.priceForUser(0.2);
//---------------------------------------------

//Prototypnie nasledovanie

//function konstruktora
function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

const user1=new Person ('Ivan', 'Ivanov', 21);
const user2=new Person ('John', 'Doel', 25);
console.log(user1);
console.log(user2);

//Napisat massiv

function MyArray(){
    this.length = 0;
}
MyArray.prototype = {
    push(value){
        this[this.length++]=value;
    }
};