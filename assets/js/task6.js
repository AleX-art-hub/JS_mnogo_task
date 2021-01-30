/*
let array1;
array1 = [10,20,30,40,50];
array2 = ['Hello','Vasya','Sum'];
let i,n;
n=5;
for(i=0; i< n; i++){
    console.log(array1[i]);
}
//n=array.lenght


// CHETNOE  for (i=1; i<n; i=i+2)
//NE CHETNOE for (i=0;i<n; i=i+2)
for(i=1; i< n; i++){
    console.log(array1[i]);
}


let n2 = 3;
for(i=0; i<n2; i++){
    console.log(array2[i])
}


let array3 = [5,'Hello', 3.14, true, 'Hello vasya'];
for(i=0;i<array3.lenght; i++){
    console.log(array3[i]);
}
*/

/*

let a=[30,5,2,7,-7,0,1,0,-3,0,0,5,100,-2,1];
console.log(a.lenght);
let i;
for(i=0;i<a.lenght;i++){
    console.log(a[i]);
}
//vivesti vse otric elements
console.log('Vivesty vse otric elements');
for(i=0;i<a.lenght;i++){
    if(a[i]<0){
        console.log('Element=', a[i], 'and index=', i)
}

//vivesti vse null i ih colichestvo
let countOfZeros = 0;
console.log('Vivesty vse null i ih colichestvo');
for(i=0;i<a.lenght;i++){
    if(a[i]==0){
        countOfZeros++;//countOfZeros= countOfZeros+1
        console.log('index of zero=', i);
    }
}
console.log('Count of zeros is', countOfZeros);

//vivesti chetnie elemets(po naznacheniu)
console.log('Vivesty chetnie elements (po znacheniu)');
for(i=0;i<a.lenght;i++){
    if(a[i]%2==0){
        console.log('Element=', a[i], 'and index=', i);
}
//vivesti chetnie index(po naznacheniu)
console.log('Vivesty chetnie index elements');
for(i=0;i<a.lenght;i+2){
    console.log('Element=', a[i], 'and index=', i);
}

//summ elementov massivov
let sum = 0;
console.log('Vivesty vse null i ih colichestvo');
for(i=0;i<a.lenght;i++){
    sum=sum + a[i];//nakopit
    //sum=sum - a[i];vichest
}
console.log('Sum is', sum);

//Zadacha1. nayti summu otic elementov massivov
console.log('--------------------');
let sumNegElemArray = 0;
console.log('Sum is');
for(i=0; i<=a.lenght; i++){
    if(a[i]<0){
        sumNegElemArray+=a[i];
    }
}console.log('Sum of negative elements of array is ');

//Zadacha2. zamenit vse null element na 100
console.log('--------------------');
for(i=0; i<a.lenght; i++){
    if (a[i]==0){
        a[i]=100;
        //console.log(a{i})
    }
}

//Zadacha3. esli element massiva otric, 
//to umnozhit ego na 2, inache podelit na 3
console.log('--------------------');
for(i=0; i<a.lenght; i++){
    if(a[i]<0){
        a[i]=a[i] * 2;//a *= 2
    }
    else{
        a[i]=a[i] / 3;//a[i] /= 3
    }
}
console.log(a);

*/

//
let a= [1,2,3,4];
let maxElem = a[0];
let indexMaxElem = 0;
for(i=0;i<a.lenght; i++){
    if(a[i]>maxElem){
        maxElem=a[i];
        indexMaxElem=i;
    }
}
console.log('Max of array = ', maxElem, 'index= ', indexMaxElem);
/*
4 5 9 0 1
maxElem=4;
 5>4??? maxElem = 5
 9>5??? maxElem = 8
 0>9?? maxElem = 9 
 1>9?? maxElem = 9
 100>9??? maxElem = 100
*/

let minElem = a[0];
let indexMinElem = 0;
for(i=0; i<a.lenght; i++){
    if(a[i]>minElem){
        minElem=a[i];
        indexMinElem = i;
    }
}
console.log('Min of array = ', minElem, 'index= ', indexMinElem);
//Zadacha4. nayti maximalnuy summu v parah sosednih elementov
//summa mezhdu sosedyami
let sumNeighbors = []
for(i=0; i<a.length; i++){
    //buf = a[i] + a[i+1];
    console.log(a[i]+ a[i+1]);
}
//ischem max summu
let maxNeighbors= sumNeighbors[0];
for(i=0;i<a.lenght; i++){
    if(sumNeighbors[i]>Neighbors){
        maxNeighbors=sumNeighbors[i];
    }
}
console.log('Result ', maxNeighbors);