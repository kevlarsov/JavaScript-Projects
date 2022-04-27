function dict() {
    let car1 = {
        year:"2008",
        make:"BMW",
        model:"135i",
        engine:"6 cylinder twin turbo",
        trans:"6 speed manual"
    };
    delete car1.engine;
    document.getElementById("dict1").innerHTML = car1.engine;
    document.getElementById("dict2").innerHTML = car1.year;
}