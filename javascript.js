$(document).ready(function(){
    makeGrid();
    playerTurn();
    $('.header-column0').on('click', dropPieceZero);
    $('.header-column1').on('click', dropPieceOne);
    $('.header-column2').on('click', dropPieceTwo);
    $('.header-column3').on('click', dropPieceThree);
    $('.header-column4').on('click', dropPieceFour);
    $('.header-column5').on('click', dropPieceFive);
    $('.reset_button').click(resetGame);
    $('.playersButton').on('click', playerNumSwap);
});
var playerNumber = 0;
var numberOfPlayers = 2;
var playerChar = null;
var masterArray = [];
var masterArrayTwo = [[],[],[],[],[]];
var tokenColumn = null;
var tokenRow = null;
var playerColor = null;
var colZeroAllowed = true;
var colOneAllowed = true;
var colTwoAllowed = true;
var colThreeAllowed = true;
var colFourAllowed = true;
var colFiveAllowed = true;
var horNonMatch = 'off';
var vertNonMatch = 'off';
var diagNonMatch = 'off';

function playerNumSwap(){
    if(numberOfPlayers == 2){
        resetGame();
        numberOfPlayers = 3;
        $('.playersButton').text('# of Players: 3');
        horNonMatch = 'on';
        vertNonMatch = 'on';
        diagNonMatch = 'on';
    } else if (numberOfPlayers == 3){
        resetGame();
        numberOfPlayers = 2;
        $('.playersButton').text('# of Players: 2');
        horNonMatch = 'off';
        vertNonMatch = 'off';
        diagNonMatch = 'off';
    }
}

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
                // text: 'row' + i +' ' + 'column' + e,
                'data-value': 0
            });
            $('#mainBody').append(newDiv);
            divArray.push(newDiv);
        }
        masterArray.push(divArray);
    }
}

function playerTurn() {
    if(playerNumber % numberOfPlayers === 0){
        playerChar = 'x';
        $('.whos_turn').text("Your move House Stark!");
        $('.whos_turn').removeClass('player2_turn');
        $('.whos_turn').removeClass('player3_turn');
        $('.whos_turn').addClass('player1_turn');
        playerColor = 'url(images/houseofstark.jpg)';
        playerNumber++;
    } else if(playerNumber % numberOfPlayers === 1){
        playerChar = 'o';
        $('.whos_turn').text("Your move House Arryn!");
        $('.whos_turn').removeClass('player1_turn');
        $('.whos_turn').removeClass('player3_turn');
        $('.whos_turn').addClass('player2_turn');
        playerColor = 'url(images/houseofarryn.jpg)';
        playerNumber++;
    } else {
        playerChar = 'y';
        $('.whos_turn').text("Your move House Lannister");
        $('.whos_turn').removeClass('player1_turn');
        $('.whos_turn').removeClass('player2_turn');
        $('.whos_turn').addClass('player3_turn');
        playerColor = 'url(images/houseoflannister.jpg)';
        playerNumber++;
    }
}

//extra req

function threeDifferent(){
    threeHorizontal();
    threeVert();

    var nonMatch = 0;
    var currentPlayer;
    var secondPlayer;
    var thirdPlayer;
    function threeHorizontal() {
        if(horNonMatch == 'on') {
            for (var e = 0; e < masterArrayTwo[tokenRow].length; e) {
                if (masterArrayTwo[tokenRow][e] !== undefined) {
                    currentPlayer = masterArrayTwo[tokenRow][e];
                    if (masterArrayTwo[tokenRow][e + 1] !== currentPlayer && masterArrayTwo[tokenRow][e + 1] !== undefined) {
                        secondPlayer = masterArrayTwo[tokenRow][e + 1];
                        if (masterArrayTwo[tokenRow][e + 2] !== currentPlayer && masterArrayTwo[tokenRow][e + 2] !== secondPlayer) {
                            if (masterArrayTwo[tokenRow][e + 2] !== undefined) {
                                thirdPlayer = masterArrayTwo[tokenRow][e + 2];
                                console.log('HORIZONTAL TRI-NON-MATCH');
                                horNonMatch = 'off';
                            }
                        }
                    }
                    e++
                } else {
                    e++;
                }
            }
        }
    }
    function threeVert(){
        if(vertNonMatch == 'on') {
            for (var e = masterArrayTwo.length - 1; e >= 0; e) {
                if (masterArrayTwo[e][tokenColumn] !== undefined) {
                    currentPlayer = masterArrayTwo[e][tokenColumn];
                    if (masterArrayTwo[e - 1][tokenColumn] !== currentPlayer && masterArrayTwo[e - 1][tokenColumn] !== undefined) {
                        secondPlayer = masterArrayTwo[e - 1][tokenColumn];
                        if (masterArrayTwo[e - 2][tokenColumn] !== currentPlayer && masterArrayTwo[e - 2][tokenColumn] !== secondPlayer) {
                            if (masterArrayTwo[e - 2][tokenColumn] !== undefined) {
                                thirdPlayer = masterArrayTwo[e - 2][tokenColumn];
                                console.log('VERTICAL TRI-NON-MATCH');
                                vertNonMatch = 'off';
                            }
                        }
                    }
                    e--;
                } else {
                    e--;
                }
            }
        }
    }
    function threeDiag() {
        if (masterArrayTwo[masterArrayTwo.length - 1].length !== 0) {
            for (var masterRow = 0; masterRow < masterArrayTwo[tokenRow].length; masterRow++) {
                for (var rowIndex = masterRow, colIndex = masterArrayTwo.length - 1; rowIndex < masterArrayTwo[tokenRow].length, colIndex >= 0; rowIndex, colIndex) {
                    if (masterArrayTwo[colIndex][rowIndex] !== undefined) {
                        currentPlayer = masterArrayTwo[colIndex][rowIndex];
                        if (masterArrayTwo[colIndex - 1][rowIndex + 1] !== currentPlayer && masterArrayTwo[colIndex - 1][rowIndex + 1] !== undefined) {
                            secondPlayer = masterArrayTwo[colIndex - 1][rowIndex + 1];
                            if (masterArrayTwo[colIndex - 2][rowIndex + 2] !== currentPlayer && masterArrayTwo[colIndex - 2][rowIndex + 2] !== secondPlayer) {
                                if (masterArrayTwo[colIndex - 2][rowIndex - 2] !== undefined) {
                                    thirdPlayer = masterArrayTwo[colIndex - 2][rowIndex - 2];
                                    console.log('DIAGONAL TRI-NON-MATCH');
                                    diagNonMatch = 'off';
                                }
                            }
                        }
                        rowIndex++;
                        colIndex--;
                    } else {
                        rowIndex++;
                        colIndex--;
                    }
                }
                for (var rowIndex = masterArrayTwo[tokenRow].length - (1 + masterRow), colIndex = masterArrayTwo.length - 1; rowIndex >= 0, colIndex >= 0; rowIndex, colIndex) {
                    if (masterArrayTwo[colIndex][rowIndex] !== undefined) {
                        currentPlayer = masterArrayTwo[colIndex][rowIndex];
                        if (masterArrayTwo[colIndex - 1][rowIndex - 1] !== currentPlayer && masterArrayTwo[colIndex - 1][rowIndex - 1] !== undefined) {
                            secondPlayer = masterArrayTwo[colIndex - 1][rowIndex - 1];
                            if (masterArrayTwo[colIndex - 2][rowIndex - 2] !== currentPlayer && masterArrayTwo[colIndex - 2][rowIndex - 2] !== secondPlayer) {
                                if (masterArrayTwo[colIndex - 2][rowIndex - 2] !== undefined) {
                                    thirdPlayer = masterArrayTwo[colIndex - 2][rowIndex - 2];
                                    console.log('DIAGONAL TRI-NON-MATCH');
                                    diagNonMatch = 'off';
                                }
                            }
                        }
                        rowIndex--;
                        colIndex--;
                    } else {
                        rowIndex--;
                        colIndex--;
                    }
                }
            }
            // }
            // if (masterArrayTwo[masterArrayTwo.length - 2].length !== 0) {
            //     for(var masterRow = 0; masterRow < masterArrayTwo[tokenRow].length; masterRow++){
            //         for (var rowIndex = masterRow, colIndex = masterArrayTwo.length - 4; rowIndex < masterArrayTwo[tokenRow].length, colIndex < masterArrayTwo.length; rowIndex, colIndex) {
            //             if (masterArrayTwo[colIndex][rowIndex] == playerChar) {
            //                 nonMatch++;
            //                 rowIndex++;
            //                 colIndex++;
            //             } else {
            //                 rowIndex++;
            //                 colIndex++;
            //                 nonMatch = 0;
            //             }
            //             if (nonMatch === 4) {
            //                 console.log('SPECIAL');
            //                 nonMatch = 0;
            //             }
            //         }
            //         nonMatch = 0;
            //         for (var rowIndex = masterArrayTwo[tokenRow].length - (1 + masterRow), colIndex = masterArrayTwo.length - 4; rowIndex >= 0, colIndex < masterArrayTwo.length; rowIndex, colIndex) {
            //             if (masterArrayTwo[colIndex][rowIndex] == playerChar) {
            //                 nonMatch++;
            //                 rowIndex--;
            //                 colIndex++;
            //             } else {
            //                 rowIndex--;
            //                 colIndex++;
            //                 nonMatch = 0;
            //             }
            //             if (nonMatch === 4) {
            //                 console.log('SPECIAL');
            //                 nonMatch = 0;
            //             }
            //         }
            //         nonMatch = 0;
            //     }
            // }
            // if (masterArrayTwo[masterArrayTwo.length - 3].length !== 0) {
            //     for(var masterRow = 0; masterRow < masterArrayTwo[tokenRow].length; masterRow++){
            //         for (var rowIndex = masterRow, colIndex = masterArrayTwo.length - 3; rowIndex < masterArrayTwo[tokenRow].length, colIndex < masterArrayTwo.length; rowIndex, colIndex) {
            //             if (masterArrayTwo[colIndex][rowIndex] == playerChar) {
            //                 nonMatch++;
            //                 rowIndex++;
            //                 colIndex++;
            //             } else {
            //                 rowIndex++;
            //                 colIndex++;
            //                 nonMatch = 0;
            //             }
            //             if (nonMatch === 3) {
            //                 console.log('SPECIAL');
            //                 nonMatch = 0;
            //             }
            //         }
            //         nonMatch = 0;
            //         for (var rowIndex = masterArrayTwo[tokenRow].length - (1 + masterRow), colIndex = masterArrayTwo.length - 3; rowIndex >= 0, colIndex < masterArrayTwo.length; rowIndex, colIndex) {
            //             if (masterArrayTwo[colIndex][rowIndex] == playerChar) {
            //                 nonMatch++;
            //                 rowIndex--;
            //                 colIndex++;
            //             } else {
            //                 rowIndex--;
            //                 colIndex++;
            //                 nonMatch = 0;
            //             }
            //             if (nonMatch === 3) {
            //                 console.log('SPECIAL');
            //                 nonMatch = 0;
            //             }
            //         }
            //         nonMatch = 0;
            //     }
        }
    }
}



function dropPieceZero(){
    if(colZeroAllowed === false){
        return;
    }else{
        var column = 0;
        var row = 4;
        for(; row >= 0; row--){
            if(!masterArrayTwo[row][column]){
                masterArrayTwo[row][column] = playerChar;
                tokenColumn = column;
                tokenRow = row;
                $('#row'+row+'-col'+column).css('background-image', playerColor);
                break;
            }
        }
        checkHorizontal();
        checkVert();
        checkDiag();
        threeDifferent();
        playerTurn();
        if(masterArrayTwo[0][0] && masterArrayTwo[1][0] && masterArrayTwo[2][0] && masterArrayTwo[3][0] && masterArrayTwo[4][0]){
            colZeroAllowed = false;
        }
    }
}

function dropPieceOne(){
    if(colOneAllowed === false){
        return;
    }else{
        var column = 1;
        var row = 4;
        for(; row >= 0; row--){
            if(!masterArrayTwo[row][column]){
                masterArrayTwo[row][column] = playerChar;
                tokenColumn = column;
                tokenRow = row;
                $('#row'+row+'-col'+column).css('background-image', playerColor);
                break;
            }
        }
        checkHorizontal();
        checkVert();
        checkDiag();
        threeDifferent();
        playerTurn();
        if(masterArrayTwo[0][1] && masterArrayTwo[1][1] && masterArrayTwo[2][1] && masterArrayTwo[3][1] && masterArrayTwo[4][1]){
            colOneAllowed = false;
        }
    }
}

function dropPieceTwo(){
    if(colTwoAllowed === false){
        return;
    }else{
        var column = 2;
        var row = 4;
        for(; row >= 0; row--){
            if(!masterArrayTwo[row][column]){
                masterArrayTwo[row][column] = playerChar;
                tokenColumn = column;
                tokenRow = row;
                $('#row'+row+'-col'+column).css('background-image', playerColor);
                break;
            }
        }
        checkHorizontal();
        checkVert();
        checkDiag();
        threeDifferent();
        playerTurn();
        if(masterArrayTwo[0][2] && masterArrayTwo[1][2] && masterArrayTwo[2][2] && masterArrayTwo[3][2] && masterArrayTwo[4][2]){
            colTwoAllowed = false;
        }
    }
}

function dropPieceThree(){
    if(colThreeAllowed === false){
        return;
    }else{
        var column = 3;
        var row = 4;
        for(; row >= 0; row--){
            if(!masterArrayTwo[row][column]){
                masterArrayTwo[row][column] = playerChar;
                tokenColumn = column;
                tokenRow = row;
                $('#row'+row+'-col'+column).css('background-image', playerColor);
                break;
            }
        }
        checkHorizontal();
        checkVert();
        checkDiag();
        threeDifferent();
        playerTurn();
        if(masterArrayTwo[0][3] && masterArrayTwo[1][3] && masterArrayTwo[2][3] && masterArrayTwo[3][3] && masterArrayTwo[4][3]){
            colThreeAllowed = false;
        }
    }
}

function dropPieceFour(){
    if(colFourAllowed === false){
        return;
    }else{
        var column = 4;
        var row = 4;
        for(; row >= 0; row--){
            if(!masterArrayTwo[row][column]){
                masterArrayTwo[row][column] = playerChar;
                tokenColumn = column;
                tokenRow = row;
                $('#row'+row+'-col'+column).css('background-image', playerColor);
                break;
            }
        }
        checkHorizontal();
        checkVert();
        checkDiag();
        threeDifferent();
        playerTurn();
        if(masterArrayTwo[0][4] && masterArrayTwo[1][4] && masterArrayTwo[2][4] && masterArrayTwo[3][4] && masterArrayTwo[4][4]){
            colFourAllowed = false;
        }
    }
}

function dropPieceFive(){
    if(colFiveAllowed === false){
        return;
    }else{
        var column = 5;
        var row = 4;
        for(; row >= 0; row--){
            if(!masterArrayTwo[row][column]){
                masterArrayTwo[row][column] = playerChar;
                tokenColumn = column;
                tokenRow = row;
                $('#row'+row+'-col'+column).css('background-image', playerColor);
                break;
            }
        }
        checkHorizontal();
        checkVert();
        checkDiag();
        threeDifferent();
        playerTurn();
        if(masterArrayTwo[0][5] && masterArrayTwo[1][5] && masterArrayTwo[2][5] && masterArrayTwo[3][5] && masterArrayTwo[4][5]){
            colFiveAllowed = false;
        }
    }
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
        if (match === 4) {
            gameEnd();

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

            gameEnd();

        }
    }
    match = 0;
}



function checkDiag() {
    if (masterArrayTwo[masterArrayTwo.length - 5].length !== 0) {                       //if the length of the top array is not zero
        for(var masterRow = 0; masterRow < masterArrayTwo[tokenRow].length; masterRow++){               // do a full check of all possible diagonals starting from the top array
            for (var rowIndex = masterRow, colIndex = masterArrayTwo.length - 5; rowIndex < masterArrayTwo[tokenRow].length, colIndex < masterArrayTwo.length; rowIndex, colIndex) {
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
                    gameEnd();
                    console.log('YOU WIN!!');
                    match = 0;
                }
            }
            match = 0;
            for (var rowIndex = masterArrayTwo[tokenRow].length - (1 + masterRow), colIndex = masterArrayTwo.length - 5; rowIndex >= 0, colIndex < masterArrayTwo.length; rowIndex, colIndex) {
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
                    gameEnd();
                    console.log('YOU WIN!!');
                    match = 0;
                }
            }
            match = 0;
        }
    }
    if (masterArrayTwo[masterArrayTwo.length - 4].length !== 0) {           //if the fourth array from the bottom does not have a length of 0
        for(var masterRow = 0; masterRow < masterArrayTwo[tokenRow].length; masterRow++){           //do a full check of all diagonals starting from the second array
            for (var rowIndex = masterRow, colIndex = masterArrayTwo.length - 4; rowIndex < masterArrayTwo[tokenRow].length, colIndex < masterArrayTwo.length; rowIndex, colIndex) {
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
                    gameEnd();
                    console.log('YOU WIN!!');
                    match = 0;
                }
            }
            match = 0;
            for (var rowIndex = masterArrayTwo[tokenRow].length - (1 + masterRow), colIndex = masterArrayTwo.length - 4; rowIndex >= 0, colIndex < masterArrayTwo.length; rowIndex, colIndex) {
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
                    gameEnd();
                    console.log('YOU WIN!!');
                    match = 0;
                }
            }
            match = 0;
        }
    }
}

    // RESET THE GAME
function resetGame() {
    $('.header-column0').off('click', dropPieceZero);
    $('.header-column1').off('click', dropPieceOne);
    $('.header-column2').off('click', dropPieceTwo);
    $('.header-column3').off('click', dropPieceThree);
    $('.header-column4').off('click', dropPieceFour);
    $('.header-column5').off('click', dropPieceFive);
    playerNumber = 0;
    playerChar = null;
    masterArray = [];
    masterArrayTwo = [[],[],[],[],[]];
    tokenColumn = null;
    tokenRow = null;
    playerColor = null;
    colZeroAllowed = true;
    colOneAllowed = true;
    colTwoAllowed = true;
    colThreeAllowed = true;
    colFourAllowed = true;
    colFiveAllowed = true;
    if(numberOfPlayers == 3) {
        horNonMatch = 'on';
        vertNonMatch = 'on';
        diagNonMatch = 'on';
    }
    $('#mainBody div').css('background-image', "");
    $('.header-column0').on('click', dropPieceZero);
    $('.header-column1').on('click', dropPieceOne);
    $('.header-column2').on('click', dropPieceTwo);
    $('.header-column3').on('click', dropPieceThree);
    $('.header-column4').on('click', dropPieceFour);
    $('.header-column5').on('click', dropPieceFive);
    playerTurn();
}

//stop game after match
function gameEnd(){
    $('.header-column0').off('click', dropPieceZero);
    $('.header-column1').off('click', dropPieceOne);
    $('.header-column2').off('click', dropPieceTwo);
    $('.header-column3').off('click', dropPieceThree);
    $('.header-column4').off('click', dropPieceFour);
    $('.header-column5').off('click', dropPieceFive);
    if(playerChar == 'x'){
        $('#winner').css('background-image', 'url(images/winter_is_coming.gif)');
        $('#winner').removeClass('hider');
        setTimeout(function(){
            $('#winner').css('background-image', 'url(images/GoTLogo.jpg)')
        }, 3000);
        setTimeout(function(){
            $('#winner').addClass('hider');
            $('.whos_turn').text("House of Stark Wins!");
            $('.whos_turn').removeClass('player3_turn');
            $('.whos_turn').removeClass('player2_turn');
            $('.whos_turn').addClass('player1_turn');
            return false;
        }, 5000)
    }else if (playerChar == 'o'){
        $('#winner').css('background-image', 'url(images/placeholder.gif)');
        $('#winner').removeClass('hider');
        setTimeout(function(){
            $('#winner').css('background-image', 'url(images/joffreysmile.gif)')
        }, 2000);
        setTimeout(function(){
            $('#winner').css('background-image', 'url(images/GoTLogo.jpg)')
        }, 3000);
        setTimeout(function(){
            $('#winner').addClass('hider');
            $('.whos_turn').text("House of Arryn Wins!");
            $('.whos_turn').removeClass('player3_turn');
            $('.whos_turn').removeClass('player1_turn');
            $('.whos_turn').addClass('player2_turn');
            return false;
        }, 5000)
    }else if (playerChar == 'y'){
        $('#winner').css('background-image', 'url(http://imagesmtv-a.akamaihd.net/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2015/06/test-1433860144.gif?quality=.8&height=226&width=400)');
        $('#winner').removeClass('hider');
        setTimeout(function(){
            $('#winner').css('background-image', 'url(images/GoTLogo.jpg)')
        }, 3000);
        setTimeout(function(){
            $('#winner').addClass('hider');
            $('.whos_turn').text("House of Lannister Wins!");
            $('.whos_turn').removeClass('player2_turn');
            $('.whos_turn').removeClass('player1_turn');
            $('.whos_turn').addClass('player3_turn');
            return false;
        }, 5000)
    }
}