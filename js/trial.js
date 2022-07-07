// long code to prevent doublec clicking NOT IN USE

//// prevent users from clicking further after a result is called
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

//------------------------------------------------



// LONG CODE TO PRINT OUT 'X' or 'O'

//// const outcomes = function(){
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

//---------------------------------------

// ON CLICK USING IDS's - NOT IN USE

//
// Outcome of each box - CAN be DRY-er




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

// Winning combinations , can be solved using matrices, Work in Progress

//     //DRYER CODE CAN BE USED HERE!!!!?///////

// let box1value = $('#box1').text();
// let box2value = document.getElementById('checkbox2').innerHTML;
// let box3value = document.getElementById('checkbox3').innerHTML;
// let box4value = document.getElementById('checkbox4').innerHTML;
// let box5value = document.getElementById('checkbox5').innerHTML;
// let box6value = document.getElementById('checkbox6').innerHTML;
// let box7value = document.getElementById('checkbox7').innerHTML;
// let box8value = document.getElementById('checkbox8').innerHTML;
// let box9value = document.getElementById('checkbox9').innerHTML;

// const winningCombos = [[box1value,box2value,box3value],[box4value,box5value,box6value],[box7value,box8value,box9value],[box1value,box4value,box7value],[box2value,box5value,box8value],[box3value,box6value,box9value],[box1value,box5value,box9value],[box3value,box5value,box7value],[box1value,box2value,box3value], ]

// const whoWins = function() {
//     if(box1value === "X"){
//         console.log("checks");
//     }
        
//     }


// long function to start new round

////   document.getElementById("box1").innerHTML.style.background= "";
//   document.getElementById("box2").innerHTML = (" ");
//   document.getElementById("box3").innerHTML = (" ");
//   document.getElementById("box4").innerHTML = (" ");
//   document.getElementById("box5").innerHTML = (" ");
//   document.getElementById("box6").innerHTML = (" ");
//   document.getElementById("box7").innerHTML = (" ");
//   document.getElementById("box8").innerHTML = (" ");
//   document.getElementById("box9").innerHTML = (" ");
//   document.getElementById("result").innerHTML = ("Who wins?");
// //   document.getElementById("box1").style.background= "";
//  totalClicks = 0;

//  displayRoundNumber();
// }
//Function if it's a draw

// tried and trid to DRY out wins but oh well

// const boxArrayResults = [[box1,box2,box3],[box4,box5,box6],[box7,box8,box9],[box1,box4,box7],[box2,box5,box8],[box3,box6,box9],[box1,box5,box9],[box3,box5,box7] ]
// for(var i=0;i<boxArrayResults.length;i++){
//     var value = parent[i];
// for (var j = 0; j<parent[i].length; j++){
//     var innerValue = parent[i][j]
//     console.log(innerValue);
// }
// }
    // for(i=0;i<boxArray.length;i++){
    // document.getElementById(boxArray[i]).innerHTML = (" ");
    // document.getElementById(boxArray[i]).style.background= "";
    // }
    // const newGameResult = function(){
    //     const boxArray = ['#box1','#box2','#box3','#box4','#box5','#box6','#box7','#box8','#box9']
    //     for (let i=0; i<boxArray.length;i++);{
    //     let boxValues = $('boxArray[i]').html();
    //         console.log(boxValues);
    //     }}
    //     // console