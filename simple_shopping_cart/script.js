var quantity = 0;

function displayQuantity () {
    result.innerHTML = "Cart quantity: " + (quantity);
}
function addToCart () {
     quantity += 1;
     let displayStatus = document.getElementById("status");
     displayStatus.innerHTML = "1 product added to cart! " + "Cart quantity: " + (quantity);
}
function addPlusTwo () {
    quantity += 2;
    let displayStatus = document.getElementById("status");
    displayStatus.innerHTML = "2 products added to cart! " + "Cart quantity: " + (quantity);
   
}
function addPlusThree () {
    quantity += 3;
    let displayStatus = document.getElementById("status");
    displayStatus.innerHTML = "3 products added to cart! " + "Cart quantity: " + (quantity);
}
function resetCart() {
    quantity = 0;
    let displayStatus = document.getElementById("status");
     displayStatus.innerHTML = "Cart reset, all products removed from the cart! " + "cart quantity: " + (quantity);
}

