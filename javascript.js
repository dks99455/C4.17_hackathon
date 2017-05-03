$(document).ready(function(){
    makeGrid();
    playerTurn();
    $('.header-column0').click(dropPieceZero);
    $('.header-column1').click(dropPieceOne);
    $('.header-column2').click(dropPieceTwo);
    $('.header-column3').click(dropPieceThree);
    $('.header-column4').click(dropPieceFour);
    $('.header-column5').click(dropPieceFive);
});
var playerNumber = 0;
var playerChar = null;
var masterArray = [];
var masterArrayTwo = [[],[],[],[],[]];
var tokenColumn = null;
var tokenRow = null;
var playerColor = null;

function makeGrid(){
    for(var p = 0; p < 6; p++){
        var headerDiv = $('<div>',{
            class: 'header' + '-' +'column' + p,
            text: 'Drop Here'
        });
        $('#mainBody').append(headerDiv);
    }
    for(var i = 0; i < 5; i++){
        var divArray = [];
        for(var e = 0; e < 6; e++){
            var newDiv = $('<div>',{
                id: 'row' + i +'-'+ 'col' + e,
                'data-row': i,
                'data-column': e,
                text: 'row' + i +' ' + 'column' + e,
                'data-value': 0
            });
            $('#mainBody').append(newDiv);
            divArray.push(newDiv);
        }
        masterArray.push(divArray);
    }
}

//PLAYER TURN
function playerTurn() {
    if(playerNumber % 2 === 0){
        playerChar = 'x';
        $('').text("Player 1 Turn");
        playerColor = 'lightgreen';
        playerNumber++;
    } else if(playerNumber % 2 === 1){
        playerChar = 'o';
        $('').text("Player 2 Turn");
        playerColor = '#ffff99';
        playerNumber++;
    }
}

function dropPieceZero(){
    var column = 0;
    var row = 4;
    for(; row >= 0; row--){
        if(!masterArrayTwo[row][column]){
            masterArrayTwo[row][column] = playerChar;
            tokenColumn = column;
            tokenRow = row;
            $('#row'+row+'-col'+column).css('background-color', playerColor);
            break;
        }
    }
    checkHorizontal();
    checkVert();
    playerTurn();
}

function dropPieceOne(){
    var column = 1;
    var row = 4;
    for(; row >= 0; row--){
        if(!masterArrayTwo[row][column]){
            masterArrayTwo[row][column] = playerChar;
            tokenColumn = column;
            tokenRow = row;
            $('#row'+row+'-col'+column).css('background-color', playerColor);
            break;
        }
    }
    checkHorizontal();
    checkVert();
    playerTurn();
}

function dropPieceTwo(){
    var column = 2;
    var row = 4;
    for(; row >= 0; row--){
        if(!masterArrayTwo[row][column]){
            masterArrayTwo[row][column] = playerChar;
            tokenColumn = column;
            tokenRow = row;
            $('#row'+row+'-col'+column).css('background-color', playerColor);
            break;
        }
    }
    checkHorizontal();
    checkVert();
    playerTurn();
}

function dropPieceThree(){
    var column = 3;
    var row = 4;
    for(; row >= 0; row--){
        if(!masterArrayTwo[row][column]){
            masterArrayTwo[row][column] = playerChar;
            tokenColumn = column;
            tokenRow = row;
            $('#row'+row+'-col'+column).css('background-color', playerColor);
            break;
        }
    }
    checkHorizontal();
    checkVert();
    playerTurn();
}

function dropPieceFour(){
    var column = 4;
    var row = 4;
    for(; row >= 0; row--){
        if(!masterArrayTwo[row][column]){
            masterArrayTwo[row][column] = playerChar;
            tokenColumn = column;
            tokenRow = row;
            $('#row'+row+'-col'+column).css('background-color', playerColor);
            break;
        }
    }
    checkHorizontal();
    checkVert();
    playerTurn();
}

function dropPieceFive(){
    var column = 5;
    var row = 4;
    for(; row >= 0; row--){
        if(!masterArrayTwo[row][column]){
            masterArrayTwo[row][column] = playerChar;
            tokenColumn = column;
            tokenRow = row;
            $('#row'+row+'-col'+column).css('background-color', playerColor);
            break;
        }
    }
    checkHorizontal();
    checkVert();
    playerTurn();
}

//check function
var match = 0;
function checkHorizontal() {
    for (var e = 0; e < masterArrayTwo[tokenRow].length; e) {
        if (masterArrayTwo[tokenRow][e] === playerChar) {
            match++;
            e++;
        } else {
            match = 0;
            e++;
        }
        if (match === 4) {
            console.log('YOU WIN!!!');
        }
    }
    match = 0;
}
function checkVert(){
    for(var e =0; e < masterArrayTwo.length; e){
        if(masterArrayTwo[e][tokenColumn] === playerChar){
            match++;
            e++;
        }else{
            e++;
            match = 0;
        }
        if(match === 4){
            console.log('YOU WIN!!');
        }
    }
    match = 0;
}

