// describe("Airport", function() {
//   var airport;
//   var airplane;
//   var stormyAirport;
//
//   beforeEach(function() {
//     airport = new Airport();
//     airplane = new Airplane();
//     stormyAirport = new Airport();
//   });
//
//   it("should be able to land a plane", function() {
//     airport.land(airplane);
//     expect(airport._planesArray).toContain(airplane);
//   });


describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have power saving mode on by default", function() {
    expect(thermostat._powerOn).toBeTruthy();
  });
});
