

    // const checkFunction = function(){
    //     console.log ("CHECK!");
    // }
    


   
var totalClicks = 0;

const box1Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box1').html(`O`)
        }
        if (totalClicks % 2 !== 0){
        $('#box1').html(`X`)
        }
}

const box2Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box2').html(`O`)
        }
        if (totalClicks % 2 !== 0){
        $('#box2').html(`X`)
        }
}

const box3Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box3').html(`O`)
        }
        if (totalClicks % 2 !== 0){
        $('#box3').html(`X`)
        }
}

const box4Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box4').html(`O`)
        }
        if (totalClicks % 2 !== 0){
        $('#box4').html(`X`)
        }
}

const box5Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box5').html(`O`)
        }
        if (totalClicks % 2 !== 0){
        $('#box5').html(`X`)
        }
}

const box6Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box6').html(`O`)
        }
        if (totalClicks % 2 !== 0){
        $('#box6').html(`X`)
        }
}

const box7Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box7').html(`O`)
        }
        if (totalClicks % 2 !== 0){
        $('#box7').html(`X`)
        }
}

const box8Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box8').html(`O`)
        }
        if (totalClicks % 2 !== 0){
        $('#box8').html(`X`)
        }
}

const box9Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box9').html(`O`)
        }
        if (totalClicks % 2 !== 0){
        $('#box9').html(`X`)
        }
}
    //DRYER CODE CAN BE USED HERE!!!!?///////
    var Licks = 0;
    let sum = 0;
const gameResult = function(){
    sum++;
    let x = "X Wins"
    let y = "O Wins"
    if ($("#box1").html() === 'X' && $("#box2").html() === 'X' && $("#box3").html() === 'X'){
         $('#result').html(`${x}`);  
         let yy = console.count ("X Wins")

displayPlayer1Win();         displayPlayer1Win();
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
        displayPlayer2Win() 
    }
    if ($("#box4").html() === 'O' && $("#box5").html() === 'O' && $("#box6").html() === 'O'){
        $('#result').html(`${y}`); 
        displayPlayer2Win() 
    }
    if ($("#box7").html() === 'O' && $("#box8").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`); 
        displayPlayer2Win() 
    }
    if ($("#box1").html() === 'O' && $("#box4").html() === 'O' && $("#box7").html() === 'O'){
        $('#result').html(`${y}`); 
        displayPlayer2Win() 
    }
    if ($("#box2").html() === 'O' && $("#box5").html() === 'O' && $("#box8").html() === 'O'){
        $('#result').html(`${y}`); 
        displayPlayer2Win() 
    }
    if ($("#box3").html() === 'O' && $("#box6").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`); 
        displayPlayer2Win() 
    }
    if ($("#box1").html() === 'O' && $("#box5").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`); 
        displayPlayer2Win() 
    }
    if ($("#box3").html() === 'O' && $("#box5").html() === 'O' && $("#box7").html() === 'O'){
        $('#result').html(`${y}`); 
        displayPlayer2Win() 
    }
};


//     let yy = $('#result').html(`${x}`)
//     if (totalClicks % 9 === 0 && xx === "X Wins" ) {
//     $('#result').html(`${draw}`) // weird cause it should say 9 instead of 16
// }

$('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').click(function(){
    if(this.id === 'box1'){
    box1Outcomes();
    gameResult();
     }
      else if(this.id === 'box2'){
        box2Outcomes();
        gameResult();
    }     
     else if(this.id === 'box3'){
        box3Outcomes();
        gameResult();
    }
     else if(this.id === 'box4'){
        box4Outcomes();
        gameResult();
    }    
     else if(this.id === 'box5'){
        box5Outcomes();
        gameResult();
    }    
     else if(this.id === 'box6'){
        box6Outcomes();
        gameResult();
    }    
     else if(this.id === 'box7'){
        box7Outcomes();
        gameResult();
    }
     else if(this.id === 'box8'){
        box8Outcomes();
        gameResult();
    }   
     else if (this.id === 'box9'){
        box9Outcomes();
        gameResult();
     }
    //  else console.log ("It's a draw")
    drawFunction();

    });


// function to Start a new round
document.getElementById("newroundbutton").onclick = function() {newRoundFunction()};
function newRoundFunction() {
  document.getElementById("box1").innerHTML = ("Select");
  document.getElementById("box2").innerHTML = ("Select");
  document.getElementById("box3").innerHTML = ("Select");
  document.getElementById("box4").innerHTML = ("Select");
  document.getElementById("box5").innerHTML = ("Select");
  document.getElementById("box6").innerHTML = ("Select");
  document.getElementById("box7").innerHTML = ("Select");
  document.getElementById("box8").innerHTML = ("Select");
  document.getElementById("box9").innerHTML = ("Select");
  document.getElementById("result").innerHTML = ("Who wins?");
 totalClicks = 0;
 displayRoundNumber();
}

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
// prevent players from playing further if there is an early result
// Add images to the X and O (which can be changed later)
// // new round shouldn't show select, maybe it should be blank? IMPORTANT
// Street Fighter themed