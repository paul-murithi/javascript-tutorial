// json, objects and local storage
const dog = {
    name: 'oscar',
    age: 24,
    fun: function sayHello() {
        let age = 23;
        console.log(age);
    }
};
console.log(JSON.stringify(dog));
const prac = JSON.stringify(dog);
console.log(JSON.parse(prac));

localStorage.setItem('message', 'hello');
console.log(localStorage.getItem('message'));

// event listeners

const submit_btn = document.getElementById('submit_button');
submit_btn.addEventListener('dblclick', myFunc);

function myFunc() {
    const head = document.getElementById('heading');
    head.innerText = 'Hello fucker';
}





