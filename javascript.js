$(document).ready(function(){
    makeGrid();
    playerTurn();
    $('.header-column0').click(dropPieceZero);
    $('.header-column1').click(dropPieceOne);
    $('.header-column2').click(dropPieceTwo);
    $('.header-column3').click(dropPieceThree);
    $('.header-column4').click(dropPieceFour);
    $('.header-column5').click(dropPieceFive);
    $('.reset_button').click(resetGame);

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

function playerTurn() {
    if(playerNumber % 2 === 0){
        playerChar = 'x';
        $('.whos_turn').text("You're move Player 1!");
        $('.whos_turn').removeClass('player2_turn');
        $('.whos_turn').addClass('player1_turn');
        playerColor = 'lightgreen';
        playerNumber++;
    } else if(playerNumber % 2 === 1){
        playerChar = 'o';
        $('.whos_turn').text("You're move Player 2!");
        $('.whos_turn').removeClass('player1_turn');
        $('.whos_turn').addClass('player2_turn');
        playerColor = '#ffff99';
        playerNumber++;
    }
}

function dropPieceZero(){
    var column = 0;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = playerChar;
        tokenColumn = column;
        tokenRow = row;
        $('#row4-col0').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 1;
        $('#row3-col0').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 2;
        $('#row2-col0').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 3;
        $('#row1-col0').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 4;
        $('#row0-col0').css('background-color', playerColor);
    }
    checkHorizontal();
    checkVert();
    playerTurn();
}

function dropPieceOne(){
    var column = 1;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = playerChar;
        tokenColumn = column;
        tokenRow = row;
        $('#row4-col1').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 1;
        $('#row3-col1').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 2;
        $('#row2-col1').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 3;
        $('#row1-col1').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 4;
        $('#row0-col1').css('background-color', playerColor);
    }
    checkHorizontal();
    checkVert();
    playerTurn();
}

function dropPieceTwo(){
    var column = 2;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = playerChar;
        tokenColumn = column;
        tokenRow = row;
        $('#row4-col2').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 1;
        $('#row3-col2').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 2;
        $('#row2-col2').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 3;
        $('#row1-col2').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 4;
        $('#row0-col2').css('background-color', playerColor);
    }
    checkHorizontal()
    checkVert();
    playerTurn();
}

function dropPieceThree(){
    var column = 3;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = playerChar;
        tokenColumn = column;
        tokenRow = row;
        $('#row4-col3').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 1;
        $('#row3-col3').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 2;
        $('#row2-col3').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 3;
        $('#row1-col3').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 4;
        $('#row0-col3').css('background-color', playerColor);
    }
    checkHorizontal();
    checkVert();
    playerTurn();
}

function dropPieceFour(){
    var column = 4;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = playerChar;
        tokenColumn = column;
        tokenRow = row;
        $('#row4-col4').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 1;
        $('#row3-col4').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 2;
        $('#row2-col4').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 3;
        $('#row1-col4').css('background-color', playerColor);
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 4;
        $('#row0-col4').css('background-color', playerColor);
    }
    checkHorizontal();
    checkVert();
    playerTurn();
}

function dropPieceFive() {
    var column = 5;
    var row = 4;
    if (!masterArrayTwo[row][column]) {
        masterArrayTwo[row][column] = playerChar;
        tokenColumn = column;
        tokenRow = row;
        $('#row4-col5').css('background-color', playerColor);
    } else if (!masterArrayTwo[row - 1][column]) {
        masterArrayTwo[row - 1][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 1;
        $('#row3-col5').css('background-color', playerColor);
    } else if (!masterArrayTwo[row - 2][column]) {
        masterArrayTwo[row - 2][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 2;
        $('#row2-col5').css('background-color', playerColor);
    } else if (!masterArrayTwo[row - 3][column]) {
        masterArrayTwo[row - 3][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 3;
        $('#row1-col5').css('background-color', playerColor);
    } else if (!masterArrayTwo[row - 4][column]) {
        masterArrayTwo[row - 4][column] = playerChar;
        tokenColumn = column;
        tokenRow = row - 4;
        $('#row0-col5').css('background-color', playerColor);
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
        if(masterArrayTwo[e][tokenColumn] == playerChar){
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

    // RESET THE GAME
function resetGame() {
    playerNumber = 0;
    playerChar = null;
    masterArray = [];
    masterArrayTwo = [[],[],[],[],[]];
    tokenColumn = null;
    tokenRow = null;
    playerColor = null;
    $('#mainBody div').css('background-color', "");
    playerTurn();
}

