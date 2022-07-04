

    // const checkFunction = function(){
    //     console.log ("CHECK!");
    // }
    


   
var totalClicks = 0;

const box1Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box1').html(`X`)
        }
        if (totalClicks % 2 !== 0){
        $('#box1').html(`O`)
        }
}

const box2Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box2').html(`X`)
        }
        if (totalClicks % 2 !== 0){
        $('#box2').html(`O`)
        }
}

const box3Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box3').html(`X`)
        }
        if (totalClicks % 2 !== 0){
        $('#box3').html(`O`)
        }
}

const box4Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box4').html(`X`)
        }
        if (totalClicks % 2 !== 0){
        $('#box4').html(`O`)
        }
}

const box5Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box5').html(`X`)
        }
        if (totalClicks % 2 !== 0){
        $('#box5').html(`O`)
        }
}

const box6Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box6').html(`X`)
        }
        if (totalClicks % 2 !== 0){
        $('#box6').html(`O`)
        }
}

const box7Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box7').html(`X`)
        }
        if (totalClicks % 2 !== 0){
        $('#box7').html(`O`)
        }
}

const box8Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box8').html(`X`)
        }
        if (totalClicks % 2 !== 0){
        $('#box8').html(`O`)
        }
}

const box9Outcomes = function (){
    totalClicks ++;
        if (totalClicks % 2 === 0){
        $('#box9').html(`X`)
        }
        if (totalClicks % 2 !== 0){
        $('#box9').html(`O`)
        }
}
    //DRYER CODE CAN BE USED HERE!!!!?///////
    var Licks = 0;
const gameResult = function(){
    Licks ++;
    let x = "X Wins"
    let y = "O Wins"
    let draw = "It's a draw"
    if ($("#box1").html() === 'X' && $("#box2").html() === 'X' && $("#box3").html() === 'X'){
         $('#result').html(`${x}`);  
    }
    if ($("#box4").html() === 'X' && $("#box5").html() === 'X' && $("#box6").html() === 'X'){
         $('#result').html(`${x}`);  
    }
    if ($("#box7").html() === 'X' && $("#box8").html() === 'X' && $("#box9").html() === 'X'){
         $('#result').html(`${x}`);  
    }
    if ($("#box1").html() === 'X' && $("#box4").html() === 'X' && $("#box7").html() === 'X'){
         $('#result').html(`${x}`);  
    }
    if ($("#box2").html() === 'X' && $("#box5").html() === 'X' && $("#box8").html() === 'X'){
         $('#result').html(`${x}`);  
    }
    if ($("#box3").html() === 'X' && $("#box6").html() === 'X' && $("#box9").html() === 'X'){
         $('#result').html(`${x}`);  
    }
    if ($("#box1").html() === 'X' && $("#box5").html() === 'X' && $("#box9").html() === 'X'){
         $('#result').html(`${x}`);  
    }
    if ($("#box3").html() === 'X' && $("#box5").html() === 'X' && $("#box7").html() === 'X'){
         $('#result').html(`${x}`);  
    }
    if ($("#box1").html() === 'O' && $("#box2").html() === 'O' && $("#box3").html() === 'O'){
        $('#result').html(`${y}`);  
    }
    if ($("#box4").html() === 'O' && $("#box5").html() === 'O' && $("#box6").html() === 'O'){
        $('#result').html(`${y}`);  
    }
    if ($("#box7").html() === 'O' && $("#box8").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`);  
    }
    if ($("#box1").html() === 'O' && $("#box4").html() === 'O' && $("#box7").html() === 'O'){
        $('#result').html(`${y}`);  
    }
    if ($("#box2").html() === 'O' && $("#box5").html() === 'O' && $("#box8").html() === 'O'){
        $('#result').html(`${y}`);  
    }
    if ($("#box3").html() === 'O' && $("#box6").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`);  
    }
    if ($("#box1").html() === 'O' && $("#box5").html() === 'O' && $("#box9").html() === 'O'){
        $('#result').html(`${y}`);  
    }
    if ($("#box3").html() === 'O' && $("#box5").html() === 'O' && $("#box7").html() === 'O'){
        $('#result').html(`${y}`);  
    }
if (Licks === 17 ){
    $('#result').html(`${draw}`) // weird cause it should say 9 instead of 16
}


}



// const increment = function (){
//     var totalClicks = 0; //Tells you who's turn it is. i.e even is player one, odd is player 2.
// // $('button').click(function(){
//     totalClicks +=1;
//     console.log(totalClicks);
//     if (totalClicks % 2 === 0){
//         console.log("player 1 start");
//     };
//     if (totalClicks % 2 !== 0){
//         console.log("player 2 start")
//     };
// };

// let count = 0
// const f = () => {
//   count++
// }
// f()
// f()
// console.log(count);


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
     else if (this.id === 'box9')
        box9Outcomes();
        gameResult();
    });


