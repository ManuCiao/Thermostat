$(document).ready(function() {
  var thermostat = new Thermostat();

displayWeather('London');

 function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=7fd8be3aa80d32da727582fffc53b9bd';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
  });

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  $('#Temperature').text(thermostat._temperature);

  $('#increaseTemperature').on('click', function() {
    thermostat.increaseTemperature(1);
    updateTemperature();
  });

  $('#decreaseTemperature').on('click', function() {
    thermostat.decreaseTemperature(1);
    updateTemperature();
  });

  $('#resetTemperature').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powerModeOn').click(function() {
    thermostat.powerModeOn();
    $('#isPowerModeOn').text('ON');
    updateTemperature();
  });

  $('#powerModeOff').click(function() {
    thermostat.powerModeOff();
    $('#isPowerModeOn').text('OFF');
    updateTemperature();
  });

  function updateTemperature() {
    $('#Temperature').text(thermostat._temperature);
    $('#Temperature').attr('class', thermostat.tellUsUsage());
  };

 });
