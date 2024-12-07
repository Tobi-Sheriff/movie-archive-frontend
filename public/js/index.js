import { createNav, createElement, fetchAndRenderMovies, fetch_function } from './utils/pageCreation.js';

async function initializeIndexPage() {
	createNav();

	const movieListing = document.querySelector('.movie-listing.container');
	const row = document.querySelector('.movie-row');
	movieListing.appendChild(row);

	const topControlBtn = createElement('div', { 'class': 'top-control-btn' });
	const backSkip = createElement('button', { 'class': 'back-skip-btn' }, '<<<');
	const topPrev = createElement('button', { 'class': 'prev-btn' }, 'Prev');
	const topNext = createElement('button', { 'class': 'next-btn' }, 'Next');
	const forwardSkip = createElement('button', { 'class': 'forward-skip-btn' }, '>>>');
	topControlBtn.append(backSkip, topPrev, topNext, forwardSkip);

	const INITIAL_PAGE = 1;
	const baseApiUrl = `http://localhost:8000/v1/movies`;

	const callRenderMovies = async (currentPage) => {
		try {
			const myApiUrl = `${baseApiUrl}?page=${currentPage}&limit=12`;
			const data = await fetch_function(myApiUrl);

			await fetchAndRenderMovies(data, row, currentPage, backSkip, topPrev, topNext, forwardSkip);
		} catch (error) {
			console.error('Failed to fetch movies:', error.message);
		}
	}

	// Initial render
	callRenderMovies(INITIAL_PAGE);

	// Event listeners for Prev and Next buttons
	topPrev.addEventListener('click', async () => {
		let currentPage = parseInt(topPrev.getAttribute('data-value'));
		currentPage -= 1;
		await callRenderMovies(currentPage);
	});
	topNext.addEventListener('click', async () => {
		let currentPage = parseInt(topNext.getAttribute('data-value'));
		currentPage += 1;
		await callRenderMovies(currentPage);
	});

	// Event listeners for back skip and forward skip buttons
	backSkip.addEventListener('click', async () => {
		let currentPage = parseInt(backSkip.getAttribute('data-value'));
		currentPage -= 5;
		await callRenderMovies(currentPage);
	});
	forwardSkip.addEventListener('click', async () => {
		let currentPage = parseInt(forwardSkip.getAttribute('data-value'));
		currentPage += 5;
		await callRenderMovies(currentPage);
	});

	document.body.insertBefore(topControlBtn, movieListing);
}

window.addEventListener('load', initializeIndexPage);
