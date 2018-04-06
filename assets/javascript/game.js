$(document).ready(function() {

var wins
var losses
var random_number

//generate random number between 19 and 120 to be targeted
random_number = Math.floor(Math.random() * 100) +19;

console.log(random_number);


// generate random values between 1 and 12 for each crystal

for(var i = 0; i < 4; i++) {
    var crystal_value = Math.floor(Math.random() * 11) + 1;
    console.log(crystal_value);

    var crystal = $(".crystals").children();
        crystal.attr({
            "class": 'crystal',
            "number": crystal_value
        });

    $(".crystals").append(crystal);
}

//click event for each crystal
$(".crystal").on('click', function () {
    console.log($(this).attr("number"));
});
/*function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function getRandomNumber();
*/
});