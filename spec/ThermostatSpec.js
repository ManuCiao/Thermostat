describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    thermostat1 = new Thermostat();
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
     var times = 10;
     for(var i = 0; i < times; i++){
     thermostat.decreaseTemperature();};
     expect(function() {thermostat.decreaseTemperature()}).toThrow("The Thermostat cannot go below 10 degrees");
   });
  });
describe("thermostat cannot breach power save limit", function() {
  it("cannot go above 25", function() {
    var times = 5;
    for(var i = 0; i < times; i++){
    thermostat.increaseTemperature();};
    expect(function() {thermostat.increaseTemperature()}).toThrow("The Thermostat cannot go above 25 degrees");
  });
  it("cannot go beyond 32, when power is off", function() {
    thermostat.powerModeOff();
    var times = 12;
    for(var i = 0; i < times; i++){
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
});
