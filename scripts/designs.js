// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


var inputHeight, inputWidth, pickedColor;

pickedColor = $('#colorPicker').val();
$('#colorPicker').on('change', function () {
    pickedColor = $('#colorPicker').val();
});
$('.predefined-colors').on('click', 'div', function (evt) {
    pickedColor = $(evt.target).css("background-color");
    var hex = rgb2hex(pickedColor);
    $('#colorPicker').val(hex);
});

$(document).ready(function(){
    $('.grid').remove();
    inputHeight = $("#input_height").val();
    inputWidth = $("#input_width").val();
    var returnedGrid = makeGrid(inputHeight, inputWidth);
    $('#pixel_canvas').append(returnedGrid);
    dragAndDrawFeature();
});


function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}



function makeGrid(rows, cols) {
    if (rows > 100 || cols > 100 || rows <= 0 || cols <= 0) {
        alert("Please enter valid numbers. Value should be less than or equal to 100");
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

function create(e) {
    e.preventDefault();
    // Clear the grid on button click
    $('.grid').remove();
    inputHeight = $("#input_height").val();
    inputWidth = $("#input_width").val();
    var returnedGrid = makeGrid(inputHeight, inputWidth);
    $('#pixel_canvas').append(returnedGrid);
    dragAndDrawFeature();
    $('#colorPicker').val('#FF3377');
    

}

$("#btnSubmit").click(function (e) {
    create(e);

});



$("#btnReset").click(function (e) {
    create(e);    
});

function dragAndDrawFeature() {

    let mouseIsDown = false;
    $('td').on('click', function () {
        let color = $('#colorPicker').val();
        $(this).css('backgroundColor', color);
    });


    $('td').on('mousemove', function () {
        if (mouseIsDown) {
            let color = $('#colorPicker').val();
            $(this).css('backgroundColor', color);
        }
    });

    $('td').on('mousedown', function () {
        mouseIsDown = true;
    });

    $('td').on('mouseup', function () {
        mouseIsDown = false;
    });



    // Double click to remove color from the cell     
    $('td').on('dblclick', function () {
        $(this).css('background', 'white');
    });

}


$(".eraser").click(function() {
    $('#colorPicker').val('#FFFFFF');
    
});

