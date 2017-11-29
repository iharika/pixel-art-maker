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
            }
        }
        return grid;
    }
}



$("#btnSubmit").click(function (e) {
    e.preventDefault();
    // Clear the grid on button click
    $('.grid').remove();
    inputHeight = $("#input_height").val();
    inputWidth = $("#input_width").val();
    var returnedGrid = makeGrid(inputHeight, inputWidth);
    $('#pixel_canvas').append(returnedGrid);
    dragAndDrawFeature();

});

$("#btnReset").click(function() {
    $('.grid').remove();
    $('#colorPicker').val('#FF3377');
});

function dragAndDrawFeature() {
    
    $('td').on('click', function() {
        let color = $('#colorPicker').val();
        $(this).css('backgroundColor', color);
    });

    let mouseIsDown = false;

    $('td').on('mousemove', function() {
        if (mouseIsDown) {
            let color = $('#colorPicker').val();
            $(this).css('backgroundColor', color);
        }
    });

    $('td').on('mousedown', function() {
        mouseIsDown = true;
    });

    $('td').on('mouseup', function() {
        mouseIsDown = false;
    });

   

    // Double click to remove color from the cell     
    $('td').on('dblclick', function() {
        $(this).css('background', 'white');
    })

}

