// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


var inputHeight, inputWidth;

function makeGrid(rows, cols) {
    if (rows > 500 || cols > 500 || rows <= 0 || cols <= 0) {
        alert("Please enter valid numbers. Allowed values are from 1 to 500");
        $('#input_height').val('');
        $('#input_width').val('');
        return;
    } else {
        var grid = document.createElement('table');
        grid.className = 'grid';
        for (var r = 0; r < rows; ++r) {
            var tr = grid.appendChild(document.createElement('tr'));
            for (var c = 0; c < cols; ++c) {
                var cell = tr.appendChild(document.createElement('td'));
                cell.addEventListener('click', function () {
                    changeColour($(this));
                });
            }
        }
        return grid;
    }
}

function changeColour(oneCell) {
    var pickedColor = $('#colorPicker').val();
    oneCell.css("background-color", pickedColor);

}

$("#btnSubmit").click(function (e) {
    e.preventDefault();
    // Clear the grid on button click
    $('.grid').remove();
    inputHeight = $("#input_height").val();
    inputWidth = $("#input_width").val();
    var returnedGrid = makeGrid(inputHeight, inputWidth);
    document.body.appendChild(returnedGrid);


});

$("#btnReset").click(function() {
    $('.grid').remove();
    $('#colorPicker').val('#2dd0e5');
});


