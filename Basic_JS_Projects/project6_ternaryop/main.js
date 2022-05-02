//HEIGHT CHECK
function ridefunc() {
    let height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 40) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride!";
}

//AGE CHECK
function votefunc() {
    let age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote!";
}

//OBJECT CONSTRUCTOR
function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
let Jack = new vehicle("Dodge", "Viper", 2020, "red");
let Emily = new vehicle("Jeep", "Trail Hawk", 2018, "black");
let Eric = new vehicle("Ford", "Focus", 2005, "brown");
function carfunc() {
    document.getElementById("new_this").innerHTML = "Jack drives a " + Jack.vehicle_color + " " + Jack.vehicle_year + " " + Jack.vehicle_make + " " + Jack.vehicle_model;
}

//NESTED FUNCTION
function countfunc() {
    document.getElementById("counting").innerHTML = count();
    function count() {
        let starting_point = 9;
        function plusone() {
            starting_point += 1;
        }
        plusone();
        return starting_point;
    }
}