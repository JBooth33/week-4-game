$(document).ready(function() {

var wins = 0;
var losses = 0;
var random_number;
var your_number = 0;
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
     
}

 crystalValues(); 
       



/*reset the game (game reset is not fully functional.  it is supposed to run after every win and loss.  A new random number is generated, but 4 random numbers are added to the existing 4 numbers in the crystal_values array so that there are 8 values in the array.)*/

function reset() {
    var wins = 0;
    var losses = 0;
    your_number = 0;
    var random_number = Math.floor(Math.random() * 100) +19;
    $("#target").text("Target: " + random_number);
    var crystal_values = [];
    crystalValues();
}

//function for when player wins
function win() {
    wins++
    $("#wins").text("Wins: " + wins);
    reset();
}

//function for when player loses
function lose() {
    losses++
    $("#losses").text("Losses: " + losses);
    reset();
}

//setting click event for blue crystal.  

$("#blue").on('click', function(){
    your_number = your_number + crystal_values[0];
    $("#total").text("New total " + your_number);

        if (your_number === random_number) {
            win();
        } else if (your_number > random_number) {
            lose();
        }
})

//setting click event for green crystal

$("#green").on('click', function(){
    your_number = your_number + crystal_values[1];
    $("#total").text("New total: " + your_number);

        if (your_number === random_number) {
            win();
        } else if (your_number > random_number) {
            lose();
        }
})

//setting click event for yellow crystal

$("#yellow").on('click', function(){
    your_number = your_number + crystal_values[2];
    $("#total").text("New total " + your_number);

        if (your_number === random_number) {
            win();
        } else if (your_number > random_number) {
            lose();
        }
})

//setting click event for red crystal

$("#red").on('click', function(){
    your_number = your_number + crystal_values[3];
    $("#total").text("New total " + your_number);

        if (your_number === random_number) {
            win();
        } else if (your_number > random_number) {
            lose();
        }
})

});

 
