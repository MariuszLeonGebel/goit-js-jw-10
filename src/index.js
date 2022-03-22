import './css/styles.css';
import {
  fetchCountries
} from './fetchCountries';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const countryName = document.getElementById('search-box');
const countriesNumber = document.querySelector('.countriesNumber');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

countryName.addEventListener('input', debounce(searchingCountry, DEBOUNCE_DELAY));

function searchingCountry() {
  const cName = countryName.value.trim();
  if (cName === '') {
    clearHTML();
    return;
  }

  fetchCountries(cName)
    .then(countries => {
      clearHTML();

      if (countries.length === 1) {
        countryList.insertAdjacentHTML('beforeend', displayCountryList(countries));
        countryList.insertAdjacentHTML('beforeend', displayCountryInfo(countries));
      } else if (countries.length > 10) {
        Notiflix.Notify.info(`Too many matches found (${countries.length}). Please enter a more specific name.`);
      }
      if (countries.length >= 2 && countries.length <= 10) {
        countryList.insertAdjacentHTML('beforeend', displayCountryList(countries));
      }
    })
    .catch(Notiflix.Notify.failure(`Oops, there is no country with name "${countryName.value}"`));
}

function displayCountryList(countries) {
  const countryList = countries
    .map(({
      name,
      flags
    }) => {
      return `
            <li class="country-list__item list">
                <img src="${flags.svg}" width = "35" height = "35">
                <h3>${name.common}</h3>
            </li>
            `;
    })
    .join('');
  if (countries.length === 1) {
    countriesNumber.textContent = `1 country found`
  } else {
    countriesNumber.textContent = `${countries.length} countries found`
  }
  return countryList;
}

function displayCountryInfo(countries) {
  const countryInfo = countries
    .map(({
      capital,
      population,
      languages
    }) => {
      return `
          <ul class="list">
              <li><b>Capital: </b>${capital}</li>
              <li><b>Population: </b>${population}</li>
              <li><b>Languages: </b>${Object.values(languages).join(', ',
              )}</li>
          </ul>
          `;
    })
    .join('');
  return countryInfo;
}

function clearHTML() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  countriesNumber.innerHTML = '';
}