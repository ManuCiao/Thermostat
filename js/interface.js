$(document).ready(function() {
  var thermostat = new Thermostat();

    $('#select-city').submit(function(event) {
      event.preventDefault();
      var $results = $('#city'),
      city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=7fd8be3aa80d32da727582fffc53b9bd&units=metric', function(data) {
        $('#Temp').text(Math.round(data.main.temp));
    });
      $results.text('The temperature in ' + city.toUpperCase() + ' is:');
    });

  $('#Temp').text(thermostat._temperature);

  $('#increaseTemperature').on('click', function() {
    thermostat.increaseTemperature(1);
    updateTemperature();
    updateUsage();
  });

  $('#decreaseTemperature').on('click', function() {
    thermostat.decreaseTemperature(1);
    updateTemperature();
    updateUsage();
  });

  $('#resetTemperature').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
    updateUsage();
  });

  $('#powerModeOn').click(function() {
    thermostat.powerModeOn();
    $('#isPowerModeOn').text('Power Mode On');
    updateTemperature();
    updateUsage();
  });

  $('#powerModeOff').click(function() {
    thermostat.powerModeOff();
    $('#isPowerModeOn').text('Power Mode Off');
    updateTemperature();
    updateUsage();
  });

  function updateTemperature() {
    $('#Temp').text(thermostat._temperature);
    $('#Temp').attr('class', thermostat.tellUsUsage());
    $('#celsius').attr('class', thermostat.tellUsUsage());
  }
  function updateUsage(){
    var $x = $('#legendUsage').attr('class', thermostat.tellUsUsage());
    console.log($x.text(thermostat.tellUsUsage()));
    if(thermostat.tellUsUsage() === 'low-usage') {
      $('#legendUsage').css('color', 'green');
    } else if(thermostat.tellUsUsage() === 'medium-usage') {
      $('#legendUsage').css('color', 'orange');
    } else {
      $('#legendUsage').css('color', 'red');
    }
  }
});
