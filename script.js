"use strict";

// In script.js, define a class called Weather.
class Weather {
  constructor(temperature, precipitation, description) {
    this.temperature = temperature;
    this.precipitation = precipitation;
    this.description = description;
  }

  //   Include a method in Weather to display general weather conditions.
  displayWeather() {
    console.log(
      `Temperature: ${this.temperature} degrees Fahrenheit, Precipitation: ${this.precipitation}% chance of rain, Description: ${this.description}`
    );
  }

  //   The Weather class should have properties for temperature, precipitation, and description.
  changeTemp(temperature) {
    this.temperature = temperature;
    console.log(`The temperature is now ${this.temperature} degrees.`);
  }

  changePrecip(precipitation) {
    this.precipitation = precipitation;
    console.log(`The chance of rain is now is now ${this.precipitation}%.`);
  }

  changeDesc(description) {
    this.description = description;
    console.log(`The description has been changed to: ${this.description}`);
  }
}

// Instantiate the Weather class to represent general conditions.
const currentWeather = new Weather(
  64,
  80,
  "Today's forecast is cloudy with 53% humidity, highs in the lower 60s, lows in the upper 50s to lower 60s. There is rain forecast for today."
);

// Call the display methods on both instances and ensure they output relevant information to the console or the web page.
currentWeather.displayWeather();
currentWeather.changeTemp(71);
currentWeather.displayWeather();
currentWeather.changePrecip(0);
currentWeather.displayWeather();
currentWeather.changeDesc(
  "Today's forecast is mostly sunny with 53% humidity, highs in the lower 70s, lows in the upper 50s to lower 60s. There is no rain forecast for today."
);
currentWeather.displayWeather();

// Define a class DayWeather that extends the Weather class.
class DayWeather extends Weather {
  constructor(dayName, temperature, precipitation, description, special) {
    super(temperature, precipitation, description);

    // DayWeather should include additional properties or methods to represent specific conditions for a particular day (e.g., day of the week, special weather alerts).
    this.dayName = dayName;
    this.special = special;
  }

  //   Override the display method in DayWeather to include the additional information specific to the day.
  displayWeather() {
    console.log(
      `Day: ${this.dayName}, Temperature: ${this.temperature} degrees Fahrenheit, Precipitation: ${this.precipitation}% chance of rain, Description: ${this.description} Special: ${this.special}`
    );
  }
}

// Instantiate the DayWeather class for a specific day's conditions.
const thursWeather = new DayWeather(
  "Thursday",
  71,
  0,
  "Today's forecast is mostly sunny with 53% humidity, highs in the lower 70s, lows in the upper 50s to lower 60s. There is no rain forecast for today.",
  "There are no special weather alerts for today."
);

// Call the display methods on both instances and ensure they output relevant information to the console or the web page.
thursWeather.displayWeather();
