/*//получили доступ к (<div id='id1'>)
let elem_id1 = document.getElementById('id1');
elem_id1.style.background = 'blue';*/

/*
let elem_red= document.querySelector(".red");
let elem_blue= document.querySelector(".blue");
let elem_yellow= document.querySelector(".yellow");
let elem_green= document.querySelector("#green"); 

let div_collection1 = document.querySelectorAll("div>div");

console.log()*/

const my_pattern=/\W/g;

const inputTaskElem = document.querySelector('input[name="task"]');
const createTaskButtonElement = document.getElementById('createTaskButton');
let  isValid = false;

function f(e){
    isValid = my_pattern.test(this.value);
    if(isValid){
        this.classList.remove('invalidStyle');
        this.classList.add('validStyle');
    }else {
        this.classList.add('invalidStyle');
        this.classLIst.remove('validStyle');
    }
}
