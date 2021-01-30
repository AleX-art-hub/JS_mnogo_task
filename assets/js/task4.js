/*
логические операторы
&& - логическая и
|| - логическое или
! - логическое нет
*/

/*
let x;
x = +prompt();
//делиться на 4 и не делиться на 100
if( x%4 ==0 && x%100 != 0){
    alert('yes');
}else{
    alert('no');
}

//делиться на 4 или не делиться на 100
if( x%4 ==0 || x%100 != 0){
    alert('yes');
}else{
    alert('no');
}
*/

//если число четное и больше 100 поделить на 2б если нет то умножить на 3
 let user_value;
 user_value = +prompt();
 if(user_value % 2 == 0 && user_value >= 100){
     user_value /= 2;
 } else {
     user_value *= 3;
 }
 
/*
 //* если число четное и бьольше 100 поделить его на 2, если четное но меньше 100 вычесть 20, иначе умножить на 3
 if(user_value % 2 == 0 && user_value >= 100){
     user_value /= 2;
 } else if (user_value % 2 == 0 && user_value < 100){ 
     user_value -= 20;
 } else {
     user_value *= 3;
 }
 */

 //1 ar
 /*
 let accessAllowed;
 let age = prompt('Сколько вам лет?');
 if (age>= 18){
    accessAllowed = true;
 } else {
     accessAllowed = false;
 }
 alert(accessAllowed);
 */
// 2var
let age = prompt('Сколько вам лет?');
let accessAllowed = age > 18 ? true : false;

// если число х отрицательное у=0 иначе у=1
let x,y;
y= x<0 ? 0 : 1;