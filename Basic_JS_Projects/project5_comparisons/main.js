//TYPE OF
document.write(typeof "carz");
document.write(typeof 5);

//CONCATENATE
document.write("200" + 33);

//INF
document.write(2E311);

//-INF
document.write(-2E311);

//SIMPLE BOOLEAN
document.write(8 > 2);
document.write(8 < 2);
document.write(2 == 2);
document.write(2 == 1);

//=== CHECKS VALUE AND TYPE
a = 10;
b = 10;
document.write(a === b);

c = 8;
d = "8";
document.write(c === d);

e = "sup";
f = "sup";
document.write(e === f);

g = 9;
h = "nine";
document.write(g === h);

//AND, OR
document.write(6 > 3 && 9 > 6);

document.write(6 > 7 && 9 > 8);

document.write(6 > 7 || 9 > 8);

document.write(6 > 7 || 4 > 8);

//NAN, ISNAN
function dasfunc() {
    document.getElementById("test1").innerHTML = 0/0;
    document.getElementById("test2").innerHTML = isNaN("420");
    document.getElementById("test3").innerHTML = isNaN("jimbo");
}

//NOT OPERATOR
function notfunc() {
    document.getElementById("not1").innerHTML = !(6 > 2);
    document.getElementById("not2").innerHTML = !(6 > 8);
}

//CONSOLE OUTPUT
console.log(6 + 3);
console.log(5 > 4);