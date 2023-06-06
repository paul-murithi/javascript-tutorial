/*
function greet(name) {
    console.log(`hello ${name}`);

    if(!name) {
        console.log('Hi there!');
    }
}
greet('paul murithi');
greet('Simon yang');
greet();
*/

function convertToFahrenheit() {
    let celsius = document.getElementById("temparatureInDegrees").value;
    let fahrenheit = (celsius * 9 / 5) + 32;
    let result = document.getElementById("displayResult");
    result.innerHTML = `Temperature in fahrenheit is ${fahrenheit}`;
}

/*
function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return console.log(fahrenheit);
}
*/
