 const toDoList = [];
 
function renderToDo() {
    let toDoListHTML = '';
    for (let i = 0; i < toDoList.length; i++){
        const todo = toDoList[i];
        const html = `<p>${todo}</p>`
        
        toDoListHTML += html;
    }
    document.querySelector('div').innerHTML = toDoListHTML;
}

function addToDo() {
     const inputElement = document.querySelector('input');
     const name = inputElement.value;

     toDoList.push(name);
     inputElement.value = '';
     
     renderToDo();
 }

 /*
 const bestTeams = ['Man city', 'Barcelona', 'Brighton', 'Bayern munich', 'Burnley', 'River plate', 'Chelsea'];

 for(let i = 0; i <= bestTeams.length - 1;i++) {
    console.log(bestTeams[i]);
 }
 */
/*
 const numbers = [30, 40, 30];
let result = 0;
for(let i = 0;i < numbers.length;i++) {
    result += numbers[i];
}
// console.log(result);
const doubleNumbers = [];
for(let i = 0;i < numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2);
}
console.log(doubleNumbers);
*/