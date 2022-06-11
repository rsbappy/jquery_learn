$(document).ready(function() {
    // $("#drag").css("background-color", "blue");
    // $("#drag").css("color", "white");
    // $("#drag").css("margin", "auto");
    $('#drag').dblclick(function() {
        $('#drag').css('background-color', 'red');
    });
    $('#drag').click(function() {
        $("#drag").css('background-color', 'orange')
        $("#drag").css('color', 'white')
    });
    $('#drag').contextmenu(function() {
        $('#drag').css('background-color', 'green');
    });
    $('#drag').mouseenter(function() {
        $('#drag').css('background-color', 'blue');
    });
    $('#drag').mouseout(function() {
        $('#drag').css("background-color", 'tan')
    });

});