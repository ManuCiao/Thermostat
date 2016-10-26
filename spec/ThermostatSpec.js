
describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("returns the default temperature", function(){
    expect(thermostat._temperature).toEqual(20);
  });
  it("should have power saving mode on by default", function() {
    expect(thermostat._powerOn).toBeTruthy();
  });
  it("should have a default temperature of 20", function() {
    expect(thermostat._temperature).toBe(DEFAULT_TEMPERATURE);
  });
  it("should turn the power mode off", function() {
    thermostat.powerModeOff();
    expect(thermostat._powerOn).toBeFalsy();
  });

 describe ("Change temperature of the thermostat", function(){
   it("increase Temperature by 1", function(){
     thermostat.increaseTemperature();
     expect(thermostat._temperature).toEqual(21);
   });
   it("decrease Temperature by 1", function(){
     thermostat.decreaseTemperature();
     expect(thermostat._temperature).toEqual(19);
   });
 });
 describe ("thermostat cannot breach limit", function(){
   it("cannot go below 10", function(){
     for(var i = 0; i < 10; i++){
     thermostat.decreaseTemperature();};
     expect(thermostat.defaultTemperature()).toEqual(10)
   });
  });
describe("thermostat cannot breach power save limit", function() {
  it("cannot go above 25", function() {
    for(var i = 0; i < 5; i++){
    thermostat.increaseTemperature();};
    expect(function() {thermostat.increaseTemperature()}).toThrow("The Thermostat cannot go above 25 degrees");
  });
  it("cannot go beyond 32, when power is off", function() {
    thermostat.powerModeOff();
    for(var i = 0; i < 12; i++){
    thermostat.increaseTemperature();};
    expect(function() {thermostat.increaseTemperature()}).toThrow("The Thermostat cannot go above 32 degrees");
  });
 });

 describe("Reset the temperature to default value", function(){
     it("turn into 20 degrees", function() {
       thermostat.powerModeOff();
       thermostat.increaseTemperature();
       thermostat.resetTemperature();
       expect(thermostat._temperature).toEqual(DEFAULT_TEMPERATURE);
       expect(thermostat._powerOn).toBeTruthy();
     });
   });
   describe("Energy usage", function(){
       it("return low usage when below 18", function() {
         for (var i = 0; i < 3; i++) {
           thermostat.decreaseTemperature();};
         expect(thermostat.tellUsUsage()).toBe("low-usage");
       });
     });

   describe("Energy usage", function(){
       it("return medium usage when below 25", function() {
         var times = 4;
         for(var i = 0; i < times; i++){
         thermostat.increaseTemperature();};
         expect(thermostat.tellUsUsage()).toBe("medium-usage");
       });
     });

   describe("Energy usage", function(){
       it("return high usage when above 25", function() {
         thermostat.powerModeOff();
         var times = 6;
         for(var i = 0; i < times; i++){
         thermostat.increaseTemperature();};
         expect(thermostat.tellUsUsage()).toBe("high-usage");
       });
     });

});
