$(document).ready(function(){
    makeGrid();
});
var masterArray = [];

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