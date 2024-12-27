import {
  createNav,
  createElement,
  fetchAndRenderMovies,
  fetch_function
} from '../utils/pageCreation.js';
import { config } from '../config/config.js';

async function initializeSearchPage() {
  createNav();

  const searchContainer = document.querySelector('.big-search');
  const bigSearchForm = createElement('form', { 'action': './search' });
  const bigSearchInput = createElement('input', { 'class': 'search-input', 'type': 'text', 'placeholder': 'Search..', 'name': 'search', 'autocomplete': 'off' });
  const bigSearchBtn = createElement('button', { 'type': 'submit' }, 'Search');

  bigSearchForm.append(bigSearchInput, bigSearchBtn);
  searchContainer.append(bigSearchForm);

  bigSearchForm.addEventListener('submit', () => {
    localStorage.setItem('searchQuery', bigSearchInput.value);
  })

  const INITIAL_PAGE = 1;
  const baseApiUrl = `${config.apiUrl}/v1/movies`;

  const callRenderMovies = async (currentPage) => {
    let myApiUrl, fetchedData;
    try {
      if (localStorage.getItem('searchQuery')) {
        const searchValue = localStorage.getItem('searchQuery');
        myApiUrl = `${baseApiUrl}/search?q=${searchValue}&page=${currentPage}&limit=8`;
        fetchedData = await fetch_function(myApiUrl);

        await fetchAndRenderMovies(fetchedData, currentPage);
      } else {
        myApiUrl = `${baseApiUrl}?page=${currentPage}&limit=12`;
        fetchedData = await fetch_function(myApiUrl);
        await fetchAndRenderMovies(fetchedData, currentPage);
      }
    } catch (error) {
      console.error('Failed to fetch movies:', error.message);
    }
  }

  // Initial render
  callRenderMovies(INITIAL_PAGE);
}

window.addEventListener('load', initializeSearchPage);
