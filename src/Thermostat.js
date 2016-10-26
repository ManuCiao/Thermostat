const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;
const POWER_ON_LIMIT = 25;
const POWER_OFF_LIMIT = 32;

Thermostat = function(temperature = DEFAULT_TEMPERATURE) {
  this._powerOn = true;
  this._temperature = temperature;
};
