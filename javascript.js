$(document).ready(function(){
    makeGrid();
    $('.header').click(dropPiece);
});
var masterArray = [];
var masterArrayTwo = [[],[],[],[],[]];

function dropPiece(){
    var column =
    var row = $(this).attr('row').val();
}

function makeGrid(){
    for(var p = 0; p < 6; p++){
        var headerDiv = $('<div>',{
            class: 'header' + ' ' +'column' + p,
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
                text: 'row' + i +' ' + 'column' + e
            });
            $('#mainBody').append(newDiv);
            divArray.push(newDiv);

        }
        masterArray.push(divArray);
    }
    console.log(masterArray);
}