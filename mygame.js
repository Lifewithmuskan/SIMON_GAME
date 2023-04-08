// var randomNumber= Math.random();
// randomNumber=randomNumber*3;
// randomNumber=Math.floor(randomNumber);

//var gamePattern=[];
//var buttonColours =[ "red", "blue", "green", "yellow"];
//1. Inside game.js create a new function called nextSequence()
//function nextSequence() {

//2. Inside the new function generate a new random number between 0 and 3,
// and store it in a variable called randomNumber
//var randomNumber = Math.floor(Math.random() * 4);


//var randomChosenColour=buttonColours[randomNumber];
  //$("#"+randomChosenColour).css("color","black");
//$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

 //var audio = new Audio(randomChosenColour+".mp3");
//audio.play();

//}

// $( "#myID\\.entry\\[1\\]" ).css( "border", "3px solid red" );
//1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  //$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  //var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  //audio.play();
  //gamePattern.push(randomChosenColour);
  //$("#randomChosenColour".on("click",function(){
     
  //}))





  var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
 var userClickedPattern=[];
 var started=false;
 var level=0;

function nextSequence() {
  level++;
  $("#level-title").text("Level =>"  +level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  //var audio = new Audio(randomChosenColour + ".mp3");
  //audio.play();
  playSound(randomChosenColour);
}

//user pattern that they select!!

$(".btn").click(function(){
var userChosenColour=$(this).attr("id");
userClickedPattern.push(userChosenColour);
 //console.log(userClickedPattern);

})


function playSound(name){
  var audio = new Audio(randomChosenColour + ".mp3");
  audio.play();
}


function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level => "  +level);
    nextSequence();
    started=true;
  }
});

checkAnswer(userClickedPattern.length-1);

function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
  console.log("rightanswer");
}

if(userClickedPattern.length===gamePattern.length)
{
  setTimeout(function(){
    nextSequence();
  },100);
}
 else{
  var audio = new Audio("wrong.mp3");
  audio.play();
  // $("body").addclass(".gameover"). setTimeout(function () {
  //   $("body").removeClass(".gameover");
  // }, 100);

  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("#level-title").text("Game Over, Press Any Key to Restart");
  startOver();
}
  }

  function startOver(){
     level=0;
     gamePattern=[];
     started=false;
  }
