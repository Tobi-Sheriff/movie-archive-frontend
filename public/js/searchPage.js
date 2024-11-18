import { movies } from '../seeds/movieSeed.js';

function truncate(words, maxLength) {
  return words.length > maxLength ? `${words.slice(0, maxLength)}…` : words;
}

function createElement(tag, attributes = {}, text = '') {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  if (text) element.textContent = text;
  return element;
}

function createMovie(row, movie) {
  const column = createElement('div', { class: 'columns' });
  const figure = createElement('figure');
  const imageAnchor = createElement('a', { href: 'details' });
  const movieImage = createElement('img', { src: movie.image, alt: `${movie.title} download` });
  const figcaption = createElement('figcaption');
  const titleAnchor = createElement('a', { href: 'details' }, truncate(movie.title, 25));
  const movieYear = createElement('p', { class: 'movie-year' }, movie.year);

  imageAnchor.appendChild(movieImage);
  figure.append(imageAnchor, figcaption);
  figcaption.append(titleAnchor, movieYear);
  column.appendChild(figure);
  row.appendChild(column);

  return row;
}

function initializeIndexPage() {
  const searchContainer = document.querySelector('.big-search');
  const bigSearchForm = createElement('form', { action: 'GET' });
  bigSearchForm.append(
    createElement('input', { class: 'search-input', type: 'text', placeholder: 'Search..', name: 'search' }),
    createElement('button', { type: 'submit' }, 'Search')
  );
  searchContainer.append(bigSearchForm);

  const movieListing = document.querySelector('.movie-listing.container');
  const row = document.querySelector('.movie-row');

  movies.forEach(movie => createMovie(row, movie));
  movieListing.append(row);
}

window.addEventListener('load', () => {
  initializeIndexPage();
});
