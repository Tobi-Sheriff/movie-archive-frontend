import { config } from '../config/config.js';
export const genres = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
]

export const truncate = (words, maxLength) => {
  return words.length > maxLength ? `${words.slice(0, maxLength)}…` : words;
}

export const createElement = (tag, attributes = {}, text = '') => {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  if (text) element.textContent = text;
  return element;
}

export const createNav = () => {
  const hamburgerDiv = document.querySelector('.hamburger');

  const menuUl = createElement('ul', { 'class': 'menu-ul' });
  const menuLink = createElement('a', { 'class': 'menu-link', 'href': '/search' });
  const menuItem = createElement('li', { 'class': 'menu-list' }, 'Search Page');
  menuLink.appendChild(menuItem);

  hamburgerDiv.addEventListener('click', () => {
    hamburgerDiv.classList.toggle('active');

    menuUl.appendChild(menuLink);
    menuUl.classList.toggle('active');
    hamburgerDiv.append(menuUl);
  })

  const input = document.querySelector('.nav-search');
  const ul = document.querySelector('.suggestions');

  input.addEventListener("input", async (event) => {
    const query = event.target.value.trim().toLowerCase();

    // Clear previous suggestions
    ul.innerHTML = "";
    ul.style.display = "none";

    if (query.length === 0) return;

    const searchApiUrl = `${config.apiUrl}/v1/movies/search?q=${query}&page=1&limit=10`;
    const data = await fetch_function(searchApiUrl);

    // Filter suggestions
    const filteredMovies = data.response.slice(0, 5);

    // Create list and  Populate dropdown
    filteredMovies.forEach((movie) => {
      const listLink = createElement('a', { 'href': `details/${movie.id}` },);
      const listItem = createElement('li', {}, truncate(movie.title, 30));
      listLink.appendChild(listItem);

      // Handle selection
      listLink.addEventListener("click", () => {
        ul.innerHTML = ""; // Clear suggestions
        ul.style.display = "none";
      });

      ul.appendChild(listLink);
    });

    if (filteredMovies.length > 0) {
      ul.style.display = "block"; // Show suggestions
    }
  });

  // Hide suggestions if clicking outside
  document.addEventListener('click', (e) => {
    if (!document.querySelector(".right-nav").contains(e.target)) {
      ul.innerHTML = "";
      ul.style.display = "none";
    }
  });
}

export const createMovie = (row, movie) => {
  const column = createElement('div', { 'class': 'columns', 'data-id': movie.id });
  const figure = createElement('figure', { 'class': 'movie-figure' });

  // Image container
  const imageAnchor = createElement('a', { href: `details/${movie.id}` });
  const movieImage = createElement(
    'img',
    {
      src: `https://image.tmdb.org/t/p/w200${movie.poster}`,
      alt: movie.title
    }
  );

  let movieGenre = [];
  movie.genres.forEach(id => {
    genres.forEach(genre => {
      if (id === genre.id) {
        movieGenre.push(genre.name);
      }
    })
  })

  // Hover text container
  const hoverText = createElement('div', { class: 'hover-text' });
  const parsedRating = parseFloat(movie.ratings);
  const hoverTextData1 = createElement('p', { 'class': 'hover-rating' }, `${parsedRating.toFixed(1)} / 10`);
  hoverText.appendChild(hoverTextData1);
  movieGenre.forEach(genre => {
    hoverText.append(createElement('p', { 'class': 'hover-genre' }, `${genre}`));
  })

  // Movie title and release year
  const figcaption = createElement('figcaption');
  const MAX_LENGTH = 25;
  const titleAnchor = createElement('a', { href: 'details' }, truncate(movie.title, MAX_LENGTH));
  const movieYear = movie.release_date.split("-");
  const releaseYear = createElement('p', { class: 'movie-year' }, movieYear[0]);

  // Append elements
  imageAnchor.append(movieImage, hoverText);
  figcaption.append(titleAnchor, releaseYear);
  figure.append(imageAnchor, figcaption);
  column.appendChild(figure);
  row.appendChild(column);

  return row;
}

const topControlBtn = createElement('div', { 'class': 'top-control-btn' });
const backSkip = createElement('button', { 'class': 'back-skip-btn' }, '<<<');
const topPrev = createElement('button', { 'class': 'prev-btn' }, 'Prev');
const topNext = createElement('button', { 'class': 'next-btn' }, 'Next');
const forwardSkip = createElement('button', { 'class': 'forward-skip-btn' }, '>>>');
topControlBtn.append(backSkip, topPrev, topNext, forwardSkip);

export const fetchAndRenderMovies = async (data, page) => {
  const movieListing = document.querySelector('.movie-listing.container');
  const row = document.querySelector('.movie-row');
  movieListing.appendChild(row);

  let movies = [];
  movies.push(...data.response);

  row.innerHTML = '';
  movies.forEach(movie => createMovie(row, movie));

  // Update button `data-value`
  topPrev.setAttribute('data-value', page);
  topNext.setAttribute('data-value', page);
  backSkip.setAttribute('data-value', page);
  forwardSkip.setAttribute('data-value', page);

  if (page <= 1) {
    topPrev.setAttribute('class', 'prev-btn disabled');
    topPrev.disabled = true;
    backSkip.setAttribute('class', 'back-skip-btn disabled');
    backSkip.disabled = true;
  } else if (page > 1 && page < 6) {
    topPrev.setAttribute('class', 'prev-btn');
    topPrev.disabled = false;
    backSkip.setAttribute('class', 'back-skip-btn disabled');
    backSkip.disabled = true;
  } else {
    topPrev.setAttribute('class', 'prev-btn');
    topPrev.disabled = false;
    backSkip.setAttribute('class', 'back-skip-btn');
    backSkip.disabled = false;
  }

  if (page >= data.pagination.totalPages) {
    topNext.setAttribute('class', 'next-btn disabled');
    topNext.disabled = true;
    forwardSkip.setAttribute('class', 'forward-skip-btn disabled');
    forwardSkip.disabled = true;
  } else if ((page > (data.pagination.totalPages - 5)) && (page < data.pagination.totalPages)) {
    topNext.setAttribute('class', 'next-btn');
    topNext.disabled = false;
    forwardSkip.setAttribute('class', 'forward-skip-btn disabled');
    forwardSkip.disabled = true;
  } else {
    topNext.setAttribute('class', 'next-btn');
    topNext.disabled = false;
    forwardSkip.setAttribute('class', 'forward-skip-btn');
    forwardSkip.disabled = false;
  }

  document.body.insertBefore(topControlBtn, movieListing);
};

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

export const fetch_function = async (my_api_url) => {
  try {
    const results = await axios.get(my_api_url);

    return results.data;
  } catch (error) {
    console.error(`Failed to fetch page`, error.message);
  }
};