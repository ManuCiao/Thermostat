# Thermostat

Here is my solution of the Thermostat challenge at Makers Academy during my 5th week. In this week we learnt JavaScript, jQuery and working with APIs.
Specification
-------------
- Thermostat starts at current London temperature (retrieved from openweathermap API)
- You can increase the temp with the up button
- You can decrease the temp with the down button
- The minimum temperature is 10 degrees
- There is a power saving mode
- Power saving mode is on by default
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- You can reset the temperature to 20 by hitting  the reset button
- The thermostat should color the display based on energy usage
  - < 18 is green,
  - < 25 is yellow,
  - otherwise red

<img src="https://github.com/ManuCiao/Thermostat/tree/master/js/img/Homepage.png">

Languages and Tools
-------------------
* JavaScript
* Jasmine
* Sinatra
* jQuery
* API
* HTML
* CSS

How to use
----------
Clone the repository:
```
$ git clone git@github.com:ManuCiao/Thermostat.git
```
Run Jasmine to see the tests:
```
$ open SpecRunner.html
```
Rackup to start the server:
```
$ ruby server.rb
```
In your browser visit http://localhost:4567/
