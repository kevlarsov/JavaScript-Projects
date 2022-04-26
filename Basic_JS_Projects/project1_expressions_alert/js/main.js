//assigned string to var 'x'
let x = "X gon' give it to ya!";

//alert pop-up with var 'x'
window.alert(x);

//concatenated additional string to var 'x' to make var 'y'
let y = x + " He gon' give it to ya! ";

//first body text
document.write(y);

//second body text
document.write("\"And I will strike down upon thee with great vengeance and FURIOUS anger, "
    +"those who attempt to poison and destroy my brothers!\" exclaimed Jules. ");

//multiple variable, one statement
let family = "The Jetsons ", dad = "George ", mom = "Jane ", daughter = "Judy ", son = "Elroy ", dog = "Astro ", maid = "Rosie ";

//third, selected text
document.write(dog);

//random variables
let z = 1794;
let a = 29065;

//expression
document.write(a + z);

//
function displayDate() {
    document.getElementById("result").innerHTML = Date();
}