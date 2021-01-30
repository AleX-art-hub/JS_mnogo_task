/*let test = 150;
let copyTest= test;
console.log(test, copyTest);

null +1==1 - True
undefined +1 == NaN - false
null == '0' - false
undefined == null - true



let num = prompt('Num:');
if(typeof(num == 'number')){
    console.log("true");
}
else{
    console.log("false");
}

function(limit1, limit2, step){
    let resArray = [-2,2];
    let x= limit1;
    for(x; x <=limit2; x += step){
        y.push(-2.4*x**2+5*x - 3);
    }
    return y;
}*/

//Vivesti zvyozdi
/*limit =5;
str='';
while(limit>=0){
    for (i=0; i<limit; i++){
        str+= '*';
    }
    console.log(str);
    limit--;
}*/





 //Proverit pravilnost slozheniya chisel polzovatelem.

/*lea value1 = Math.round(Math.random()*100);
lea value2 = Math.round(Math.random()*100);
qSum(value1, value2);
function qSUm(a,b){    //podtyanulis chisla value1 i value2
    let res = a+b;
    let userAnswer = Number (prompt (`${a}+ ${b}= ?`));
    if (res==userAnswer){
        alert (`Yes! It is ${res}`);
    return true;
} else {
    alert (`Wrong! It is ${res}`);
    return false;
}
}*/





//Opredelit sezon goda po mesyacu

/*let month = Number (prompt('Month:'));
switch (month){
    case 1:console.log('Winter'); break
    case 2:console.log('Winter'); break
    case 3:console.log('Spring'); break
    case 4:console.log('Spring'); break
    case 5:console.log('Spring'); break
    case 6:console.log('Summer'); break
    case 7:console.log('Summer'); break
    case 8:console.log('Summer'); break
    case 9:console.log('Autumn'); break
    case 10:console.log('Autumn'); break
    case 11:console.log('Autumn'); break
    case 12:console.log('Winter'); break
}*/

/*function fun(num){
    let str='', 
        res='',
    str+=num;
    console.log(str);
    let i;
    for(i=str.length-1; i>=0; i--){
        res += str[i];

    }
    return res;
}
console.log(fun(1234567));*/

//INDEXOF---------------
/*Vse nulli v massive i ih indexi
console.log('INDEXOF---------------');
let a = [];
let a1=[0,27,110,32,0,57,0,4,3,8,0];
let elem = 0
let index = a1.indexOf(elem);
while(index !=-1){
    a.push(index);
    index = a1.indexOf(elem, index+1);
}
console.log(a);*/

//index pervogo nulevogo elementa
arr =[27,110,32,0,57,0,4,3,8,0];
zero =arr.indexOf(0);
console.log(zero);


//CONCAT----------------
console.log('CONCAT---------------');

let arr1 = [1,3,5,8,6],
    arr2 = [2,4,7,9],
    arr3 = [11,13,15,18];
let arr4 = arr1.concat(arr2,arr3);
console.log(arr4);

//EVERY-----------------
console.log('EVERY-----------------');

arr8 = [11,13,0,15,0,0,18];
let zero1 = arr.every(x=> x == 0);
console.log(zero)



//FILL--------------------
console.log('FILL-----------------');

console.log(Array(10).fill('*'));



//FILTER------------------
console.log('FILTER-----------------');

let arr10 = [22,'reverse', true, 'BOLT', 'New Year', 100];
console.log(arr10.filter(elem=> typeof(elem)=='string'));

//FIND-----------------------
console.log('FIND-----------------');

let arr11 = [10,13,-12,5,-22]
console.log(arr11.find(elem => elem <0));

//forEach---------------------------


//JOIN--------------
console.log('JOIN-----------------');

let num1 = [1,2,3,4,5];
console.log(num1.join(' and '));

//REVERSE---------
console.log('REVERS-----------------');

let array = [1,2,3,4,5,6,7,8,9];
array.reverse();
console.log(array);


//SPLICE-------------------
console.log('SPLICE------------------');

let elem11 = [22,'reverse', 70, 'BOLT', 50, 100];
let del = elem11.splice(3,1);
console.log(del);

let elem10 = [22,'reverse', 70, 'BOLT', 50, 100];
let del1 = elem10.splice(3, 1, "UBER");
console.log(del1);

let elem12 = [22,'reverse', 70, 'BOLT', 50, 100];
let del2 = elem12.splice(2,4);
console.log(del2);

let elem13 = [22,'reverse', 70, 'BOLT', 50, 100];
let del3 = elem13.splice(0,2);
console.log(del3);

let elem14 = [22,'reverse', 70, 'BOLT', 50, 100];
let del4 = elem14.splice(elem14.length-3,elem14.length);
console.log(del4);

//SLICE----------------------
let n1=1,n2=4;
console.log(elem11.slice(n1,n2));