// create global variables for game

var targetScore;
var totalScore = 0;
var winningScore = 0;
var losingScore = 0;

var crystal1;
var crystal2;
var crystal3;
var crystal4;

// targetScore is random number chosen that player must reach
targetScore = (Math.floor(Math.random()*120)+19);

// set function to set random value for crystals
function shuffleGemsValues() {
crystal1 = (Math.floor(Math.random()*12)+1);
crystal2 = (Math.floor(Math.random()*12)+1);
crystal3 = (Math.floor(Math.random()*12)+1);
crystal4 = (Math.floor(Math.random()*12)+1);
}

shuffleGemsValues();
console.log(crystal1)






// show player targetScore on screen (#target-number)
$('#target-number').text(targetScore);

// set function to set game play
function gamePlay(){

  if (totalScore === targetScore){
    winningScore++;
    $('#win-counter').text(winningScore);
    $('#win-or-lost').text('Winner!');
    targetScore=(Math.floor(Math.random()*120)+19);
    $('#target-number').text(targetScore);
    totalScore = 0;
    $('#current-score-counter').text(totalScore);
    shuffleGemsValues();
  }
  else if (totalScore > targetScore){
    losingScore++;
    $('#loss-counter').text(losingScore)
    $('#win-or-lost').text('You Lose');
    targetScore=(Math.floor(Math.random()*120)+19);
    $('#target-number').text(targetScore);
    totalScore = 0;
    $('#current-score-counter').text(totalScore);
    shuffleGemsValues();
  }
}

// on click function for gems
$('#red1').on('click', function(){
	totalScore += crystal1;
	$('#current-score-counter').text(totalScore);
	gamePlay();
});

$('#pink2').on('click', function(){
	totalScore += crystal2;
	$('#current-score-counter').text(totalScore);
	gamePlay();
});

$('#purp3').on('click', function(){
	totalScore += crystal3;
	$('#current-score-counter').text(totalScore);
	gamePlay();
});

$('#blue4').on('click', function(){
	totalScore += crystal4;
	$('#current-score-counter').text(totalScore);
	gamePlay();
});
