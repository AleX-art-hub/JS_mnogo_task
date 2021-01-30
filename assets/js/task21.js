const myobj = {
    name: "Tom", 
    surname: "Fox", 
    book: { 
        cover: { 
            pages: 200, 
            format: "84x108", 
            copies: 3000,
        }, 
        bname:"java script", 
        bauthor: "M.Myers", 
        byear:2021,
    },
};
//var 1 - classichjeskiy
function getUserFullName(user){
    return `${user.name} ${user.surname}`;
}
//var 2 - bolee noviy
function getUserFullName2(user){//to chto prohodili v console (viddeo smotri)
    const{name,surname}=user;
    return`${name} ${surname}`;
}
console.log(getUserFullName(myobj));
console.log(getUserFullName2(myobj));

//---------------
function sum1(){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

//--------------------------
