//1
let user = "John Smith";
//2
let users = [ 'name1', 'name2', 'name3'];
users=["Name1 Surname1","Name2 Surname2","Name3 Surname3"];
//3
const user11 = {
    name:"John",
    surname:"Smith",
}
//4
const user1 = {
    name: "AleX",
    surname: "Red",
    fullName: function(){
        return `${this.name} ${this.surname}`
    }
}
//5
function User(name, surname){
    this.name=name;
    this.surname=surname;
}
const user2 = new User("John", "Smith");
//6
class User1{
    constructor(name, surname){
        this.name=name;
        this.surname=surname;
    }
    getFullName(){
        return `${this.name} ${this.surname}`;
    }
}

//-----------------------------------------------------------
//1 variant
class Names{
    constructor (name ="John", surname="Smith", age = 20){
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
}
const user3 = new Names ("John","James",22);
const user4 = new Names ();// ono scopirovalo constructor, kak noviy user
console.log(user3);
console.log(user4);

//2 variant
class Names2{
    constructor(option){
        this.name=option.name || "John";
        this.surname=option.surname || "Smith";
        this.age=option.age || 20;
    }
}
//------------------------------------------------------------
//CLASSI
class Animal {
    constructor(name){
        this.name=name;
    }
    sound(){
        //return this.name
        console.log("I speak");
    }
 }
class Dog extends Animal{
    constructor(name, speed){
        //this.name = name //OSHIBKA!!!!
        super(name); // vizivaetsya constructor RODITELYA (animal)
        this.speed=speed;//novoe svoystvo dlya classa dog
    }
    run(){
        console.log(`Speed of ${this.name} is ${this.speed}`)
    }
    sound(){
        console.log(`${this.name} speak`);
    }
}
const animal1 = new Animal ("SomeAnimal");

const dog1 = new Dog ('Baron',20);
dog1.run();
dog1.sound();



//--------------------------------------------------------
class User20 {
    constructor(name, password, email){//+
        this.name=name;//+
        this.passowrd=password;//+
        this.email=email;//+
    }
    getInfo(){//+
        return `${this.name} ${this.email}`;//-
    }    
}
//--
class stud extends User20{//+
    constructor (name, password, email,marks){//+/-
        super(name, password, email);
        this.marks=marks;
    }
    outMarks(){
        //console.log(` Average score ${this.name} is `);//- eto moya versiya (nepravilno)
        console.log(this.marks);//+
    }
    avMarks(){
        let sum=0;
        for(let i=0; i<this.marks.length; i++){
            sum+=this.marks[i];
        }
        return sum/ this.marks.length
        //return (this.marks.reduce((a,b)=> a+b))/this.marks.length);
    }
}

//--
class teacher extends User20{
    constructor(name, password, email,hours=800, salary){
        super(name, password, email);
        this.hours=hours || 800;
        this.salary=salary;
    }
    funAddMoney(prize){
        if(this.hours>=800){
            this.salary += prize;
        }
    }
    getSalaryTeacher(){
        console.log(this.salary);
    }
}
 const maison = new stud("Maison Mount","1234","boom@gmail.com",[5,4,5,5,5]);
 maison.avMarks();
 console.log(maison.getInfo());
 
 const steeven = new teacher("Gerrard","0000","boom1@gmail.com",1000,25000);
 steeven.getSalaryTeacher();
 steeven.funAddMoney(5000);
 console.log(steeven.getInfo());

//------------------------------------------------------------


class painter{
    static countPainter=0
    constructor(name, info='no info'){
        this.name=name;
        this.info=info;
        
    }
}
class picture {
    constructor(pname, year=2021){
        this.pname=pname;
        this.year=year;
    }
}

//---------------------------------------------------



















//+ eto pravilno; - ne pravilno; +/- pochti)) dlya sebya
//get - eto vzyat
//set - eto zapilit