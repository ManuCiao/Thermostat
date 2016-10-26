const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;
const POWER_ON_LIMIT = 25;
const POWER_OFF_LIMIT = 32;

Thermostat = function(temperature = DEFAULT_TEMPERATURE) {
  this._powerOn = true;
  this._temperature = temperature;
  this._lowLimit = MINIMUM_TEMPERATURE;
};

Thermostat.prototype.increaseTemperature = function () {
    this._temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function () {
    if (this._temperature <= this._lowLimit) {
      throw ("The Thermostat cannot go below 10 degrees");
    } else {
    this._temperature -= 1;
  };
};
