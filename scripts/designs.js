// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


var inputHeight, inputWidth;

//function to convert the color code from rgb format to hexa format
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}


/* This function validates the input height and width given by user and
throws an error when user enters values which are invalid or when it's more than 100
If valid values are given, grid is prepared and returned accordingly*/
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

/* In this function Grid prepared in above function 'makeGrid' is appended and shown on the web page */
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

// function to define the actions for all the mouse events including double click and click&drag events 
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

/* This function defines the kind of grid drawn when page is initially loaded depending on screen size
60x40 HxW size grid is drawn when window width is less than or equal to 768 (for smaller screens like mobile phones) and
50x100 HxW (default values) size grid is drawn in all other cases */
$(document).ready(function () {

    if ($(window).width() <= 768) {
        $('.grid').remove();
        $("#input_height").val(60);
        $("#input_width").val(40);
        inputHeight = $("#input_height").val();
        inputWidth = $("#input_width").val();
        var returnedGrid = makeGrid(inputHeight, inputWidth);
        $('#pixel_canvas').append(returnedGrid);
        dragAndDrawFeature();
    } else {
        $('.grid').remove();
        inputHeight = $("#input_height").val();
        inputWidth = $("#input_width").val();
        var returnedGrid = makeGrid(inputHeight, inputWidth);
        $('#pixel_canvas').append(returnedGrid);
        dragAndDrawFeature();
    }
    $('.instructions_header').closest('.container').addClass('collapsed');
    $('.instructions_header').click(function () {
        $(this).closest('.container').toggleClass('collapsed');
    });

});


$('.predefined-colors').on('click', 'div', function (evt) {
    var pickedColor = $(evt.target).css("background-color");
    var hex = rgb2hex(pickedColor);
    $('#colorPicker').val(hex);
});



// Grid is created on the page with given values of height and width when Create button is clicked
$("#btnSubmit").click(function (e) {
    create(e);

});

// Grid is cleared on clicking reset button
$("#btnReset").click(function (e) {
    create(e);
});

// When eraser is clicked white colour is selected 
$(".eraser").click(function () {
    $('#colorPicker').val('#FFFFFF');

});

