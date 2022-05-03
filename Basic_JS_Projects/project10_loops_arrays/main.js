//STRING LENGTH
function sl() {
    let text = "Whale hello there";
    let length = text.length;
    document.getElementById("out").innerHTML = length;
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