const apiKey = "bea16468a8e0aff76d6822fa3a99447e";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const cityInput = document.querySelector<HTMLInputElement>("#cityInput");
const confirmSelectionButton =
  document.querySelector<HTMLButtonElement>(".confirm-selection");

confirmSelectionButton?.addEventListener("click", () => {
  if (cityInput && cityInput.value) {
    fetchWeatherOfPlace(cityInput.value);
  } else {
    console.log("Please enter a city name.");
  }
});

function fetchWeatherOfPlace(city: string) {
  const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

  console.log(`Fetching weather for ${city}`);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })

    .then((data) => {
      // # daten aus API-antwort extrahieren
      const city = data.name;
      const country = data.sys.country;
      const icon = data.weather[0].icon;
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      displayWeatherOverview(city, country, icon, temperature, description);

      const localTime = data.timezone;
      const windSpeed = data.wind.speed;
      const cloudiness = data.clouds.all;
      const pressure = data.main.pressure;
      const humidity = data.main.humidity;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;
      const geoCoords = data.coord;

      displayWeatherDetails(
        localTime,
        windSpeed,
        cloudiness,
        pressure,
        humidity,
        sunrise,
        sunset,
        geoCoords
      );
    })

    .catch((error) => {
      console.error("Fetch error:", error);
      const weatherContainerOverview = document.querySelector<HTMLDivElement>(
        ".weather-data-overview"
      );
      if (weatherContainerOverview) {
        weatherContainerOverview.innerHTML = `<p>Error: Could not fetch weather data for ${city}. Please try again.</p>`;
      }
    });
}

function displayWeatherOverview(
  city: string,
  country: string,
  icon: string,
  temperature: number,
  description: string
) {
  const weatherContainerOverview = document.querySelector<HTMLDivElement>(
    ".weather-data-overview"
  );
  if (weatherContainerOverview) {
    weatherContainerOverview.innerText = "";

    const cityElement = document.createElement("h2");
    cityElement.innerText = `Weather in ${city}`;

    const countryElement = document.createElement("p");
    countryElement.innerText = `${country}`;

    const weatherInfoDiv = document.createElement("div");
    weatherInfoDiv.classList.add("weather-info");

    const iconElement = document.createElement("img");
    iconElement.src = `http://openweathermap.org/img/wn/${icon}.png`;
    iconElement.alt = "Weather Icon";
    iconElement.innerText = `${icon}`;

    const temperatureElement = document.createElement("p");
    temperatureElement.innerText = `${temperature}°C`;

    weatherInfoDiv.appendChild(iconElement);
    weatherInfoDiv.appendChild(temperatureElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = `${description}`;
    //// elemente dem weatherContainerOverview hinzufügen
    weatherContainerOverview.appendChild(cityElement);
    weatherContainerOverview.appendChild(countryElement);
    //# dont forget: DIV hinzufügen
    weatherContainerOverview.appendChild(weatherInfoDiv);
    weatherContainerOverview.appendChild(descriptionElement);
  }
}

function displayWeatherDetails(
  localTime: number,
  windSpeed: number,
  cloudiness: number,
  pressure: number,
  humidity: number,
  sunrise: number,
  sunset: number,
  geoCoords: any
) {
  const weatherContainerDetail = document.querySelector<HTMLDivElement>(
    ".weather-info-detail"
  );
  if (weatherContainerDetail) {
    weatherContainerDetail.innerText = "";

    const currentTime = new Date();
    const localOffset = currentTime.getTimezoneOffset() * 60000;
    const cityTime = new Date(Date.now() + localTime * 1000 - localOffset);

    const detailsList = document.createElement("dl");
    detailsList.innerHTML = `
  <dt>Local Time:</dt>
  <dd>${cityTime.toLocaleTimeString()}</dd>
  <dt>Wind Speed:</dt>
  <dd>${windSpeed}m/s</dd>
  <dt>Cloudiness:</dt>
  <dd>${cloudiness}%</dd>
  <dt>Pressure:</dt>
  <dd>${pressure}hpa</dd>
  <dt>Humidity:</dt>
  <dd>${humidity}%</dd>
  <dt>Sunrise:</dt>
  <dd>${new Date(sunrise * 1000).toLocaleTimeString()}</dd>
  <dt>Sunset:</dt>
  <dd>${new Date(sunset * 1000).toLocaleTimeString()}</dd>
  <dt>Geo Location:</dt>
  <dd>Lat: ${geoCoords.lat}, <br> Lon: ${geoCoords.lon}</dd>
`;

    weatherContainerDetail.appendChild(detailsList);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchWeatherOfPlace("Leipzig");
});
