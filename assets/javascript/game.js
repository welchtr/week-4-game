// create global variables for game

var targetScore;
var totalScore;
var winningScore;
var losingScore;

var crystal1;
var crystal2;
var crystal3;
var crystal4;

// targetScore is random number chosen that player must reach
targetScore =(Math.floor(Math.random()*120)+19);

console.log(targetScore);

// set value for crystals

crystal1 = (Math.floor(Math.random()*12)+1);

console.log(crystal1);

crystal2 = (Math.floor(Math.random()*12)+1);

console.log(crystal2);

crystal3 = (Math.floor(Math.random()*12)+1);

console.log(crystal3);

crystal4 = (Math.floor(Math.random()*12)+1);

console.log(crystal4);


$('#target-number').text(targetScore);
