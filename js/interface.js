$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();
  updateUsage();
  getWeatherData(city);

  $('#select-city').on('submit', function(e) {
    e.preventDefault();
    var $results = $('#city'),
    city = $('#current-city').val();
    getWeatherData(city);
  });

  function getWeatherData(city) {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=7fd8be3aa80d32da727582fffc53b9bd&units=metric', function(data) {
      $('#city').text('The temperature in ' + city.toUpperCase() + ' is: ' + Math.round(data.main.temp)).append('<small>°C</small>');
      $('#city img').remove();
      $('#city').append('<img src="http://openweathermap.org/img/w/' + data.weather[0].icon +'.png">');
    });
  }

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
    $('#Temp').attr('class', thermostat.tellUsUsage()).append('<small>°C</small>');
  }

  function updateUsage(){
    var $usage = $('#legendUsage').attr('class', thermostat.tellUsUsage());
    $usage.text(thermostat.tellUsUsage());
    if(thermostat.tellUsUsage() === 'low-usage') {
      $('#legendUsage').css('color', 'green');
    } else if(thermostat.tellUsUsage() === 'medium-usage') {
      $('#legendUsage').css('color', 'orange');
    } else {
      $('#legendUsage').css('color', 'red');
    }
  }
});
