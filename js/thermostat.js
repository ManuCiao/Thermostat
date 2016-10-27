
const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;
const POWER_ON_LIMIT = 25;
const POWER_OFF_LIMIT = 32;
const LOW_USAGE = 18;

Thermostat = function() {
  this._powerOn = true;
  this._temperature = DEFAULT_TEMPERATURE;
  this._lowLimit = MINIMUM_TEMPERATURE;
  this._highLimitPS = POWER_ON_LIMIT;
  this._highLimitNP = POWER_OFF_LIMIT;
  this._lowUsage = LOW_USAGE;
};

Thermostat.prototype.defaultTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.isMinTemperature = function () {
  return this._temperature === this._lowLimit;
};

Thermostat.prototype.isPowerModeOn = function () {
  return this._powerOn === true;
};

Thermostat.prototype.increaseTemperature = function () {
  if (this.isMaxTemperature()) {
    return;
  }
  this._temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.isMinTemperature()) {
    return;
  }
  this._temperature -= 1;
};

Thermostat.prototype.powerModeOff = function () {
  this._powerOn = false;
};

Thermostat.prototype.powerModeOn = function () {
  this._powerOn = true;
};

Thermostat.prototype.isMaxTemperature = function () {
  if (this.isPowerModeOn() === false){
    return this._temperature === this._highLimitNP
  }
  return this._temperature === this._highLimitPS
};


Thermostat.prototype.resetTemperature = function () {
  this._powerOn = true;
  this._temperature = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.tellUsUsage = function () {
  if (this._temperature < this._lowUsage) {
    return "low-usage";
  } else if (this._temperature >= this._lowUsage && this._temperature <= this._highLimitPS) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
