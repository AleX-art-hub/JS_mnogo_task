//Zad1.napisat function kotoraya vivodit chisla ot Limit 1 do limit2 v obratnom poryadke
function Fun12(limit1, limit2){
    if(limit1 > limit2){
    let buf;
    buf=limit1;
    limit1=limit2;
    limit2=buf;
    }
while(limit2>= limit1){
    console.log(limit2);
    limit2--;
    }
}
console.log('TASK 1');
Fun12(5,10);


// Zad2. function vivesti chislo naoborot 1234 -> 4321

function Fun2(num){
    let str='', 
        res='';
    str+=num;
    console.log(str);
    let i;
    for(i=str.length-1; i>=0; i--){
        res += str[i];
    }
    return res;
}
console.log('TASK 2');
console.log(Fun2(1234));

//Zad3.
