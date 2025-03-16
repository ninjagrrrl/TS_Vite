const linkBerlinWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=berlin,DE&appid=bea16468a8e0aff76d6822fa3a99447e&units=metric";

const linkLeipzigWeather =
  "https://api.openweathermap.org/data/2.5/weather?lat=51.3406321&lon=12.3747329&appid=bea16468a8e0aff76d6822fa3a99447e&units=metric";

const linkMunichWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=munich,DE&appid=bea16468a8e0aff76d6822fa3a99447e&units=metric";

const linkHamburgWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=hamburg,DE&appid=bea16468a8e0aff76d6822fa3a99447e&units=metric";

const linkStahnsdorfWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=stahnsdorf,DE&appid=bea16468a8e0aff76d6822fa3a99447e&units=metric";

const linkCagliariWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=cagliari,IT&appid=bea16468a8e0aff76d6822fa3a99447e&units=metric";

const confirmSelectionButton =
  document.querySelector<HTMLButtonElement>(".confirm-selection");
const citySelect = document.querySelector<HTMLSelectElement>("#place");

confirmSelectionButton?.addEventListener("click", () => {
  if (citySelect) {
    const selectedCity = citySelect.value;

    if (selectedCity) {
      fetchWeatherOfPlace(selectedCity);
    }
  } else {
    console.log("Please choose a place.");
  }
});

function fetchWeatherOfPlace(city: string) {
  const placeURLs: { [key: string]: string } = {
    berlin: linkBerlinWeather,
    leipzig: linkLeipzigWeather,
    munich: linkMunichWeather,
    hamburg: linkHamburgWeather,
    stahnsdorf: linkStahnsdorfWeather,
    cagliari: linkCagliariWeather,
  };
  console.log(`Fetching weather for ${city}`);

  const url = placeURLs[city.toLowerCase()];
  if (url) {
    fetch(url)
      .then((response) => response.json())
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
      });
  }
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
  cloudiness: string,
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

    // Berechne die Stadtzeit basierend auf der Zeitzone
    const currentTime = new Date();
    const localOffset = currentTime.getTimezoneOffset() * 60000; // Offset in Millisekunden
    const cityTime = new Date(Date.now() + localTime * 1000 - localOffset); // Stadtzeit

    const detailsList = document.createElement("dl");
    detailsList.innerHTML = `
  <dt>Local Time:</dt>
  <dd>${cityTime.toLocaleTimeString()}</dd>
  <dt>Wind Speed:</dt>
  <dd>${windSpeed}m/s</dd>
  <dt>Cloudiness:</dt>
  <dd>${cloudiness}</dd>
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

function getLeipzigWeather() {
  fetchWeatherOfPlace("leipzig");
}

document.addEventListener("DOMContentLoaded", getLeipzigWeather);
