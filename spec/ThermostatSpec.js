describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have power saving mode on by default", function() {
    expect(thermostat._powerOn).toBeTruthy();
  });
  it("should have a default temperature of 20", function() {
    expect(thermostat._temperature).toBe(DEFAULT_TEMPERATURE);
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
       console.log(thermostat._temperature);
     thermostat.decreaseTemperature();};
     expect(function() {thermostat.decreaseTemperature()}).toThrow("The Thermostat cannot go below 10 degrees");
   });
  });
});
