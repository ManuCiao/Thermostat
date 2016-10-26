
describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  describe("Testing the constant variables", function () {
    it("returns the default temperature", function(){
      expect(thermostat.defaultTemperature()).toEqual(20);
    });
    it("should have power saving mode on by default", function() {
      expect(thermostat.isPowerModeOn()).toBeTruthy();
    });
    it("should turn the power mode off", function() {
      thermostat.powerModeOff();
      expect(thermostat.isPowerModeOn()).toBeFalsy();
    });
  });

  describe ("Change temperature of the thermostat", function(){
    it("increase Temperature by 1", function(){
      thermostat.increaseTemperature();
      expect(thermostat.defaultTemperature()).toEqual(21);
    });
    it("decrease Temperature by 1", function(){
      thermostat.decreaseTemperature();
      expect(thermostat.defaultTemperature()).toEqual(19);
    });
  });

  describe ("Thermostat cannot breach Low limit", function(){
    it("cannot go below 10", function(){
      for(var i = 0; i < 10; i++){
        thermostat.decreaseTemperature();
      };
      expect(thermostat.defaultTemperature()).toEqual(10);
    });
  });

  describe("Reset the temperature to default value", function(){
    it("turn into 20 degrees", function() {
      thermostat.powerModeOff();
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.defaultTemperature()).toEqual(DEFAULT_TEMPERATURE);
      expect(thermostat.isPowerModeOn()).toBeTruthy();
    });
  });

  describe("Switch the power back on", function () {
    it("switch off the power saving mode and switch it back on", function(){
      thermostat.powerModeOff();
      expect(thermostat.isPowerModeOn()).toBeFalsy();
      thermostat.powerModeOn();
      expect(thermostat.isPowerModeOn()).toBeTruthy();
    });
  });

  describe("Energy usage", function(){
    it("return low usage when below 18", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.decreaseTemperature();};
        expect(thermostat.tellUsUsage()).toBe("low-usage");
      });
    it("return medium usage when below 25", function() {
      for(var i = 0; i < 4; i++){
        thermostat.increaseTemperature();};
        expect(thermostat.tellUsUsage()).toBe("medium-usage");
      });
    it("return high usage when above 25", function() {
      thermostat.powerModeOff();
      for(var i = 0; i < 6; i++){
        thermostat.increaseTemperature();
      };
      expect(thermostat.tellUsUsage()).toBe("high-usage");
    });
  });

  describe("Thermostat cannot breach power saving Max limit", function() {
    it("cannot go above 25", function() {
      for(var i = 0; i < 6; i++){
        thermostat.increaseTemperature();
      };
      expect(thermostat.defaultTemperature()).toEqual(25)
    });
    it("cannot go beyond 32, when power is off", function() {
      thermostat.powerModeOff();
      for(var i = 0; i < 13; i++){
        thermostat.increaseTemperature();
      };
      expect(thermostat.defaultTemperature()).toEqual(32)
    });
  });

});
