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
  })
});
