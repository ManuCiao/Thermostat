$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#Temperature').text(thermostat._temperature);

  $('#increaseTemperature').on('click', function() {
   thermostat.increaseTemperature();
   updateTemperature();
  })

  $('#decreaseTemperature').on('click', function() {
   thermostat.decreaseTemperature();
   updateTemperature();
  })

  $('#resetTemperature').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powerModeOn').click(function() {
    thermostat.powerModeOn();
    $('#isPowerModeOn').text('ON')
    updateTemperature();
  })

  $('#powerModeOff').click(function() {
    thermostat.powerModeOff();
    $('#isPowerModeOn').text('OFF')
    updateTemperature();
  })

  function updateTemperature() {
    $('#Temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.tellUsUsage())
  }
})
