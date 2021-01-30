/* переменные*/
/*
ключевое слово - let
можем объявлять и инициализировать сразу или после
переприсваивать любое значение и дюбого типа
выполнять любые операции
*/

let x;
let y,z;
x='hello';
y=8;
z=true;
let user = 'Vsyan';
console.log(user);
console.log(x,z,y);
x='world';
console.log(x);
x='Masha';
console.log(x);
x=100;
console.log(x);
//сумирование x and y 
console.log(x+y);
//можно и так
let sum = x+y;
console.log(sum);
x='AleX '
console.log(x + user);

let _ = 100;
let $ = 10;
let result = _ + $;
console.log(result);

let x1 =100, x2=200;
console.log("x1=",x1," x2=",x2);
x1 = x2;
console.log("x1=",x1," x2=",x2);
let x3=300;
x1=x3
console.log("x1=",x1," x2=",x2," x3",x3);
console.log(`x1= ${x1}`);

/*
Типы данных:
number (x=10, x=3,14);
string ("hello", 'Hello world') кавычки не имеют значение две или одна
boolean (true, false)
null
underfined
object
*/

/*КОНСТАНТЫ - не изменяемые
1 инициализация сразу с объявлением
2 нельзя переопределять 
*/
const color_red = 'red';
const pi = 3.1415;
console.log(color_red);

const MY_COLOR = 'BLUE';/*ЕСЛИ ПОСЛЕ КОНСТАНТЫ БУДУТ ВСЕ БОЛЬШЕ БУКВЫ, ОНИ ОТРАЖАТЬСЯ БОЛЬШИМИ*/
const PI = 5.15;
console.log(MY_COLOR);
/* константу переопределить нельзя!!! будет ошибка
MY_COLOR = 'GREEN';
console.log(MY_COLOR):
*/


/*
константа не проинициализирована. ошибка!!!
const USER_AGE;
USER_AGE = 20;
console.log(USER_AGE);
*/

//вот так правильно проинициализировать
const USER_AGE = 25;
console.log(USER_AGE);

//alert()- вывод диалоговое окна сообщение 
//prompt()- диалог. окно ввода информации от пользователя 

//ввод информации
/*
let user_name;
user_name=prompt('Enter your name');
alert(`hello, ${user_name} !`);
console.log(`hello, ${user_name} !`);


let user_num;
user_num = prompt('Enter some number');
console.log(user_num);
*/

/*Операторы*/
let z1,z2,res;
z1=100;
z2=200;
res = z1+z2;
console.log(res);
res = z1*z2;
console.log(res);
res = z1/z2;
console.log(res);
res = z1-z2;
console.log(res);


res = z1+5;
console.log(res);
res = z1-10;
console.log(res);
res = z1*8;
console.log(res);
res = z1/2;
console.log(res);

res = res*10;
console.log('res=', res);
res = res *10;
console.log('res=', res);
//сокращенная запись
//res = res + 10; тоже самое что и res += 10;
//res = res - 10; тоже самое что и res -= 10;
//res = res * 10; тоже самое что и res *= 10;
//res = res / 10; тоже самое что и res /= 10;

let user_num;
user_num = prompt('Enter some number');
console.log(user_num);

