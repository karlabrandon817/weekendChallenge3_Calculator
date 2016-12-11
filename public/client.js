var returnedAnswer = [];

$(document).ready(function() {
    $('#totalButton').on('click', clickedTotal);

    function clickedTotal() {

        var objectToSend = {
            x: $('#firstNumber').val(),
            y: $('#secondNumber').val(),
            type: $('#operations').val()
        }; //end objectToSend
        console.log('object to send', objectToSend);

        $.ajax({
            type: 'POST',
            url: '/sendData',
            data: objectToSend,
            sucess: function(response) {
                console.log('back from post call: ', response);
                //display(response);
                clickedTotal();
            },
            error: function() {
                console.log('error with ajax call...');

            }

        }); //end postData ajax call

        getData();

    } //total clickedTotal fuction


    var getData = function() {
        console.log("in get");
        $.ajax({
            type: "GET",
            url: "/returnData",
            success: function(response) {
                console.log('back from post call:', response);
                returnedAnswer.push(response);
            }
        }); //end getData ajax call
    };
}); //end doc ready function
