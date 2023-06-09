 const toDoList = [];
 
function renderToDo() {
    let toDoListHTML = '';
    for (let i = 0; i < toDoList.length; i++){
        const todoObject = toDoList[i];
        // console.log(todoObject); For testing purposes
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { dueDate} = todoObject;// destructuring
        const { name} = todoObject;

        const html = `
        <div class = "display-par">
            <div class = "display-par">${name}</div>
            <div>${dueDate}</div>
            <button onclick = "
                toDoList.splice(${i}, 1);
                renderToDo();
            ">Delete</button></p>
        </div>
        `
        
        
        toDoListHTML += html;
    }
    document.querySelector('div').innerHTML = toDoListHTML;
}

function addToDo() {
     const inputElement = document.querySelector('input');
     const name = inputElement.value;

     const dateInputElement = document.querySelector('.inputbx-2');
     const dueDate = dateInputElement.value;
     
     toDoList.push({
        // name: name,
        // dueDate: dueDate
            //Shorthand property in JS
        name,
        dueDate
     });
     
     inputElement.value = '';
     dateInputElement.value = '';
     
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