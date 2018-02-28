$(document).ready(function(){
	$('#exchange-funds').css("background", "rgba(0,0,0,0.2)");
	$('#form2').css("display", "none");
	$('#form3').css("display", "none");
	
	$('#exchange-funds').on('click', function(){
		$('#exchange-funds').css("background", "rgba(0,0,0,0.2)");
		$('#addCtry').css("background", "rgba(0,0,0,0.0)");
		$('#updateCtry').css("background", "rgba(0,0,0,0.0)");
		$('#form1').css("display", "block");
		$('#form2').css("display", "none");
		$('#form3').css("display", "none");
	});	
	
	$('#addCtry').on('click', function(){
		$('#addCtry').css("background", "rgba(0,0,0,0.2)");
		$('#exchange-funds').css("background", "rgba(0,0,0,0.0)");
		$('#updateCtry').css("background", "rgba(0,0,0,0.0)");
		$('#form2').css("display", "block");
		$('#form1').css("display", "none");
		$('#form3').css("display", "none");
	});

	$('#updateCtry').on('click', function(){
		$('#updateCtry').css("background", "rgba(0,0,0,0.2)");
		$('#exchange-funds').css("background", "rgba(0,0,0,0.0)");
		$('#addCtry').css("background", "rgba(0,0,0,0.0)");
		$('#form3').css("display", "block");
		$('#form1').css("display", "none");
		$('#form2').css("display", "none");
	});
	
	$('#clear-form').on('click', function(){
		$('#form1 input[type="text"]').val('');
		$('#select1 option').prop('selected', function() {
        return this.defaultSelected;
		});
	});
	$('#clear-form2').on('click', function(){
		$('#form2 input[type="text"]').val('');
	});
	$('#clear-form3').on('click', function(){
		$('#form3 input[type="text"]').val('');
	});
	
	
	
	
});//end of ready function