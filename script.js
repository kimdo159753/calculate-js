let num1 = document.querySelectorAll(".num")[0];
let num2 = document.querySelectorAll(".num")[1];
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let div = document.querySelector("#div");
let res = document.querySelector("#res");

add.addEventListener("click", addHandler);
sub.addEventListener("click", subHandler);
mul.addEventListener("click", mulHandler);
div.addEventListener("click", divHandler);

function addHandler(e) {
    res.innerHTML = parseFloat(num1.value) + parseFloat(num2.value);
}
function subHandler(e) {
    res.innerHTML = parseFloat(num1.value) - parseFloat(num2.value);
}
function mulHandler(e) {
    res.innerHTML = parseFloat(num1.value) * parseFloat(num2.value);
}
function divHandler(e) {
    res.innerHTML = parseFloat(num1.value) / parseFloat(num2.value);
}
