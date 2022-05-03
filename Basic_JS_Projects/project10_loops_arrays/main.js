//FUNCTION RETURN
let z = dasfunc(372, 904);
document.getElementById("funcreturn").innerHTML = z;

function dasfunc(a, b) {
    return a * b;
}

//OBJECT RETURN
let car = {
    year: "2020 ",
    make: "BMW ",
    model: "M5",
    color: "blue ",
    description : function() {
        return "I wish I drove a " + this.color + this.year + this.make + this.model + "...";
    }
};
document.getElementById("objreturn").innerHTML = car.description();

//STRING LENGTH
function sl() {
    let text = "Whale hello there";
    let length = text.length;
    document.getElementById("out").innerHTML = length;
}

//CONST, PLAYER1 STATS
function constfunc() {
    const player1 = {name:"Kevin Cottrell", team:"CO Avalanche", position:"Defenseman", goals:5, assists:7, PM:38};
    player1.goals = 6;
    player1.fights = 2;
    document.getElementById("const").innerHTML = player1.position + " " + player1.name + " has scored " + player1.goals + " times, assisted on " + player1.assists + " goals, been in " + player1.fights + " fights, and spent " + player1.PM + " minutes in the penalty box this season.";
}

//CUSTOM ARRAY
function arrayfunc() {
    let audi = [];
    audi[0] = "TT/TTS";
    audi[1] = "A3/S3";
    audi[2] = "A4/S4";
    audi[3] = "A5/S5";
    audi[4] = "A6/S6";
    audi[5] = "A7/S7";
    audi[6] = "Q3";
    audi[7] = "Q5/SQ5";
    audi[8] = "Q7/SQ7";
    audi[9] = "Q8/SQ8";
    audi[10] = "R8";
    audi[11] = "RS Models";
    document.getElementById("array").innerHTML = "You chose the following Audi model: " + audi[10] + " ... Great choice!";
}

//CUSTOM FOR LOOP
let cars = ["Audi", "BMW", "Jaguar", "Mercedes-Benz", "Porsche", "Volkswagen"];
let content = "";
let y;
function for_loop() {
    for (y = 0; y < cars.length; y++) {
        content += cars[y] + "<br>";
    }
    document.getElementById("carlist").innerHTML = content;
}

//1-100 WHILE LOOP
function call_loop() {
    let counter = "";
    let x = 1;
    while (x < 101) {
        counter += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = counter;
}