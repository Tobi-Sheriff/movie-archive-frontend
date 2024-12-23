import {
  createNav,
  createElement,
  fetchAndRenderMovies,
  fetch_function
} from '../utils/pageCreation.js';
import { config } from '../config/config.js';
import '../css/style.css';

async function initializeSearchPage() {
  createNav();

  const searchContainer = document.querySelector('.big-search');
  const bigSearchForm = createElement('form', { 'action': '/search' });
  const bigSearchInput = createElement('input', { 'class': 'search-input', 'type': 'text', 'placeholder': 'Search..', 'name': 'search', 'autocomplete': 'off' });
  const bigSearchBtn = createElement('button', { 'type': 'submit' }, 'Search');

  bigSearchForm.append(bigSearchInput, bigSearchBtn);
  searchContainer.append(bigSearchForm);

  bigSearchForm.addEventListener('submit', () => {
    localStorage.setItem('searchQuery', bigSearchInput.value);
  })

  const INITIAL_PAGE = 1;
  let baseApiUrl;
  if (process.env.NODE_ENV === 'development') {
    baseApiUrl = `${config.devApiUrl}/v1/movies`;
  } else {
    baseApiUrl = `${config.prodApiUrl}/v1/movies`;
  }

  let myApiUrl;
  const callRenderMovies = async (currentPage) => {
    try {
      if (localStorage.getItem('searchQuery')) {
        const searchValue = localStorage.getItem('searchQuery');
        const myApiUrl = `${baseApiUrl}/search?q=${searchValue}&page=${currentPage}&limit=8`;
        const data = await fetch_function(myApiUrl);

        await fetchAndRenderMovies(data, currentPage);
      } else {
        myApiUrl = `${baseApiUrl}?page=${currentPage}&limit=12`;
        const data = await fetch_function(myApiUrl);
        await fetchAndRenderMovies(data, currentPage);
      }
    } catch (error) {
      console.error('Failed to fetch movies:', error.message);
    }
  }

  // Initial render
  callRenderMovies(INITIAL_PAGE);
}

window.addEventListener('load', initializeSearchPage);
