//Oblast vidimosty. eto to chto v skoobkah - {} (js)
//Zamikanie. (js)
//Podnyatie peremennih (js)

//Zadacha 1. Prinimaet massiv i vivodit summu nechetnih elementon
/*let array,
sum=0;
array=[3,5,2,8,6,9,13,21];
for (i=0;i<array.length; i=i+2){
    sum+= array[i];
}*/
function Task1(array){
    let res=0;
    for(let i=0; i<array.length; i=i+2){
        res+=array[i];
    }
    return res;
} 
/*let a= [2,7,8,-9,4,6,0,-4,-2,8,1];
let resTask1=Task1(a);
console.log(resTask1);*/



//Zadacha 2. udalit element po ukazannomu index
function Task2(array,index){
    delete array [index];
    return array;
}
//Zadacha 2.1. udalit element po ukazannomu index
function Task2(array,index){
    array.splice(index,1);
}
//Zadacha 3 dobavit element po index
function Task2(array,index, newValue){
    return array.splice(index,0, newValue);
}

let a= [2,7,0,-9,4,6,0,-4,-2,8,1];

console.log('Task1');
let resTask1=Task1(a);
console.log(resTask1);

//console.log('Task2');
//let resTask2=Task2(a,3);
//console.log(resTask2);

console.log('Task2');
let resTask2_2=Task1(a,3);
console.log(resTask2_2);


console.log('Task3');
let resTask3=Task1(a,3, 100);
console.log(resTask3);


//------------------------------------------------------------



