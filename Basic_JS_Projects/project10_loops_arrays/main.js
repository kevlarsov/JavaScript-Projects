function call_loop() {
    let counter = "";
    let x = 1;
    while (x < 101) {
        counter += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = counter;
}