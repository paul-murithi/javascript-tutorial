 const toDoList = [];
 
function renderToDo() {
    //updated to use for each instead of a for loop
    let toDoListHTML = '';

    toDoList.forEach(function(todoObject, index){
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
                
            " class = "js-delete-btn">Delete</button></p>
        </div>
        `
        toDoListHTML += html;
    });

    //Add event listeners to the delete buttons: 
    document.querySelector('div').innerHTML = toDoListHTML;
    document.querySelectorAll('.js-delete-btn').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            toDoList.splice(index, 1);
                renderToDo();
        }  ); 
    })
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