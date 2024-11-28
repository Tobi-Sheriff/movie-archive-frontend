import { createNav, genres, createElement, fetch_function } from '../utils/pageCreation.js';

async function detailsSection(movie) {
	const detailSection = createElement('section', { class: 'details-section' });
	const movieInfo = createElement('div', { class: 'movie-info' });
	const movieDiv = createElement('div', { class: 'movie-image' });
	const movieImage = createElement(
		'img',
		{
			src: `https://image.tmdb.org/t/p/w200//${movie.poster}`,
			alt: 'A Quiet Place download'
		}
	);

	const movieDetails = createElement('div', { class: 'movie-details' });
	const titleElement = createElement('h1', { class: 'title' }, movie.title);

	const movieYear = movie.release_date.split("-");
	const yearElement = createElement('p', { class: 'year' }, movieYear[0]);

	let movieGenre = [];
	movie.genres.forEach(id => {
		genres.forEach(genre => {
			if (id === genre.id) {
				movieGenre.push(genre.name);
			}
		})
	})
	const splitGenre = movieGenre.join(" / ");

	const genresElement = createElement('p', { class: 'genre' }, splitGenre);
	const likesElement = createElement('p', {}, `Likes: ${movie.likes}`);
	const ratingsTitle = createElement('h2', {}, 'Official Ratings');
	const rottenTomatoes = createElement('p', {}, 'Rotten Tomatoes');
	const imdb = createElement('p', {}, 'IMDB');
	movieDetails.append(titleElement, yearElement, genresElement, likesElement, ratingsTitle, rottenTomatoes, imdb);


	const similarMoviesContainer = await createSimilarMovies(movie);

	movieDiv.appendChild(createElement('figure').appendChild(movieImage));
	movieInfo.append(movieDiv, movieDetails, similarMoviesContainer);
	detailSection.appendChild(movieInfo);

	return detailSection;
}

async function createSimilarMovies(movie) {
	const similarMoviesContainer = createElement('div', { class: 'similar-movies' });
	const similarMoviesTitle = createElement('h1', {}, 'Similar movies');
	const similarMoviesBox = createElement('div', { class: 'similar-movies-box' });
	const imagesContainer = createElement('div');

	const MY_API_URL = `http://localhost:8000/v1/movies/${movie.id}/similar-movies?page=1&limit=10`;

	const data = await fetch_function(MY_API_URL);
	let movies = [];
	movies.push(...data.response);

	const MAX_DISPLAY = 4;
	movies.slice(0, MAX_DISPLAY).forEach(movie => {
		const imageAnchor = createElement('a', { href: `details/${movie.id}` });

		const movieImage = createElement(
			'img',
			{
				src: `https://image.tmdb.org/t/p/w200//${movie.poster}`,
				alt: `${movie.title}`
			}
		);
		imageAnchor.appendChild(movieImage);
		imagesContainer.appendChild(imageAnchor);
	});

	similarMoviesBox.appendChild(imagesContainer);
	similarMoviesContainer.append(similarMoviesTitle, similarMoviesBox);
	return similarMoviesContainer;
}


async function trailerSection(movie) {
	const trailerSection = createElement('section', { class: 'trailer-section' });
	const trailerRow = createElement('div', { class: 'trailer-row' });

	const movieTrailer = createElement('div', { class: 'movie-trailer' });

	const movieSource = createElement('iframe', {
		src: `https://www.youtube.com/embed/${movie.trailer}`,
		width: '300',
		height: '315',
		frameborder: '0',
		allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
		allowfullscreen: true,
	});

	movieTrailer.appendChild(movieSource);

	const thumbnails = Array(2).fill().map((_, index) => {
		const thumbnail = createElement('div', { class: 'movie-image' });
		const image = createElement(
			'img',
			{
				src: `https://image.tmdb.org/t/p/w300//${movie.backdrop[index]}`,
				alt: 'Image description'
			}
		);

		thumbnail.appendChild(image);
		return thumbnail;
	});

	trailerRow.append(movieTrailer, ...thumbnails);
	trailerSection.appendChild(trailerRow);

	return trailerSection;
}


async function summarySection(movie) {
	const summarySection = createElement('section', { class: 'summary-section' });

	// Plot Summary
	const movieSummary = createElement('div', { class: 'movie-summary' });
	const plotSummary = createElement('div', { class: 'plot-summary' });
	plotSummary.append(
		createElement('h2', {}, 'Plot Summary'),
		createElement('p', {}, `${movie.overview}`)
	);

	// Director and Top Cast
	const movieArtists = createElement('div', { class: 'movie-artists' });

	const directorSection = createElement('div', { class: 'director' });
	const directorTitle = createElement('h2', {}, 'Director');
	directorSection.appendChild(directorTitle)

	const directortContent = createElement('div', { class: 'content' });

	directortContent.append(
		createElement(
			'img',
			{
				src: `https://image.tmdb.org/t/p/w200/${movie.director[0].profile}`,
				alt: 'Director Image'
			}
		),
		createElement('p', {}, `${movie.director[0].name}`)
	);
	directorSection.appendChild(directortContent)


	const topCastSection = createElement('div', { class: 'top-cast' });
	topCastSection.appendChild(
		createElement('h2', {}, 'Top Cast')
	);

	// let content;
	movie.top_cast.forEach(cast => {
		const content = createElement('div', { class: 'content' });
		content.append(
			createElement(
				'img',
				{
					src: `https://image.tmdb.org/t/p/w200/${cast.profile}`,
					alt: 'Cast Image'
				}
			),
			createElement('p', {}, `${cast.name}`)
		)
		topCastSection.appendChild(content);

	});

	movieArtists.append(directorSection, topCastSection);
	movieSummary.append(plotSummary, movieArtists);
	summarySection.appendChild(movieSummary);

	return summarySection;
}

async function commentsSection(movie, comments, commentPagination, INITIAL_LIMIT) {
	const commentsSection = createElement('section', { class: 'comments-section' });
	const movieReviews = createElement('div', { class: 'movie-reviews' });

	// User Comments Section
	const usersComments = createElement('div', { class: 'users-comments' });
	usersComments.append(
		createElement('h2', {}, `${commentPagination.totalCount} Comments`) // Update comment count dynamically
	);

	const scrollableContent = createElement('div', { class: 'scrollable-comments' });
	usersComments.append(scrollableContent);

	// Render comments function
	const renderComments = (comments) => {
		scrollableContent.innerHTML = ''; // Clear existing comments
		comments.forEach((comment) => {
			const commentContent = createElement('div', { class: 'comment-content' });

			const divContainer = createElement('div', {});
			divContainer.append(
				createElement('p', { class: 'user-name' }, comment.author),
				createElement('p', {}, comment.content)
			);

			commentContent.append(
				createElement('img', { src: `images/nm0147147.jpg`, alt: 'User Image' }),
				divContainer
			);

			scrollableContent.append(commentContent);
		});
	};

	// Initial render of comments
	renderComments(comments);

	const loadComments = createElement(
		'button',
		{ 'class': 'load-comment', 'type': 'button', 'data-limit': INITIAL_LIMIT },
		'Load more comments'
	);

	loadComments.addEventListener('click', async () => {
		const CURRENT_LIMIT = parseInt(loadComments.getAttribute('data-limit'), 10);
		const NEW_LIMIT = CURRENT_LIMIT + 10; // Increase limit by 10
		loadComments.setAttribute('data-limit', NEW_LIMIT);

		const COMMENT_API_URL = `http://localhost:8000/v1/movies/${movie.id}/comments?page=1&limit=${NEW_LIMIT}`;

		try {
			const commentResults = await axios.get(COMMENT_API_URL);
			const newComments = commentResults.data.response;

			renderComments(newComments); // Re-render with new comments
			if (commentPagination.totalCount > NEW_LIMIT) {
				scrollableContent.appendChild(loadComments);

			}
		} catch (error) {
			console.error('Failed to fetch comments:', error.message);
		}
	});

	scrollableContent.appendChild(loadComments);

	// Comment Submission Form
	const commentDiv = createElement('div', { 'class': 'comment-div' });
	const form = createElement('form', { 'class': 'comment-form' });
	const input = createElement('input', {
		'class': 'comment-input',
		'type': 'text',
		'placeholder': 'Leave a comment',
	});
	const submitBtn = createElement('button', { 'class': 'comment-btn', 'type': 'submit' }, 'Submit');
	form.append(input, submitBtn);
	commentDiv.appendChild(form);
	usersComments.appendChild(commentDiv);

	function getRandomNumber() {
		return Math.floor(Math.random() * 10) + 1;
	}
	const randomNames = [
		"Ethan Thompson",
		"Ava Lee",
		"Liam Patel",
		"Sophia Kim",
		"Noah Brooks",
		"Mia Hall",
		"Lucas Ross",
		"Isabella Martin",
		"Oliver Jenkins"
	]
	// Handle form submission
	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		const commentData = {
			content: input.value,
			author: randomNames[getRandomNumber()],
		};

		try {
			const response = await axios.post(
				`http://localhost:8000/v1/movies/${movie.id}/comments`,
				JSON.stringify(commentData),
				{ headers: { 'Content-Type': 'application/json' } }
			);

			input.value = ''; // Clear input field
		} catch (error) {
			console.error('Failed to post comment:', error.message);
		}
	});

	// IMDb Reviews Section
	const imdbReviews = createElement('div', { class: 'imdb-reviews' });
	const imdbReviewTitle = createElement('h2', {}, 'Movie Reviews');
	imdbReviews.append(imdbReviewTitle);

	for (let i = 0; i < 3; i++) {
		const reviewDetails = createElement('div', { class: 'review-details' });

		const reviewedByContainer = createElement('div', { class: 'reviewd-by' });
		reviewedByContainer.append(
			createElement('span', { class: 'pre-span' }, 'Reviewed by'),
			createElement('p', {}, 'Reviewer Name'),
			createElement('span', { class: 'post-span' }, '9/10')
		);

		const reviewText = createElement('p', {}, 'Lorem ipsum review text...');
		const readMoreLink = createElement('span', { class: 'read-more' }, 'Read more');
		reviewDetails.append(reviewedByContainer, reviewText, readMoreLink);

		imdbReviews.append(reviewDetails, createElement('hr', {}));
	}

	movieReviews.append(usersComments, imdbReviews);
	commentsSection.appendChild(movieReviews);

	return commentsSection;
}


// Initialize Details Page with all Sections
async function initializeDetailsPage() {
	createNav();

	const container = document.querySelector('.container');

	const urlParams = window.location;
	const MOVIE_ID = urlParams.pathname.split("/")[2];
	const INITIAL_LIMIT = 10;

	const MOVIE_API_URL = `http://localhost:8000/v1/movies/${MOVIE_ID}`;
	const COMMENT_API_URL = `http://localhost:8000/v1/movies/${MOVIE_ID}/comments?page=1&limit=${INITIAL_LIMIT}`;

	let movie = {};
	let comment = [];
	let commentPagination = {};
	try {
		const results = await axios.get(MOVIE_API_URL);
		const commentResults = await axios.get(COMMENT_API_URL);

		movie = { ...results.data.response };
		comment.push(...commentResults.data.response);
		commentPagination = { ...commentResults.data.pagination };
		console.log(commentResults.data);
	} catch (error) {
		console.error(`Failed to fetch page`, error.message);
	}


	container.append(
		await detailsSection(movie),
		await trailerSection(movie),
		await summarySection(movie),
		await commentsSection(movie, comment, commentPagination, INITIAL_LIMIT)
	);
}

window.addEventListener('load', initializeDetailsPage);