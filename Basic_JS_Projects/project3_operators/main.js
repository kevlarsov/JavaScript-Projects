//1ST ALERT, RANDOM # -100
window.alert(Math.random() * 100);

//2ND ALERT, PI
window.alert(Math.PI);

//ADDITION FUNC
function add() {
    let addition = 563 + 947;
    document.getElementById("math1").innerHTML = "563 + 947 = " + addition;
}

//SUBTRACTION FUNC
function sub() {
    let subtraction = 947 - 563;
    document.getElementById("math2").innerHTML = "947 - 563 = "  + subtraction;
}

//MULTIPLICATION FUNC
function mult() {
    let multiplication = 947 * 563;
    document.getElementById("math3").innerHTML = "563 x 947 = "  + multiplication;
}

//DIVISION FUNC
function div() {
    let division = 563 / 947;
    document.getElementById("math4").innerHTML = "563 / 947 = "  + division;
}

//COMPLEX MATH FUNC
function comp() {
    let complex = ((563 * 947) / (229 + 4761)) - 4;
    document.getElementById("math5").innerHTML = "= "  + complex;
}

//MODULUS(REMAINDER) FUNC
function mod() {
    let modulus = 947 % 563;
    document.getElementById("math6").innerHTML = "= "  + modulus;
}

//INC/DEC/NEG FUNC
function negInc() {
    let x = 120;
    x++;
    x--;
    document.getElementById("math7").innerHTML = -x;
}