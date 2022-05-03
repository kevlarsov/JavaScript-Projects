//GLOBAL VARS
let x, y;
x = "Loading test results... ";
y = -12;

//TESTS FOR INPUT = "yes"
function testfunc() {
    //LOCAL VARS
    let input, result;
    input = document.getElementById("input").value;
    result = (input == "yes") ? "PASS!":"FAIL!";
    document.getElementById("out").innerHTML = x + result;
}

//TIME-DEPENDENT OUTPUT
function getdate() {
    if (new Date().getHours() < 23) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

//CUSTOM BRANCHED OUTPUT
function rando() {
    if (y > 0) {
        document.getElementById("wubalubadubdub").innerHTML = "You're this week's winner!";
    }
    else {
        document.getElementById("wubalubadubdub").innerHTML = "Better luck next time, pal!"
    }
}

//TIME OF DAY OUTPUT
function timefunc() {
    let time = new Date().getHours();
    let reply;
        if (time < 12 == time > 0) {
            reply = "Morning";
        }
        else if (time >= 12 == time < 17) {
            reply = "Afternoon";
        }
        else {
            reply = "Evening";
        }
    document.getElementById("tod").innerHTML = reply;
}