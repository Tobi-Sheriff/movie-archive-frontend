import { createNav, fetchAndRenderMovies, fetch_function } from '../utils/pageCreation.js';
import { config } from '../config/config.js';
import '../css/style.css';

async function initializeIndexPage() {
	createNav();

	const INITIAL_PAGE = 1;
	let baseApiUrl;
	if (process.env.NODE_ENV === 'development') {
		baseApiUrl = `${config.devApiUrl}/v1/movies`;
	} else {
		baseApiUrl = `${config.prodApiUrl}/v1/movies`;
	}

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
