import { createNav, fetchAndRenderMovies, fetch_function } from '../utils/pageCreation.js';
import { config } from '../config/config.js';

async function initializeIndexPage() {
	createNav();

	const INITIAL_PAGE = 1;
	const baseApiUrl = `${config.apiUrl}/v1/movies`;

	const callRenderMovies = async (currentPage) => {
		try {
			const myApiUrl = `${baseApiUrl}?page=${currentPage}&limit=12`;
			const data = await fetch_function(myApiUrl);

			await fetchAndRenderMovies(data, currentPage);
		} catch (error) {
			console.error('Failed to fetch movies:', error.message);
		}
	}

	// Initial render
	callRenderMovies(INITIAL_PAGE);

}

window.addEventListener('load', initializeIndexPage);
