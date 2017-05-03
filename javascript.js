$(document).ready(function(){
    makeGrid();
    $('.header-column0').click(dropPieceZero);
    $('.header-column1').click(dropPieceOne);
    $('.header-column2').click(dropPieceTwo);
    $('.header-column3').click(dropPieceThree);
    $('.header-column4').click(dropPieceFour);
    $('.header-column5').click(dropPieceFive);
});
var masterArray = [];
var masterArrayTwo = [[],[],[],[],[]];
var tokenColumn = null;
var tokenRow = null;

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
                id: 'row' + i +'-'+ 'column' + e,
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
    console.log(masterArray);
}

function dropPieceZero(){
    var column = 0;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = 'x';
        tokenColumn = column;
        tokenRow = row;
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 1;
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 2;
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 3;
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 4;
    }
}

function dropPieceOne(){
    var column = 1;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = 'x';
        tokenColumn = column;
        tokenRow = row;
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 1;
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 2;
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 3;
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 4;
    }
}

function dropPieceTwo(){
    var column = 2;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = 'x';
        tokenColumn = column;
        tokenRow = row;
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 1;
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 2;
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 3;
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 4;
    }
}

function dropPieceThree(){
    var column = 3;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = 'x';
        tokenColumn = column;
        tokenRow = row;
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 1;
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 2;
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 3;
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 4;
    }
}

function dropPieceFour(){
    var column = 4;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = 'x';
        tokenColumn = column;
        tokenRow = row;
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 1;
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 2;
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 3;
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 4;
    }
}

function dropPieceFive(){
    var column = 5;
    var row = 4;
    if(!masterArrayTwo[row][column]){
        masterArrayTwo[row][column] = 'x';
        tokenColumn = column;
        tokenRow = row;
    }else if(!masterArrayTwo[row - 1][column]){
        masterArrayTwo[row - 1][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 1;
    }else if(!masterArrayTwo[row - 2][column]){
        masterArrayTwo[row - 2][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 2;
    }else if(!masterArrayTwo[row - 3][column]){
        masterArrayTwo[row - 3][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 3;
    }else if(!masterArrayTwo[row - 4][column]){
        masterArrayTwo[row - 4][column] = 'x';
        tokenColumn = column;
        tokenRow = row - 4;
    }
}
