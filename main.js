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
    // $('#drag').mouseenter(function() {
    //     $('#drag').css('background-color', 'blue');
    // });
    $('#drag').mouseout(function() {
        $('#drag').css("background-color", 'tan')
    });
    $('.button').click(function() {
        $('#drag').addClass('hello');
    });

    $('.button2').click(function() {
        $('#drag').removeClass('hello');

    });
    $('.button3').click(function() {
        $('#drag').toggleClass('hello');

    });
    $('.button4').on({


        "click": function() {
            // $('.box').append("<h1>rsbappy</h1>");
            // $(this).css('color', 'black');

            $('.box').Prepend("<h1>rsbappy</h1>");
            $(this).css('color', 'black');



        },
        "mouseenter": function() {
            $('#drag').css("background-color", 'pink')

        }

    });

});