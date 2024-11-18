import { movies } from '../seeds/movieSeed.js';

function createElement(tag, attributes = {}, text = '') {
	const element = document.createElement(tag);
	Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
	if (text) element.textContent = text;
	return element;
}

function detailsSection() {
	const detailSection = createElement('section', { class: 'details-section' });
	const movieInfo = createElement('div', { class: 'movie-info' });
	const movieDiv = createElement('div', { class: 'movie-image' });
	const movieImage = createElement('img', { src: 'images/thelastbreath.jpg', alt: 'A Quiet Place download' });

	const movieDetails = createElement('div', { class: 'movie-details' });
	const titleElement = createElement('h1', {}, movies[0].title);
	const yearElement = createElement('p', {}, `Year: ${movies[0].year}`);
	const genresElement = createElement('p', {}, `Genres: ${movies[0].genres}`);
	const likesElement = createElement('p', {}, `Likes: ${movies[0].likes}`);
	const ratingsTitle = createElement('h2', {}, 'Official Ratings');
	const rottenTomatoes = createElement('p', {}, 'Rotten Tomatoes');
	const imdb = createElement('p', {}, 'IMDB');

	movieDetails.append(titleElement, yearElement, genresElement, likesElement, ratingsTitle, rottenTomatoes, imdb);

	const similarMoviesContainer = createSimilarMovies();
	movieDiv.appendChild(createElement('figure').appendChild(movieImage));
	movieInfo.append(movieDiv, movieDetails, similarMoviesContainer);
	detailSection.appendChild(movieInfo);

	return detailSection;
}

function createSimilarMovies() {
	const similarMoviesContainer = createElement('div', { class: 'similar-movies' });
	const similarMoviesTitle = createElement('h1', {}, 'Similar movies');
	const similarMoviesBox = createElement('div', { class: 'similar-movies-box' });
	const imagesContainer = createElement('div');

	movies.slice(0, 4).forEach(movie => {
		const imageAnchor = createElement('a', { href: 'details' });
		const movieImage = createElement(
			'img',
			{
				src: `https://image.tmdb.org/t/p/w200//${movie.poster}`,
				alt: `${movie.title} download`
			}
		);
		imageAnchor.appendChild(movieImage);
		imagesContainer.appendChild(imageAnchor);
	});

	similarMoviesBox.appendChild(imagesContainer);
	similarMoviesContainer.append(similarMoviesTitle, similarMoviesBox);
	return similarMoviesContainer;
}


function trailerSection() {
	const trailerSection = createElement('section', { class: 'trailer-section' });
	const trailerRow = createElement('div', { class: 'trailer-row' });

	const movieTrailer = createElement('div', { class: 'movie-trailer' });
	const video = createElement('video', { controls: 'controls' });
	const movieSource = createElement('source', { src: 'video.mp4', type: 'video/mp4' });
	video.append(movieSource, document.createTextNode('Your browser does not support the video tag.'));
	movieTrailer.appendChild(video);

	const thumbnails = Array(2).fill().map(() => {
		const thumbnail = createElement('div', { class: 'movie-image' });
		const image = createElement('img', { src: 'images/medium-screenshot2.jpg', alt: 'Image description' });
		thumbnail.appendChild(image);
		return thumbnail;
	});

	trailerRow.append(movieTrailer, ...thumbnails);
	trailerSection.appendChild(trailerRow);

	return trailerSection;
}


function summarySection() {
	const summarySection = createElement('section', { class: 'summary-section' });

	// Plot Summary
	const movieSummary = createElement('div', { class: 'movie-summary' });
	const plotSummary = createElement('div', { class: 'plot-summary' });
	plotSummary.append(
		createElement('h2', {}, 'Plot Summary'),
		createElement('p', {}, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eius alias iusto nisi omnis hic fugit? Id aut iusto incidunt dolor doloremque dolore autem ratione corporis. Quam ipsum commodi incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt commodi nobis voluptate repellendus laudantium maiores atque magnam alias numquam. Quia soluta provident eligendi suscipit et fuga pariatur incidunt iure.')
	);

	// Director and Top Cast
	const movieArtists = createElement('div', { class: 'movie-artists' });

	const directorSection = createElement('div', { class: 'director' });
	const directorTitle = createElement('h2', {}, 'Director');
	directorSection.appendChild(directorTitle)

	const directortContent = createElement('div', { class: 'content' });
	directortContent.append(
		createElement('img', { src: 'images/nm0000190.jpg', alt: 'Director Image' }),
		createElement('p', {}, 'Name Name')
	);
	directorSection.appendChild(directortContent)


	const topCastSection = createElement('div', { class: 'top-cast' });
	topCastSection.appendChild(
		createElement('h2', {}, 'Top Cast')
	);

	for (let i = 0; i < 3; i++) {
		const content = createElement('div', { class: 'content' });
		content.append(
			createElement('img', { src: 'images/nm0506613.jpg', alt: 'cast name' }),
			createElement('p', {}, 'Name Name')
		);
		topCastSection.appendChild(content);
	}

	movieArtists.append(directorSection, topCastSection);
	movieSummary.append(plotSummary, movieArtists);
	summarySection.appendChild(movieSummary);

	return summarySection;
}

function commentsSection() {
	const commentsSection = createElement('section', { class: 'comments-section' });
	const movieReviews = createElement('div', { class: 'movie-reviews' });

	// User Comments
	const usersComments = createElement('div', { class: 'users-comments' });
	usersComments.append(
		createElement('h2', {}, '50 Comments')
	);

	const scrollableContent = createElement('div', { class: 'scrollable-comments' });
	usersComments.append(scrollableContent);

	for (let i = 0; i < 5; i++) {
		const commentComment = createElement('div', { class: 'comment-content' });
		scrollableContent.append(commentComment);

		const divcontainer = createElement('div', {});
		divcontainer.append(
			createElement('p', { class: 'user-name' }, 'Name Name'),
			createElement('p', {}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusantium voluptas. Quod vero eius rerum minima eveniet quae numquam exercitationem sed natus, doloribus est reprehenderit, alias quaerat corrupti nulla itaque.')
		);

		commentComment.append(
			createElement('img', { src: `images/nm0147147.jpg`, alt: 'User Image' }),
			divcontainer
		);
	}


	// IMDb Reviews
	const imdbReviews = createElement('div', { class: 'imdb-reviews' });
	const imdbReviewTtile = createElement('h2', {}, 'Movie Reviews');
	imdbReviews.append(imdbReviewTtile);

	for (let i = 0; i < 3; i++) {
		const reviewDetails = createElement('div', { class: 'review-details' });

		const reviewedByContainer = createElement('div', { class: 'reviewd-by' });
		reviewedByContainer.append(
			createElement('span', { class: 'pre-span' }, 'Reviewed by'),
			createElement('p', {}, 'Peter Straughs'),
			createElement('span', { class: 'post-span' }, '9/10')
		);

		const reviewText = createElement('p', {}, 'Id aut iusto incidunt dolor doloremque dolore autem ratione corporis. Quam ipsum commodi incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.');

		const readMoreLink = createElement('span', { class: 'read-more' }, 'Read more');

		reviewDetails.append(reviewedByContainer, reviewText, readMoreLink);

		imdbReviews.append(
			reviewDetails,
			createElement('hr', {})
		);
	}

	movieReviews.append(usersComments, imdbReviews);
	commentsSection.appendChild(movieReviews);

	return commentsSection;
}

// Initialize Details Page with all Sections
function initializeDetailsPage() {
	const container = document.querySelector('.container');
	container.append(detailsSection(), trailerSection(), summarySection(), commentsSection());
}

window.addEventListener('load', initializeDetailsPage);