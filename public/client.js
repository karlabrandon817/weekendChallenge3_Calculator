$(document).ready(function() {


    $(".mathButton").on('click', function() {
        var whichButton = $(this).attr('data-button');
        console.log('button type:', whichButton);
    });

});
