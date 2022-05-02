function ridefunc() {
    let height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 40) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride!";
}

function votefunc() {
    let age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote!";
}