//Запросить у пользователя число и возвести его в квадрат
/*
let x;
x = prompt ('Введи число');
let res = x * x;
console.log(res);
*/

/*
// среднее aрифметическое двух чисел
let z=25, z1=35;
res = (z + z1)/2;
console.log(res);

// площадь квадрата
let a=25, a1=35;
res = a + a + a + a;
console.log(res);
*/

/*
// унарный минус -
let z = 5;
res= -z;
console.log(res);

// инкремент ++
// тоже самое х++ или х=х+1
let a = 10;
res = ++a;
console.log(res);

// декремент --
// тоже самое х-- или х=х-1
res = --a;
console.log(res);
*/

/*
let z2 = 10;
console.log(z2);
console.log(z2++);
console.log(z2);
console.log(z++2);
*/

// остаток от деления %

/*
1 объявить переменные 'hello user', 10, 3.1415, true и вывести значение в консоль
2 запросить сумму продаж и вывести итог. за месяц происходит увеличение на 10%
3 запросить пользователя 3-х значное число и вывести последнюю цифру
4* запросить пользователя 3-х значное число и вывести сумму цифр
*/ 

// 1
let str ='Hello user', 
    x3=10, 
    x4=3.1415, 
    x5=true;
console.log(str, x3, x4, x5);
console.log('str=', str,'x3=', x3,'x4=', x4,'x5=', x5);
console.log(`str=${str} x3=${x3} x4=${x4} x5= ${x5}`);

//2
let sum_sales = parseFloat(prompt('Enter sum of sales'));
res = 1.1 * sum_sales;
console.log(sum_sales);

//3
let user_value = parseInt(prompt('Enter 3-digits number'));
let n1 = user_value % 10;
console.log(n1);

//4*
//продолжение 3
let n2 = ((user_value % 100) - n1) / 10;
let n3 = parseInt(user_value / 100);
let sum = n1 + n2 + n3;
console.log(sum);


