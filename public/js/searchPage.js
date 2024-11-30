import { createNav, createElement, createMovie, fetch_function } from '../utils/pageCreation.js';

async function initializeIndexPage() {
  createNav();

  const searchContainer = document.querySelector('.big-search');
  const bigSearchForm = createElement('form', { action: '/search' });
  const bigSearchInput = createElement('input', { class: 'search-input', type: 'text', placeholder: 'Search..', name: 'search' });
  const bigSearchBtn = createElement('button', { type: 'submit' }, 'Search');

  bigSearchForm.append(bigSearchInput, bigSearchBtn);
  searchContainer.append(bigSearchForm);

  bigSearchForm.addEventListener('submit', () => {
    localStorage.setItem('setQuery', bigSearchInput.value);
  })

  const movieListing = document.querySelector('.movie-listing.container');
  const row = document.querySelector('.movie-row');

  const BASE_API_URL = `http://localhost:8000/v1/movies`;
  let MY_API_URL;
  let searchValue;
  if (localStorage.getItem('searchQuery') != null) {
    searchValue = localStorage.getItem('searchQuery');
    MY_API_URL = `${BASE_API_URL}/search?q=${searchValue}&page=1&limit=8`;
    localStorage.clear();
  } else if (localStorage.getItem('setQuery') != null) {
    searchValue = localStorage.getItem('setQuery');
    MY_API_URL = `${BASE_API_URL}/search?q=${searchValue}&page=1&limit=8`;
    localStorage.clear();
  } else {
		MY_API_URL = `${BASE_API_URL}?page=1&limit=12`;
  }

  const data = await fetch_function(MY_API_URL);
  let movies = [];
  movies.push(...data.response);

  movies.forEach(movie => createMovie(row, movie));

  movieListing.append(row);
}

window.addEventListener('load', initializeIndexPage);
