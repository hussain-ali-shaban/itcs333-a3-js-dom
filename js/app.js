// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here
document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const errorMsg = document.getElementById("error-msg");
const todoList = document.getElementById("todo-list");
const counter = document.getElementById("counter");
const filterALL= document.getElementById("filter-all");
const filterActive = document.getElementById("filter-active");
const filterDone = document.getElementById("filter-done");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = input.value;

    if (text.trim() == ""){
        errorMsg.classList.remove("hidden");
    }
    else{
        errorMsg.classList.add("hidden");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(text));

        const button = document.createElement("button");
        button.classList.add("delete-btn");
        button.appendChild(document.createTextNode("delete"));
        li.appendChild(button);

        todoList.appendChild(li);
        input.value = "";
    }

    let count = 0; 
    for(let item of todoList.children){
        if (!item.classList.contains("completed")){
            count++;
        }
        
    }
    counter.textContent = count + " items left";
});

todoList.addEventListener("click" , function (e){
    if(e.target.nodeName == "BUTTON"){
        todoList.removeChild(e.target.parentNode);
    }
    else if (e.target.nodeName == "LI"){
        e.target.classList.toggle("completed");
    }

    let count = 0; 
    for(let item of todoList.children){
        if (!item.classList.contains("completed")){
            count++;
        }
        
    }
    counter.textContent = count + " items left";
});

filterALL.addEventListener("click", function (){
    for (let item of todoList.children){
        item.style.display ="";
    }
});

filterActive.addEventListener("click", function () {
    for (let item of todoList.children) {
        if (item.classList.contains("completed")) {
            item.style.display = "none";
        } else {
            item.style.display = "";
        }
    }
});

filterDone.addEventListener("click", function () {
    for (let item of todoList.children) {
        if (item.classList.contains("completed")) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
});

});