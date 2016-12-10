$(document).ready(function() {
    console.log('oscar scott for president');
    $(".mathButton").on('click', function() {
        var whichButton = $(this).attr('data-button');
        console.log('button type:', whichButton);
    });
});
