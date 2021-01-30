//STRUKTURI DANNIH

//liniyniy poisk

const arr = [14,234,65,23,8,2,654,3];

const indexOf8=find(arr,8);

function find(arr,value){
    for(let i =0; i<arr.length; i++){
        if(value === arr[i]){
            return i;
        }
    }
    return -1;
}
//LIFO
class Stack{
    constructor(maxSize = 10000){
        this._size=0;
        this._maxSize=maxSize;
    }
    get size(){
        return this._size;
    }
    get isEmpty(){
        return this._size===0;
    }
    //Dobavlyaet element
    push(value){
        if(this._size >= this._maxSize){
            throw new RangeError('Stack is overflow');
        }
        this[`_${this._size++}`]= value;
        return this._size;
    }
    //udalil i vernut element
    pop(){
        if(this.isEmpty){
            return;
        }
        const value = this[--this._size]; 
        delete this[this._size];
        return value;
    }
    //vozvrashyaet element posledniy
    pick(){
        if(this.isEmpty){
            return;
        }
        return this[this._size-1];
    }
    [Symbol.iterator](){
        return new StackIterator(this);
    }
}

const stack1 = new Stack(10);
stack1.push(5);
stack1.push(-90);
stack1.push({name:'test'});
stack1.push(1);
stack1.push(12);
//--------------------------------------
function lightCheck(str,options = {
    brackets:{
        '(':')',
        '{':'}',
        '[':']',
    }
}) {
    const bracketsStack = [];
    const brackets=options.brackets;

    for (const s of str){
        if (brackets[s]){
            bracketsStack.push(s);
            continue;
        }
        if (Object.value(brackets).includes(s)) {
            if (brackets[bracketsStack[bracketsStack.length - 1]]==s){
                bracketsStack.pop();
            } else {
                return false;
            }
        }
    }
    return bracketsStack.length==0;
}


//---------------------------------------
const vocabulary = new Map();
vocabulary.set('cat','kot');
vocabulary.set('dog','sobaka');
vocabulary.set('squirrel','belka');
vocabulary.set('create','sozdat');
vocabulary.set('read','chitat');
vocabulary.set('update','obnovit');
vocabulary.set('delete','udalit');

const translate = str => str.split(' ').map((w)=>vocabulary.get(w)).join(' '); 

const str = 'cat dog read squirrel';
console.log(translate(str));

//------------------------------------------
//stack + iterator
class StackIterator {
    constructor(stack){
        this._stack=stack;
        this._start = 0;
    }
    next(){
        if(this._start >=this._stack.size){
            return{
                value: undefined,
                done: true,
            };
        }
        return{
            value: this._stack[`_${this._start}`],
            done: this._start++ === this._stack.size,
        };
    }
}

const stack2 = new Stack();
for(let i=0;i<100; i++){
    stack2.push(i*(Math.random()*100));
}
const array2 = [...stack2];


//SPISOK

class ListItem {
    constructor(value, next=null, prev=null) {
        this.value=value;
        this.next = next;
        this.prev=prev;        
    }
}

class List {
    constructor() {
        this.head=null;
        this.tail = null;
        this.size=0;        
    }
    addBegin(value){
        const newHead = new ListItem (value, this.head, null);
        if(this.head){
            this.head.prev=newHead;
        }
        this.head=newHead;
        if(!this.tail){
            this.tail=newHead;
        }
        this.size++;
    }
    addEnd(value){
        const newTail= new ListItem(value, null, this.tail);
        if(this.tail){
            this.tail.next= newTail;
        }
        this.tail= newTail;
        if(!this.head){
            this.head = newTail;
        }
        this.size++;
    }
    [Symbol.iterator](){
        let current = this.head;
        return{
            next(){
                if(current){
                    const value = current.value;
                    current = current.next;
                    return{
                        value: value,
                        done: false,
                    }
                }
                else{
                    return{
                        done:true,
                    }
                }
            }
        }
    }
}

const list = new List();
list.addEnd("Tom");
list.addEnd(100);
list.addEnd({stud:{name:"John Smith"}});
console.log(list)

//---------------------------------------------
//1**.Sozdat class kotoriy vivodit massiv ispolzuya Symbol.iterator



//2.Sozdat class Stud kotoriy nasleduet class User(name,surname) i imeet 
//svoystvo year-god postupleniya v VUZ. Realizovat getFullName()
//(nasleduya ot User) soderzhit eshe metod getCourse() - vivod kursa studenta 
//ot 1 do 5 i vicheslit kak tekushiy god minus god postupleniya,
//tekushiy god vivesty samostoyatelno.
class User {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    set name(value){
        if(typeof value!=='string'){
            throw new TypeError('User name must be string type');
        }
        this.name=value;
    }
    set surname(value){
        if(typeof value!=='string'){
            throw new TypeError('User surname must be string type');
        }
        this.surname=value;
    }
    get name (){
        return this._name;
    }
    get surname (){
        return this._surname;
    }
    getFullName(){
        return `${this_name}+' '+${this._surname}`
    }
}
 class Stud extends User{
     static count = 0;
     constructor(name, surname, year){
         super(name,surname);
         this._year=year;
         Stud.count++;
    }
     set year(value){
         if(typeof value !=='number'){
             throw new TypeError ('User year must be number type')
         }
         this._year = value;
    }
     get year(){
         return this._year;
    }
    getCourse(){
        return `${this._year}`
    }
 }

//2*. Podschitat kolichestvo studentov (cherez static)

//3. Dan mssiv. Vivesty elementi posle pervogo nulya
let arr2 = [25,3,0,6,1,8,23];
console.log(arr2.slice(arr2.indexOf(0)+1)); //etot variant bolee pravilniy
/* // variant bolle raskritiy vnizu
function find(arr,n){
    if(arr==null){
        return false;
    }else if (n==null){
        return arr[arr.length -1];
    }
    return arr.slice(Math.max(arr.length - n,0));
};
console.log(find(arr,4));*/


//4. dobit 1-cu iz massiva [7,7,7,1,7,7,7,7,7,]
let abc = [7,7,7,1,7,7,7,7,7,];
const indexOf = find(arr,1);
function find(arr,value){
    for(let i=0; i<arr.length; i++){
        if(value==arr[i]){
            return i;
        }
    }
    return -1;
}
console.log(indexOf);


//4* [1,2,3,[4,5[6,7,8,9],10,11,12],13,14,15]
// vsyat 5,8
const a = [1,2,3,[4,5,[6,7,8,9],10,11,12],13,14,15];
const [,,,[,el,[,,el1]]] = a;
console.log(el,el1);

// vsyat [6,7,8,9]
const a1 = [1,2,3,[4,5,[6,7,8,9],10,11,12],13,14,15];
const [,,,[,,[...rest]]]=a1;
console.log(...rest);
// vsyat vse krome 1,2,3
const a2 = [1,2,3,[4,5,[6,7,8,9],10,11,12],13,14,15];
const [,,,...rest1]=a2;
console.log(...rest1);

