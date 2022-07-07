let box1value = $('#box1').text();
let box2value = document.getElementById('checkbox2').innerHTML;
let box3value = document.getElementById('checkbox3').innerHTML;
let box4value = document.getElementById('checkbox4').innerHTML;
let box5value = document.getElementById('checkbox5').innerHTML;
let box6value = document.getElementById('checkbox6').innerHTML;
let box7value = document.getElementById('checkbox7').innerHTML;
let box8value = document.getElementById('checkbox8').innerHTML;
let box9value = document.getElementById('checkbox9').innerHTML;
var totalClicks = 0;
var allGridItems = document.querySelectorAll('[matrix]');
allGridItems.forEach(gridItem => {
gridItem.addEventListener('click',playerClick,{once:false})
})
function playerClick (e){
    const cell = e.target;
    totalClicks ++;
    if (totalClicks % 2 === 0){
        cell.innerText = ("X")   // Change this to image or haduken
    }
    if (totalClicks % 2 !== 0){
        cell.innerHTML = "O" // Change this to image or haduken
    }
    drawFunction();
    gameResult();
}
    var Licks = 0;
    let sum = 0;
const gameResult = function(){
    sum++;
    let x = "X Wins"
    let y = "O Wins"
    if ($("#box1").html() === 'X' && $("#box2").html() === 'X' && $("#box3").html() === 'X'){
         $('#result').html(`${x}`);  
         let yy = console.count ("X Wins")
         displayPlayer1Win();
    }
    if ($("#box4").html() === 'X' && $("#box5").html() === 'X' && $("#box6").html() === 'X'){
         $('#result').html(`${x}`); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box7").html() === 'X' && $("#box8").html() === 'X' && $("#box9").html() === 'X'){
         $('#result').html(`${x}`); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box1").html() === 'X' && $("#box4").html() === 'X' && $("#box7").html() === 'X'){
         $('#result').html(`${x}`); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box2").html() === 'X' && $("#box5").html() === 'X' && $("#box8").html() === 'X'){
         $('#result').html(`${x}`); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box3").html() === 'X' && $("#box6").html() === 'X' && $("#box9").html() === 'X'){
         $('#result').html(`${x}`); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box1").html() === 'X' && $("#box5").html() === 'X' && $("#box9").html() === 'X'){
         $('#result').html(`${x}`); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box3").html() === 'X' && $("#box5").html() === 'X' && $("#box7").html() === 'X'){
         $('#result').html(`${x}`); 
         console.count ("X Wins");
         displayPlayer1Win(); 
    }
    if ($("#box1").html() === 'O' && $("#box2").html() === 'O' && $("#box3").html() === 'O'){
        $('#result').html(`${y}`); 
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box4").html() === 'O' && $("#box5").html() === 'O' && $("#box6").html() === 'O'){
        $('#result').html(`${y}`); 
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box7").html() === 'O' && $("#box8").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`); 
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box1").html() === 'O' && $("#box4").html() === 'O' && $("#box7").html() === 'O'){
        $('#result').html(`${y}`); 
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box2").html() === 'O' && $("#box5").html() === 'O' && $("#box8").html() === 'O'){
        $('#result').html(`${y}`); 
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box3").html() === 'O' && $("#box6").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`); 
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box1").html() === 'O' && $("#box5").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`); 
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
    if ($("#box3").html() === 'O' && $("#box5").html() === 'O' && $("#box7").html() === 'O'){
        $('#result').html(`${y}`); 
        console.count ("Y Wins");
        displayPlayer2Win() 
    }
};
// function to Start a new round
document.getElementById("newroundbutton").onclick = function() {newRoundFunction()};
function newRoundFunction() {
  document.getElementById("box1").innerHTML = (" ");
  document.getElementById("box2").innerHTML = (" ");
  document.getElementById("box3").innerHTML = (" ");
  document.getElementById("box4").innerHTML = (" ");
  document.getElementById("box5").innerHTML = (" ");
  document.getElementById("box6").innerHTML = (" ");
  document.getElementById("box7").innerHTML = (" ");
  document.getElementById("box8").innerHTML = (" ");
  document.getElementById("box9").innerHTML = (" ");
  document.getElementById("result").innerHTML = ("Who wins?");
 totalClicks = 0;
 displayRoundNumber();
}
//Function if it's a draw
const drawFunction = function(){
    let x = "X Wins"
    let y = "O Wins"
    if (totalClicks %9 === 0 && $('#result').html()!==x && $('#result').html()!==y ){
        $('#result').html(`It's a draw`)
    }
}
//Appending score
var player1Wins = 0;
function displayPlayer1Win()
{
    player1Wins++;
    $('#player1result').html(player1Wins);
}
var player2Wins = 0;
function displayPlayer2Win()
{
    player2Wins++;
    $('#player2result').html(player2Wins);
}
var numberOfRounds = 1;
function displayRoundNumber(){
    numberOfRounds++;
    $('#roundnumber').text(numberOfRounds)
}


// Things to build(Importance >>> Least)
// Make code Dryer where repating yourslef, add loops etc
// Complete ReadMe file
// CSS STYLING
// centre playiing area, bckground basic styling
// add hover / show 
// Add images to the X and O (which can be changed later)
// // new round shouldn't show select, maybe it should be blank? IMPORTANT
// Street Fighter themed