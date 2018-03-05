$(document).ready(function() {
  $('#exchange-funds-tab').css("background", "rgba(0,0,0,0.2)");
  $('#form-add').css("display", "none");
  $('#form-update').css("display", "none");

  $('#exchange-funds-tab').on('click', function() {
    $('#exchange-funds-tab').css("background", "rgba(0,0,0,0.2)");
    $('#add-country-tab').css("background", "rgba(0,0,0,0.0)");
    $('#update-country-tab').css("background", "rgba(0,0,0,0.0)");
    $('#form-exchange').css("display", "block");
    $('#form-add').css("display", "none");
    $('#form-update').css("display", "none");

    $('#amount-box').val('');
    $('#exchange-first-country option').prop('selected', function() {
      return this.defaultSelected;
    });
    $('#exchange-second-country option').prop('selected', function() {
      return this.defaultSelected;
    });
  });

  $('#add-country-tab').on('click', function() {
    $('#add-country-tab').css("background", "rgba(0,0,0,0.2)");
    $('#exchange-funds-tab').css("background", "rgba(0,0,0,0.0)");
    $('#update-country-tab').css("background", "rgba(0,0,0,0.0)");
    $('#form-add').css("display", "block");
    $('#form-exchange').css("display", "none");
    $('#form-update').css("display", "none");

    $('#country-box').val('');
    $('#currency-box').val('');
    $('#notation-box').val('');
    $('#comm-box').val('');
    $('#rate-box').val('');
  });

  $('#update-country-tab').on('click', function() {
    $('#update-country-tab').css("background", "rgba(0,0,0,0.2)");
    $('#exchange-funds-tab').css("background", "rgba(0,0,0,0.0)");
    $('#add-country-tab').css("background", "rgba(0,0,0,0.0)");
    $('#form-update').css("display", "block");
    $('#form-exchange').css("display", "none");
    $('#form-add').css("display", "none");

    $('#country-to-update option').prop('selected', function() {
      return this.defaultSelected;
    });
    $('#update-currency-box').val('');
    $('#update-notation-box').val('');
    $('#update-commission-box').val('');
    $('#update-rate-box').val('');
  });

  $('#clear-form-exchange').on('click', function() {
    $('#exchange-first-country option').prop('selected', function() {
      return this.defaultSelected;
    });
    $('#exchange-second-country option').prop('selected', function() {
      return this.defaultSelected;
    });
    $('#form-exchange input[type="text"]').val('');
    $('#output-wrapper span, #output-wrapper p').hide();
    $('#output-wrapper').empty();
  });

  $('#clear-form-add').on('click', function() {
    $('#form-add input[type="text"]').val('');
    $('#form-add input[type="number"]').val('');
  });

  $('#clear-form-update').on('click', function() {
    $('#country-to-update option').prop('selected', function() {
      return this.defaultSelected;
    });
    $('#form-update input[type="text"]').val('');
    $('#form-update input[type="number"]').val('');
  });
}); //end of ready function
