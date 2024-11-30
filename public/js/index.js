import { createNav, createElement, createMovie, fetch_function } from '../utils/pageCreation.js';

async function initializeIndexPage() {
	createNav();

	const topControlBtn = createElement('div', { 'class': 'top-control-btn' });
	const topPrev = createElement('button', { 'class': 'prev-btn', 'data-value': '0' }, 'Prev');
	const topNext = createElement('button', { 'class': 'next-btn', 'data-value': '1' }, 'Next');
	topControlBtn.append(topPrev, topNext);

	const movieListing = document.querySelector('.movie-listing.container');
	const row = document.querySelector('.movie-row');
	movieListing.appendChild(row);

	const BASE_API_URL = `http://localhost:8000/v1/movies`;
	let initialPage = 1;

	const fetchAndRenderMovies = async (page) => {
		const MY_API_URL = `${BASE_API_URL}?page=${page}&limit=12`;

		try {
			const data = await fetch_function(MY_API_URL);
			let movies = [];
			movies.push(...data.response);

			row.innerHTML = '';
			movies.forEach(movie => createMovie(row, movie));

			// Update button `data-value`
			topPrev.setAttribute('data-value', page - 1);
			topNext.setAttribute('data-value', page);

			// Disable "Prev" button on the first page
			if (page <= 1) {
				topPrev.disabled = true;
				topPrev.setAttribute('class', 'prev-btn disabled');
			} else {
				topPrev.disabled = false;
				topPrev.setAttribute('class', 'prev-btn');
			}

			// If there are no more pages, disable "Next" button
			if (page === data.pagination.totalPages) {
				topNext.disabled = true;
				topNext.setAttribute('class', 'next-btn disabled');
			} else {
				topNext.disabled = false;
				topNext.setAttribute('class', 'next-btn');
			}
		} catch (error) {
			console.error('Failed to fetch movies:', error.message);
		}
	};

	// Initial fetch
	await fetchAndRenderMovies(initialPage);

	// Event listeners for Prev and Next buttons
	topPrev.addEventListener('click', async () => {
		let currentPage = parseInt(topNext.getAttribute('data-value'));
		currentPage -= 1;
		await fetchAndRenderMovies(currentPage);
	});
	topNext.addEventListener('click', async () => {
		let currentPage = parseInt(topNext.getAttribute('data-value'));
		currentPage += 1;
		await fetchAndRenderMovies(currentPage);
	});

	document.body.insertBefore(topControlBtn, movieListing);

	// document.body.insertBefore(movieListing, document.querySelector('footer'));
}

window.addEventListener('load', initializeIndexPage);
