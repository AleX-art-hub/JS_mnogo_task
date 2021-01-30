//Zadacha 1
// Proverit: est li znachenie v massive
let arr = [8,6,25,'h','t'];
let flag = false;
let z = 'h';
for (let i =0; i<arr.length;i++){
    if(arr[i]===z){
        flag = true;
        break;
    }
}
if(flag==true){
    console.log('yes');
}else{
    console.log('no');
}

//Metod s function
function hasElem (arr,elem){  //arr - eto massiv, a elem - eto element v massive
    for(let i=0;i<arr.length; i++){
        if (arr[i]===elem){
            return true;
        }
    }
    return false;
}
console.log(arr,'h');





//Zadacha 2 
//Dano chislo 31. Proverit, ne delitsya li ono na drugoe chislo krome sebya i edenitsy
//nam nuzhno proverit chto 31 ne delitsya n a vse chisla ot 2 do 30
//eslychislo ne delitsya - vivesty False a esly delitsya - true
let num = 31;
flag = false;
for(let i=2;i<=-1; i++){
    if(num%i ===0){
        flag=true;
    }
}
if(flag==true){
    console.log('yes');
}else{
    console.log('no');
}


//Zadacha 3
//Dan massiv s chislami. Proverit est li v nem dva 

//massiv arr
//tekuschiy element arr[i]
//prediduschiy element arr[i-1]
//sleduyuschiy element arr[i+1]

flag = false;
/*
for(let i=1;i<arr.length; i++){
    if(arr[i] ===arr[i+1]){
        flag=true;
        break;
    }
}*/

for(let i=1;i<arr.length; i++){
    if(arr[i] ===arr[i-1]){
        flag=true;
        break;
    }
}

if(flag==true){
    console.log('yes');
}else{
    console.log('no');
}

