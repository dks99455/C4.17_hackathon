$(document).ready(function(){
    makeGrid();
    playerTurn();
});
var masterArray = [];
var playerNumber = 0;
var playerChar = 1;

function makeGrid(){
    for(var p = 0; p < 6; p++){
        var headerDiv = $('<div>',{
            class: 'header',
            text: 'Drop Here'
        });
        $('#mainBody').append(headerDiv);
    }
    for(var i = 0; i < 5; i++){
        var divArray = [];
        for(var e = 0; e < 6; e++){
            var newDiv = $('<div>',{
                class: 'row' + i +' ' + 'column' + e,
                text: 'row' + i +' ' + 'column' + e
            });
            $('#mainBody').append(newDiv);
            divArray.push(newDiv);

        }
        masterArray.push(divArray);
    }
    console.log(masterArray);
}

//PLAYER TURN
function playerTurn() {
    if(playerNumber % 2 === 0){
        playerChar = 'x';
        $('').text("Player 1 Turn");
        playerNumber++;
    } else if(playerNumber % 2 === 1){
        playerChar = 'o'
        $('').text("Player 2 Turn");
        playerNumber++;
    }
}

