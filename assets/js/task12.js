//1 Vivesti tolko visokostnie god iz diapazona start - end
//2 Vernut pervie N elementi massiva
//3 Vernut poslednie N elementi massiva
//4 Nayti summu elementov massiva(* proizvedenie, summa kvadrata)
//5 Vernut sluchayniy element massiva
//6 Razvernut massiv naoborot
//7 Peremestit element massiva iz odnoy pozicii v druguyu(bez sdviga)
function myFunction1(start, end) {
    let years = [];
    for (let i = start; i <= end; i++) {
        years.push(i);
    }
    let leapYears = [];
    years.forEach(function (y) {
        if (isLeapYears(y)) leapYears.push(y);
    });
    return leapYears;
}
function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    }
    return false;
}

//------------------------------------------------------------
function myFunction2(arr, n) {
    return arr.splice(0, n);
}
//------------------------------------------------------------
function myFunction3(arr, n) {
    return arr.slice(arr.length - n);
}
//------------------------------------------------------------
function myFunction6(arr) {
    return arr.reverse();
}
//------------------------------------------------------------
function myFunction5(arr) {
    let random_index = Math.floor(Math.random() * arr.length);
    let random_element = arr[random_index];
    return random_element;
}
//------------------------------------------------------------
function myFunction7(arr, index1, index2) {
    return arr.splice(index1, 0, arr.splice(index1, 1)[0]);//reshenie v odnu stroku
}
//------------------------------------------------------------
let testArr = [2, 7, 0, -9, 4, 6, 0, -4, -2, 8, 1];
console.log('New Task');
console.log('tesArr', testArr);

console.log('Task2');
const r2 = myFunction2(testArr, 4);
console.log(r2);

console.log('Task3');
const r3 = myFunction3(testArr, 4);
console.log(r3);

console.log('Task5');
const r5 = myFunction5(testArr);
console.log(r5);

console.log('Task6');
const r6 = myFunction6(testArr);
console.log(r6);
    /*
let str='',
    res='';
str+=array;
console.log(str);
let i;
for(i=str.length-1; i>=0; i--){
    res += str[i];
}
return res;
}*/
//console.log(function10(10,9,8,7,6,5,4,3,2,1));

