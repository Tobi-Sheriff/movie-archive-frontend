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

const truncate = (words, maxLength) => {
  return words.length > maxLength ? `${words.slice(0, maxLength)}…` : words;
}

export const createElement = (tag, attributes = {}, text = '') => {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  if (text) element.textContent = text;
  return element;
}

export const createNav = () => {
  const nav = document.querySelector('.nav-container');
  const logoDiv = createElement('div', { 'class': 'logo' });
  const logoLink = createElement('a', { 'class': 'nav-link', 'href': 'index' });
  const logoImg = createElement('img', { 'src': 'images/logo-YTS.svg', 'alt': 'logo' });

  logoLink.appendChild(logoImg);
  logoDiv.appendChild(logoLink);

  const hamburgerDiv = createElement('div', { 'class': 'hamburger' });
  for (let i = 0; i < 3; i++) {
    const bar = createElement('div', { 'class': 'bar' });
    hamburgerDiv.appendChild(bar);
  }

  // Create nav search
  const rightNavDiv = createElement('div', { 'class': 'right-nav' });
  const searchLink = createElement('a', { 'class': 'search-link', 'href': '/search' }, 'Browse Movies');

  const form = createElement('form', { 'action': '/search', 'class': 'nav-form', 'role': 'search' });
  const input = createElement('input', { 'class': 'nav-search', 'type': 'search', 'placeholder': 'search movies...', 'autocomplete': 'off' });
  const ul = createElement('ul', { 'class': 'suggestions' });

  form.appendChild(input);
  rightNavDiv.append(searchLink, form, ul);

  form.addEventListener('submit', () => {
    localStorage.setItem('searchQuery', input.value);
  });

  // Simulated movie data or fetch it from an API
  const movieTitles = [
    "The boy",
    "Avatar",
    "Avengers",
    "Black Panther",
    "The Batman",
    "The Dark Knight",
    "Iron Man",
    "Spider-Man",
    "The up and the go",
    "The mango is green",
    "Superman Returns",
    "Check the Man",
    "This is the End",
    "The end is new",
  ];

  input.addEventListener("input", async (event) => {
    const query = event.target.value.trim().toLowerCase();

    // Clear previous suggestions
    ul.innerHTML = "";
    ul.style.display = "none";

    if (query.length === 0) return;

    const SEARCH_API_URL = `http://localhost:8000/v1/movies/search?q=${query}&page=1&limit=10`;
    const data = await fetch_function(SEARCH_API_URL);

    // Filter suggestions
    const filteredMovies = data.response.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    ).slice(0, 5);

    // Create list and  Populate dropdown
    filteredMovies.forEach((movie) => {
      const listLink = createElement('a', { 'href': `details/${movie.id}` },);
      const listItem = createElement('li', {}, truncate(movie.title, 30));
      listLink.appendChild(listItem);

      // Handle selection
      listLink.addEventListener("click", () => {
        // searchInput.value = movie.title; // Set selected movie in the input
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
  document.addEventListener("click", (e) => {
    if (!document.querySelector(".right-nav").contains(e.target)) {
      ul.innerHTML = "";
      ul.style.display = "none";
    }
  });

  // Append the logo div, hamburger div, and right-nav div to the nav element
  nav.append(logoDiv, hamburgerDiv, rightNavDiv);
}

export const createMovie = (row, movie) => {
  const column = createElement('div', { 'class': 'columns', 'data-id': movie.id });
  const figure = createElement('figure');
  const imageAnchor = createElement('a', { href: `details/${movie.id}` });
  const movieImage = createElement(
    'img',
    {
      src: `https://image.tmdb.org/t/p/w200${movie.poster}`,
      alt: movie.title
    }
  );
  const figcaption = createElement('figcaption');
  const MAX_LENGTH = 25;
  const titleAnchor = createElement('a', { href: 'details' }, truncate(movie.title, MAX_LENGTH));
	const movieYear = movie.release_date.split("-");
  const releaseYear = createElement('p', { class: 'movie-year' }, movieYear);

  imageAnchor.appendChild(movieImage);
  figure.append(imageAnchor, figcaption);
  figcaption.append(titleAnchor, releaseYear);
  column.appendChild(figure);
  row.appendChild(column);

  return row;
}

export const fetch_function = async (my_api_url) => {
  try {
    const results = await axios.get(my_api_url);
    console.log(results);

    return results.data;
  } catch (error) {
    console.error(`Failed to fetch page`, error.message);
  }
};