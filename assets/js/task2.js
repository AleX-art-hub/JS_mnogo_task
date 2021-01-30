let x;
x=parseInt(prompt('Enter number'));

/*
if(условие){
    //действия по выполнению условию
}

else{
    //действия по НЕ выполнению условию
}
*/

/*
if (условие1){
    //действие по условию1
}
else if(условие2){
    //действие по условию2 (условию1 здесь не выполнено)
}
else if(условие3){
    //действие по условию3 (условию1 и условие 2 здесь не выполнено)
}
else {
    //действие иначе (ни одно условие не было выполнено)
}
*/

// Пример
if(x>10){
    console.log('Число больше 10');//могу писать столько сколько хочу
    console.log('Число больше 10');
    console.log('Число больше 10');
} else{
    console.log('Число меньше 10');
    console.log('Число меньше 10');
}

//Пример
if(x>10){
    console.log('Число больше 10');
}
else if(x<5){
    console.log('Число меньше 5');
}
else {
    console.log('Число от 5 до 10');
}

//Операторы для условия
// знаки меньше(<)
//больше(>)
//меньшеравно(<=) 
//большеравно(>=)
//равноравно(==)
//не равно (!=)

//Пример
if(x==0){
    console.log('x равен 10');
} else{
    console.log('x НЕ равен 10');
}

//Пример четное или не четное число
if(x%2==0){
    console.log('четное');
} else {
   console.log('нечетное'); 
}

//Zadacha1
let sum_sales;
sum_sales=parseFloat(prompt('Enter your sale'));
if(sum_sales>=500){
    sum_sales=sum_sales*1.1;
}
console.log(sum_sales);

//Zadacha2
let price1=10, 
    price2=15,
    count1,
    count2;
let sale=5;
let sum;
let limit= 200;
count1=parseInt(prompt('Enter count of product1'));
count2=parseInt(prompt('Enter count of product2'));
sum = count1*price1 + count2+price2;
if (sum >=limit){
    sum=sum*((100-sale)/100);   
}
console.log(sum);