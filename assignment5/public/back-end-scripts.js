$(document).ready(function(){
//gets countries and populates the select tags with option tags
    $.ajax({
        url : "/listCountries",
        type : "GET",
        success : function(data){
            var length = data.length;
            $(".dropdown").empty();

            $(".dropdown").append('<option value="" selected disabled hidden>Choose country</option>');
            for(var i = 0; i < length; ++i){
                $(".dropdown").append('<option value="' + data[i] + '">' + data[i] + '</option>');
            }
        }
    });

//amount is grabbed from text box, then displayed in #output-wrapper
        $('#result-form').on('click', function() {
            var urlForConvert ="/convert/" + $('#exchange-first-country option:selected').text() + "/" + $('#exchange-second-country option:selected').text() + "/" + $('#amount-box').val();
            $.ajax({
            url : urlForConvert,
            type : "GET",
            success : function(data) {
                var stringAmount = $('#amount-box').val() + " ";
                stringAmount += $('#exchange-first-country option:selected').text();
                stringAmount += " converts to " + '<span style="background-color: yellow;">' + data[0] + '</span>' + " " + $('#exchange-second-country option:selected').text() + '<br>';
                console.log(data[0]);
                $('#output-wrapper').append(stringAmount);
            }
            });
        });//end of calculation

//adds a country by getting input from the text boxes
        $('#add-country').on('click', function() {
            var urlForInsert ="/insert/" + $('#country-box').val() + "/"  + $('#notation-box').val() + "/"+ $('#currency-box').val() + "/"+ $('#comm-box').val() + "/" + $('#rate-box').val();
            var urlForCountryList = "/listCountries";
            var countryName = $('#country-box').val();
            $.ajax({
            url : urlForCountryList,
            type: "GET",
            success : function(data) {
                var isInArray = $.inArray(countryName, data)
                if (isInArray < 0) {
                    $.ajax({
                        url : urlForInsert,
                        type : "GET",
                            success : function(data) {
                    	    $('#bkgOverlay').fadeIn(500);
                    	    $('#bkgOverlay').delay(3000).fadeOut(400);
                    	    $('#added-alert-box').fadeIn(500);
                    	    $('#added-alert-box').delay(3000).fadeOut(400);
                            //clear form
                    	    $('#country-box').val('');
                            $('#currency-box').val('');
                            $('#notation-box').val('');
                            $('#comm-box').val('');
                            $('#rate-box').val('');
                            }
                        });
                    } else {
                        $('#bkgOverlay').fadeIn(500);
                    	$('#bkgOverlay').delay(3000).fadeOut(400);
                    	$('#added-alert-box-error').fadeIn(500);
                    	$('#added-alert-box-error').delay(3000).fadeOut(400);
                    }
                }
            });
        });//end of added country function

//Update an existing country
        $('#save-country').on('click', function() {
            var urlForUpdate ="/update/" + $('#country-to-update').val() + "/"  + $('#update-currency-box').val() + "/"+ $('#update-notation-box').val() + "/"+ $('#update-commission-box').val() + "/" + $('#update-rate-box').val();
            $.ajax({
            url : urlForUpdate,
            type : "GET",
            success : function(data) {
                alert("A Country Has Beem Updated!");
            	/*$('#bkgOverlay').fadeIn(500);
        		$('#bkgOverlay').delay(3000).fadeOut(400);
        		$('#update-alert-box').fadeIn(500);
        		$('#update-alert-box').delay(3000).fadeOut(400);
                */
                }
            });
        });
});
