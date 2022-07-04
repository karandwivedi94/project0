$(document).ready(function () {

const numberOfClicks = $('button').click(function(){
    $(this).html(+this.textContent + 1);
console.log(numberOfClicks);
});

});







