function displayTime () {
    let time = document.getElementById("timeKeeper").value;
    let displayPar = document.getElementById("time-par");
    let personName = document.getElementById("name").value;

    if (time <= 11 && time >= 0) {
        displayPar.innerHTML = `Good morning! ${personName}`;
    }
    else if (time <= 16 && time >= 12) {
        displayPar.innerHTML = `Good afternoon! ${personName}`;
    }
    else if (time <= 23 && time >= 17) {
        displayPar.innerHTML = `Good night! ${personName}`;
    }

    
}