//CONCATENATE
function fullsent() {
    let p1, p2, p3, p4, whole;
    p1 = "Something about ";
    p2 = "Stacy's mom... ";
    p3 = "she's really ";
    p4 = "got it going on.";
    whole = p1.concat(p2, p3, p4);
    document.getElementById("concat").innerHTML = whole;
}

//SLICE
function slicemeth() {
    let sentence, section;
    sentence = "All work and no play makes Johnny a dull boy.";
    section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}

//TO UPPERCASE
function toupper() {
    let sentence, effect;
    sentence = "that boy needs jesus";
    effect = sentence.toUpperCase();
    document.getElementById("output").innerHTML = effect;
}

//SEARCH
function search() {
    let sentence, position; 
    sentence = "The quick brown fox jumps over the lazy dog";
    position = sentence.search("fox");
    document.getElementById("out").innerHTML = position;
}

//TO STRING
function stringmeth() {
    let x = 420;
    document.getElementById("numtostring").innerHTML = x.toString();
}

//TO PRECISION
function precisionmeth() {
    let x = 35962.4590827583;
    document.getElementById("precision").innerHTML = x.toPrecision(7);
}

//TO FIXED
function fixedmeth() {
    let x = 4.62972;
    document.getElementById("fixed").innerHTML = x.toFixed(10);
}

//VALUE OF
function valueof() {
    let x, result;
    x = "sup, dawg?";
    result = x.valueOf();
    document.getElementById("value").innerHTML = result;
}