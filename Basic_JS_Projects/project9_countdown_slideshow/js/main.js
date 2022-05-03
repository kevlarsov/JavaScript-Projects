//COUNTDOWN
function countdown() {
    let seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        let time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

//SLIDESHOW
//SLIDE INDEX
let slideindex = 1;
showslides(slideindex);

//NEXT, PREV CONTROLS
function plusslides(n) {
    showslides(slideindex += n);
}

//THUMBNAIL IMAGE CONTROLS
function currentslide(n) {
    showslides(slideindex = n);
}

//SLIDE COUNT
function showslides(n) {
    let i, slides, dots;
    slides = document.getElementsByClassName("slides");
    dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideindex = 1}
    if (n < 1) {slideindex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideindex-1].style.display = "block";
    dots[slideindex-1].className += " active";
}