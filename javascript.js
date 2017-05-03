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
    checkDiag();
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
    checkDiag();
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
    checkDiag();
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
    checkDiag();
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
    checkDiag();
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
    checkDiag();
    playerTurn();
}

//check functions
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
        if (match == 4) {
            console.log('VICTOLY');
            if (match === 4) {
                console.log('YOU WIN!!!');
            }
        }
        match = 0;
    }
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


function checkDiag() {
    if (masterArrayTwo[masterArrayTwo.length - 4].length !== 0) {
        for(var masterRow = 0; masterRow < masterArrayTwo[tokenRow].length; masterRow++){
            for (var rowIndex = 0, colIndex = masterArrayTwo.length - 4; rowIndex < masterArrayTwo[tokenRow].length, colIndex < masterArrayTwo.length; rowIndex, colIndex) {
                if (masterArrayTwo[colIndex][rowIndex] == playerChar) {
                    match++;
                    rowIndex++;
                    colIndex++;
                } else {
                    rowIndex++;
                    colIndex++;
                    match = 0;
                }
                if (match === 4) {
                    console.log('YOU WIN!!');
                }
            }
            for (var rowIndex = masterArrayTwo[tokenRow].length - 1, colIndex = masterArrayTwo.length - 4; rowIndex >= 0, colIndex > masterArrayTwo.length; rowIndex, colIndex) {
                if (masterArrayTwo[colIndex][rowIndex] == playerChar) {
                    match++;
                    rowIndex--;
                    colIndex++;
                } else {
                    rowIndex--;
                    colIndex++;
                    match = 0;
                }
                if (match === 4) {
                    console.log('YOU WIN!!');
                }
            }
        }
    }
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

