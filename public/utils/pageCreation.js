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

  const rightNavDiv = createElement('div', { 'class': 'right-nav' });
  const form = createElement('form', { 'action': '/search', 'class': 'nav-form', 'role': 'search' });
  const input = createElement('input', { 'class': 'nav-search', 'type': 'search', 'placeholder': 'search' });
  form.appendChild(input);
  rightNavDiv.appendChild(form);
  form.addEventListener('submit', () => {
    localStorage.setItem('searchQuery', input.value);
  })

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
  const movieYear = createElement('p', { class: 'movie-year' }, movie.year);

  imageAnchor.appendChild(movieImage);
  figure.append(imageAnchor, figcaption);
  figcaption.append(titleAnchor, movieYear);
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