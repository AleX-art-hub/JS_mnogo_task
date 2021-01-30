const myobj = {
    name: "Tom", 
    surname: "Fox", 
    book: { 
        cover: { 
            pages: 200, 
            format: "84x108", 
            copies: 3000,},
        bname:"java script", 
        bauthor: "M.Myers", 
        byear:2021,},};
myobj.name
"Tom"
myobj.surname
"Fox"
myobj.book.cover.pages
200
myobj.book.bname
"java script"
myobj.book.bauthor
"M.Myers"
myobj.book.byear
2021
let {name}=myobj

let res = myobj.name

let {name:res}= myobj

myobj.name
"Tom"
let {book:{cover:bookpages}}=myobj

console.log(bookpages);
//{pages: 200, format: "84x108", copies: 3000}
console.log(res);
"Tom"
console.log(bookpages);
//{pages: 200, format: "84x108", copies: 3000}
let {book:{cover:{pages:bookpages}}}=myobj
console.log(bookpages);
200

//----------------------------------------------------
let object11= {
    name:"Ann",
    surname: "Fox",
};

let object22= {
    name:"Kate",
    age: 25,
};
undefined
let resobj = {... object11, ...object22};
undefined
console.log(resobj)
//{name: "Kate", surname: "Fox", age: 25}
//------------------------------------------------------