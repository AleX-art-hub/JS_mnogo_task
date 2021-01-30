//Zadacha 1 posmotri v strime
const set1 = new Set ([1,2,3,]);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);

const newArr = [1,2,3];
const set3 = new Set (newArr);

let hasElem3, hasElem4;
hasElem3 = set1.has(3);
hasElem4 = set1.has(4);
console.log(hasElem3, hasElem4);


console.log(set1.has(1));

set1.add(4);
set1.add(5);

for(let elem of set1){
    console.log(elem);
}

let sum=0
for(let elem of set1){
    sum += elem
}
console.log(sum);

set1.delete(2);

set1.clear();
//-------------------------------------------------

//Zadacha 2
/*Dani 2 massiva. Sozdayte kolekciu Map iz etih massivov
Poluchite spisok kluchey i znachenie otdelno.
Poluchite tekuschee kolichestvo elementov.
dobavte i udalite element.
Proizvedite poisk po kluchu.*/

//2.1
const arr1 =['usr1', 'user2', 'user3', 'user4'];
const arr2 =[21,18,22,38];
let map1 = new Map();
map1.set(arr1,arr2);
console.log(map1);
// Metod SET (dlinniy)

function mapFromArrays(array1,array2){
    const myMap = new Map();
    let counter = 0;
    for(let i of array1){
        myMap.set(counter, i);
        counter++;
    }
    for(let i of array2){
        myMap.set(counter,i);
        counter++;
    }
    return myMap;
}

// Metod SET (uproshyonniy)
let map1 = new Map();
map1.set(arr1,arr2);
//let map2= new Map([arr1,arr2]);
//map2.set(arr1,arr2);