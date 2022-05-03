//GLOBAL VAR
let x = "Loading test results... ";

//TESTS FOR INPUT = "yes"
function testfunc() {
    //LOCAL VARS
    let input, result;
    input = document.getElementById("input").value;
    result = (input == "yes") ? "PASS!":"FAIL!";
    document.getElementById("out").innerHTML = x + result;
}