$(document).ready(function() {

var wins = 0;
var losses = 0;
var random_number;
var crystal_values = [];

//generate random number between 19 and 120 to be targeted
random_number = Math.floor(Math.random() * 100) +19;

console.log(random_number);


// generate random values between 1 and 12 for each crystal

function crystalValues() {
    for (var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * 11) + 1;
        crystal_values.push(num);   
    }
     console.log(crystal_values);
}

 crystalValues(); 
       



//reset the game
function reset() {
    var wins = 0;
    var losses = 0;
    var random_number = Math.floor(Math.random() * 100) +19;
    var crystal_values = [];
    crystalValues();
}

//function for when player wins
function win() {
    wins++
    $("#wins").text(wins);
    reset();
}

//function for when player loses
function lose() {
    losses++
    $("#losses").text(losses);
    reset();
}



});

 /*var crystal = $(".crystals").children();
        crystal.attr({
            "class": 'crystal',
            "number": crystal_value
        });

    $(".crystals").append(crystal);
}

//click event for each crystal
$(".crystal").on('click', function () {
    console.log($(this).attr("number")); */
