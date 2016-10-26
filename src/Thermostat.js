
const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;
const POWER_ON_LIMIT = 25;
const POWER_OFF_LIMIT = 32;

Thermostat = function() {
  this._powerOn = true;
  this._temperature = DEFAULT_TEMPERATURE;
  this._lowLimit = MINIMUM_TEMPERATURE;
  this._highLimitPS = POWER_ON_LIMIT;
  this._highLimitNP = POWER_OFF_LIMIT;
};

Thermostat.prototype.defaultTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.isMinTemperature = function () {
  return this._temperature === this._lowLimit;
};

Thermostat.prototype.increaseTemperature = function () {
  if ((this._powerOn) && (this._temperature >= this._highLimitPS)) {
    throw ("The Thermostat cannot go above 25 degrees");
  } else if (this._temperature >= this._highLimitNP) {
    throw ("The Thermostat cannot go above 32 degrees");
  } else {
    this._temperature += 1;
  }
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.isMinTemperature()) {
    return;
  }
  this._temperature -= 1;
};

Thermostat.prototype.powerModeOff = function () {
  this._powerOn = false;
}

Thermostat.prototype.resetTemperature = function () {
  this._powerOn = true;
  this._temperature = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.tellUsUsage = function () {
  if (this._temperature < 18) {
    return "low-usage";
  } else if (this._temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
