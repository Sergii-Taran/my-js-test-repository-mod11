const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = '035c2a5d4d2d4c4fa73122932252709';

const form = document.querySelector('.js-search-form');
const list = document.querySelector('.js-list');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const { city, days } = event.currentTarget.elements;

  fetchData(city.value, days.value)
    .then(data => {
      console.log('then', data);
      list.innerHTML = createMarkup(data.forecast.forecastday);
    })
    .catch(error => {});
}

function fetchData(city = '', days = 3) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days,
    lang: 'uk',
  });

  return fetch(`${BASE_URL}/forecast.json?${params}`).then(responce => {
    if (!responce.ok) {
      throw new Error(responce.statusText);
    }

    return responce.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `
    <li class="weather-card">
    <img class="weather-icon" src="${icon}" alt="${text}">
    <h2 class="weather-date">${date}</h2>
    <h3 class="weather-text">${text}</h3>
    <h3 class="temperature">${avgtemp_c} °C</h3>
    </li>
    `
    )
    .join('');
}
