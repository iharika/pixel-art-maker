// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


var lastClicked, inputHeight, inputWidth;

inputHeight = $("#input_height").val();
inputWidth = $("#input_width").val();

$("#btnSubmit").click(function (e) {
    $('.grid').remove();
    e.preventDefault();
    inputHeight = $("#input_height").val();
    inputWidth = $("#input_width").val();
    var returnedGrid = ownGrid(inputHeight, inputWidth);
    document.body.appendChild(returnedGrid);


});

function ownGrid(rows, cols) {
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r = 0; r < rows; ++r) {
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c = 0; c < cols; ++c) {
            var cell = tr.appendChild(document.createElement('td'));
        }
    }
    return grid;
}