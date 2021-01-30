//Метод 1
/*const words =[
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
const result = words.filter((word) => word.length > 6);
console.log(result);

//Метод 2, то же самое что и верхнее 
let i, 
  j=0, 
  res = [];
for(i=0;i<words.length; i++){
  if(words[i].length>6){ 
    res[j]=words[i];
    j++;
  }
}
console.log(res);
*/

//--------------------------------------------
/*
//Задача1. Даны два массива. Объеденить их и преобразовать в строку.
//Вариант 1 через метод concat
let a=[2,5,3,4,6];
let b=[20,25,8,11,12];
//ещё методы смотреть на мозила девэлопер ARRAY и погнал
//Вариант 2 
let res1 = a.concat(b).toString();
console.log(res1);
//Метод JOIN
let res2 = a.join()+','+b.join();
console.log(res2);


//Задача2 Создайте массив и отфильтруйте его, удалив все отрицательные и нулевые элементы
let c=[2,-5,3,-4,6,-10,0,8,0-1];
//Метод 1
let res3=[];
let i=0,j=0;
for( i = 0; i < c.length; i++){
  if(c[i]>0){
    res3[j]=c[i];
    j++;
  }
}
console.log(res3);

//Метод 2 ---(array.filter)---
const res4 =c.filter((elem)=> elem>0 );
console.log(res4);
//Метод 3
let d=[2,5,3,4,6,10];



//Задача 3 Получить массим, элементы которого являються фибоначчи. Размер массива(колличество элементов)задает пользователь
let res5 = [];
res5[0]=0;
res5[1]=1;
for(let i=2; i<20; i++){
  res5[i]= res5[i-1]+res5[i-2];
}
console.log(res5);


//метод2 ---(array.fibo)---
function fibo(n){
  if(n<=0) return 0;
  else if(n==1) return 1;
  else return fibo(n-1)+fibo(n-2);
}

let res6=[];
for(let i=0;i<20;i++){
  res6[i]= fibo(i);
}
*/


//for Each
let arr = [12,1,5,7,1,2];
function myPow(base,exp){
  if(exp==1){
    return base;
  }
  return base+myPow(base,exp-1);
}
function myPowArr(currentValue, index,array){
  array[index]= currentValue+100;
} 
arr.forEach(myPowArr);
console.log(arr);

//к каждому элементу добавить 100
function add100(currentValue, index,array){
  array[index]= currentValue+100;
} 
arr.forEach(add100);
console.log(arr);
//к каждому элементу добавить 100
function add100_2(currentValue, index,array){
  array[index]+= 100;
} 
arr.forEach(add100_2);
console.log(arr);
 
//for Each для объектов
const users = [{
  name:'user1',
  age: '20',
},
{
  name:'user2',
  age: '18',
  //inSelected: false,
},
{
  name:'user3',
  age: '17',
  //inSelected: true,     //будет false потомучто установлено внизу всем false
},
{
  name:'user4',
  age: '25',
  //inSelected: false,
},
];console.log(users);

users.forEach(function(elem){
  elem.inSelected=false;
});
//Отфильтровал кто старше 18 (array.filter)
const adultUsers = users.filter(user=> (user.age > 18));
const selectedUsers = users.filter((user)=>user.inSelected==true);
console.log(adultUsers);



//---------------------------Метод array.every---------------------------------
const isEveryUserAdult= users.every(cheackAdult);
function cheackAdult(user){
  return user.age > 18;
}

const isSomeUserAdult= users.some((user)=>user.age>18);










/*
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// Выведет: "Fire,Air,Water"
console.log(elements.join(''));
// Выведет: "FireAirWater"
console.log(elements.join('-'));
// Выведет: "Fire-Air-Water"
*/