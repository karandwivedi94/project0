
// prevent users from clicking further after a result is called
// Bug: user can click on one element more than once on error and this will still pass
// const preventCheating = function(){
// $('.griditem').click(function(e){
//         const boxes = $('.griditem');
//         const boxesArray = Array.from(boxes);
//         for (i=0;i<boxesArray.length;i++){
//         if ($('#result').html() === "X Wins" || $('#result').html() === "O Wins" || $('#result').html() === "It's a draw" ) 
//         e.stopImmediatePropagation();
//         e.preventDefault();
//     }
//     });
// }
// preventCheating();

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

const allGridItems = document.querySelectorAll('[matrix]');
allGridItems.forEach(gridItem => {
gridItem.addEventListener('click',playerClick,{once:true})
})
function playerClick (e){
    const cell = e.target;
    totalClicks ++;
    if (totalClicks % 2 === 0){
        cell.innerText = ("X")   // Change this to image or haduken
    }
    if (totalClicks % 2 !== 0){
        cell.innerHTML = "Y" // Change this to image or haduken
    }
    whoWins();
    drawFunction();
    
}


// const outcomes = function(){
//     totalClicks++;
//     for (i=0;i<boxesArray.length;i++){
//         if (totalClicks % 2 === 0){
//             boxesArray[i].text("O")
//             }
//             if (totalClicks % 2 !== 0){
//             boxesArray[i].text("O")
//             }
//     }
// }

// const box1Outcomes = function (){
//     totalClicks ++;
//         if (totalClicks % 2 === 0){
//         $('#box1').html(`O`)
//         }
//         if (totalClicks % 2 !== 0){
//         $('#box1').html(`X`)
//         }
// }
// const box2Outcomes = function (){
//     totalClicks ++;
//         if (totalClicks % 2 === 0){
//         $('#box2').html(`O`)
//         }
//         if (totalClicks % 2 !== 0){
//         $('#box2').html(`X`)
//         }
// }
// const box3Outcomes = function (){
//     totalClicks ++;
//         if (totalClicks % 2 === 0){
//         $('#box3').html(`O`)
//         }
//         if (totalClicks % 2 !== 0){
//         $('#box3').html(`X`)
//         }
// }
// const box4Outcomes = function (){
//     totalClicks ++;
//         if (totalClicks % 2 === 0){
//         $('#box4').html(`O`)
//         }
//         if (totalClicks % 2 !== 0){
//         $('#box4').html(`X`)
//         }
// }
// const box5Outcomes = function (){
//     totalClicks ++;
//         if (totalClicks % 2 === 0){
//         $('#box5').html(`O`)
//         }
//         if (totalClicks % 2 !== 0){
//         $('#box5').html(`X`)
//         }
// }
// const box6Outcomes = function (){
//     totalClicks ++;
//         if (totalClicks % 2 === 0){
//         $('#box6').html(`O`)
//         }
//         if (totalClicks % 2 !== 0){
//         $('#box6').html(`X`)
//         }
// }
// const box7Outcomes = function (){
//     totalClicks ++;
//         if (totalClicks % 2 === 0){
//         $('#box7').html(`O`)
//         }
//         if (totalClicks % 2 !== 0){
//         $('#box7').html(`X`)
//         }
// }
// const box8Outcomes = function (){
//     totalClicks ++;
//         if (totalClicks % 2 === 0){
//         $('#box8').html(`O`)
//         }
//         if (totalClicks % 2 !== 0){
//         $('#box8').html(`X`)
//         }
// }
// const box9Outcomes = function (){
//     totalClicks ++;
//         if (totalClicks % 2 === 0){
//         $('#box9').html(`O`)
//         }
//         if (totalClicks % 2 !== 0){
//         $('#box9').html(`X`)
//         }
// }
    //DRYER CODE CAN BE USED HERE!!!!?///////

const winningCombos = [[box1value,box2value,box3value],]

const whoWins = function() {
    if(box1value === "X"){
        console.log("checks");
    }
        
    }

//     var Licks = 0;
//     let sum = 0;
// const gameResult = function(){
//     sum++;
//     let x = "X Wins"
//     let y = "O Wins"
//     if ($("#box1").html() === 'X' && $("#box2").html() === 'X' && $("#box3").html() === 'X'){
//          $('#result').html(`${x}`);  
//          let yy = console.count ("X Wins")

// displayPlayer1Win();         displayPlayer1Win();
//     }
//     if ($("#box4").html() === 'X' && $("#box5").html() === 'X' && $("#box6").html() === 'X'){
//          $('#result').html(`${x}`); 
//          console.count ("X Wins");
//          displayPlayer1Win(); 
//     }
//     if ($("#box7").html() === 'X' && $("#box8").html() === 'X' && $("#box9").html() === 'X'){
//          $('#result').html(`${x}`); 
//          console.count ("X Wins");
//          displayPlayer1Win(); 
//     }
//     if ($("#box1").html() === 'X' && $("#box4").html() === 'X' && $("#box7").html() === 'X'){
//          $('#result').html(`${x}`); 
//          console.count ("X Wins");
//          displayPlayer1Win(); 
//     }
//     if ($("#box2").html() === 'X' && $("#box5").html() === 'X' && $("#box8").html() === 'X'){
//          $('#result').html(`${x}`); 
//          console.count ("X Wins");
//          displayPlayer1Win(); 
//     }
//     if ($("#box3").html() === 'X' && $("#box6").html() === 'X' && $("#box9").html() === 'X'){
//          $('#result').html(`${x}`); 
//          console.count ("X Wins");
//          displayPlayer1Win(); 
//     }
//     if ($("#box1").html() === 'X' && $("#box5").html() === 'X' && $("#box9").html() === 'X'){
//          $('#result').html(`${x}`); 
//          console.count ("X Wins");
//          displayPlayer1Win(); 
//     }
//     if ($("#box3").html() === 'X' && $("#box5").html() === 'X' && $("#box7").html() === 'X'){
//          $('#result').html(`${x}`); 
//          console.count ("X Wins");
//          displayPlayer1Win(); 
//     }
//     if ($("#box1").html() === 'O' && $("#box2").html() === 'O' && $("#box3").html() === 'O'){
//         $('#result').html(`${y}`); 
//         displayPlayer2Win() 
//     }
//     if ($("#box4").html() === 'O' && $("#box5").html() === 'O' && $("#box6").html() === 'O'){
//         $('#result').html(`${y}`); 
//         displayPlayer2Win() 
//     }
//     if ($("#box7").html() === 'O' && $("#box8").html() === 'O' && $("#box9").html() === 'O'){
//         $('#result').html(`${y}`); 
//         displayPlayer2Win() 
//     }
//     if ($("#box1").html() === 'O' && $("#box4").html() === 'O' && $("#box7").html() === 'O'){
//         $('#result').html(`${y}`); 
//         displayPlayer2Win() 
//     }
//     if ($("#box2").html() === 'O' && $("#box5").html() === 'O' && $("#box8").html() === 'O'){
//         $('#result').html(`${y}`); 
//         displayPlayer2Win() 
//     }
//     if ($("#box3").html() === 'O' && $("#box6").html() === 'O' && $("#box9").html() === 'O'){
//         $('#result').html(`${y}`); 
//         displayPlayer2Win() 
//     }
//     if ($("#box1").html() === 'O' && $("#box5").html() === 'O' && $("#box9").html() === 'O'){
//         $('#result').html(`${y}`); 
//         displayPlayer2Win() 
//     }
//     if ($("#box3").html() === 'O' && $("#box5").html() === 'O' && $("#box7").html() === 'O'){
//         $('#result').html(`${y}`); 
//         displayPlayer2Win() 
//     }
// };




//Outcome of each box - CAN be DRY-er


// let allBoxes =[box1value,box2value,box3value,box4value,box5value,box6value,box7value,box8value,box9value];


// $('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').click(function(){
//     if(this.id === 'box1' ){
//     // outcomes();    
//     // box1Outcomes();
//     // gameResult();    
//      }
//       else if(this.id === 'box2'){
//         // outcomes();  
//         // box2Outcomes();
//         // gameResult();
//     }     
//      else if(this.id === 'box3'){
//         // outcomes();  
//         // box3Outcomes();
//         // gameResult();
//     }
//      else if(this.id === 'box4'){
//         // outcomes();  
//         // box4Outcomes();
//         // gameResult();
//     }    
//      else if(this.id === 'box5'){
//         // outcomes();  
//         // box5Outcomes();
//         // gameResult();
//     }    
//      else if(this.id === 'box6'){
//         // outcomes();  
//         // box6Outcomes();
//         // gameResult();
//     }    
//      else if(this.id === 'box7'){
//         // outcomes();  
//         // box7Outcomes();
//         // gameResult();
//     }
//      else if(this.id === 'box8'){
//         // outcomes();  
//         // box8Outcomes();
//         // gameResult();
//     }   
//      else if (this.id === 'box9'){
//         // outcomes();  
//         // box9Outcomes();
//         // gameResult();
//      }
//     drawFunction();

//     });


    

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