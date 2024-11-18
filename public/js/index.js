// require('dotenv').config();
// import process from '../../process';

import { movies } from '../seeds/movieSeed.js';

const apik_key = '';
const tmdb_api_url = `https://api.themoviedb.org/3/movie/popular?api_key=${apik_key}`;
const my_api_url = `http://localhost:8000/v1/movies?page=1&limit=5`;


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
	const movieImage = createElement(
		'img',
		{
			src: `https://image.tmdb.org/t/p/w200//${movie.poster}`,
			alt: movie.title
		}
	);
	const figcaption = createElement('figcaption');
	const titleAnchor = createElement('a', { href: 'details' }, truncate(movie.title, 25));
	const movieYear = createElement('p', { class: 'movie-year' }, movie.release_date);

	imageAnchor.appendChild(movieImage);
	figure.append(imageAnchor, figcaption);
	figcaption.append(titleAnchor, movieYear);
	column.appendChild(figure);
	row.appendChild(column);

	return row;
}

function initializeIndexPage() {
	const movieListing = document.querySelector('.movie-listing.container');
	const row = document.querySelector('.movie-row');

	fetch(my_api_url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {

			console.log(data.response);
			
			data.response.forEach(movie => createMovie(row, movie));
		})
		.catch(err => console.error(err));

	movieListing.appendChild(row);
	document.body.insertBefore(movieListing, document.querySelector('footer'));
}

window.addEventListener('load', () => {
	initializeIndexPage();
});
