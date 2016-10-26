const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;
const POWER_ON_LIMIT = 25;
const POWER_OFF_LIMIT = 32;

Thermostat = function(temperature = DEFAULT_TEMPERATURE) {
  this._powerOn = true;
  this._temperature = temperature;
};

Thermostat.prototype.increaseTemperature = function (number) {
    if (powerOn == true) {
      this._temperature += number {
        
        if (this._temperature >= POWER_ON_LIMIT) {
          alert ("It cannot go above 20 degrees")
      }
    } else if (this._temperature >= POWER_OFF_LIMIT){
      alert ("it cannot go above 32 degrees")
    } else {
      this._temperature += number
      console.log(this._temperature);
    }
    }
};
