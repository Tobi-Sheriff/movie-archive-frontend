// Import Axios and Mock it
const axios = require('axios');

const baseApiUrl = `http://localhost:8000/v1/movies`
const PAGE_NUMBER = 1, LIMIT_NUMBER = 10, SEARCH_VALUE = 'one';

// Fetch Movies
const fetchMovies = async () => {
  try {
    const response = await axios.get(`${baseApiUrl}?page=${PAGE_NUMBER}&limit=${LIMIT_NUMBER}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

// Search Movies
const searchMovies = async () => {
  try {
    const response = await axios.get(`${baseApiUrl}/search?q=${SEARCH_VALUE}&page=${PAGE_NUMBER}&limit=${LIMIT_NUMBER}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

// Get Movie Details
const movieDetails = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

// // DOM manipulation example
// const updateMovieList = (movies) => {
//   const movieList = document.getElementById('movie-list');
//   movieList.innerHTML = ''; // Clear existing content
//   movies.forEach((movie) => {
//     const li = document.createElement('li');
//     li.textContent = movie.title;
//     movieList.appendChild(li);
//   });
// };

// TEST CASES
describe('fetchMovies', () => {
  it('should fetch movies from the API', async () => {
    // Call the function
    const movies = await fetchMovies();

    // Validate response structure
    expect(Array.isArray(movies.response)).toBe(true);
    expect(movies.response.length).toBeLessThanOrEqual(LIMIT_NUMBER);

    // Validate individual movie structure
    movies.response.forEach(movie => {
      expect(movie).toHaveProperty('id');
      expect(movie).toHaveProperty('title');
      expect(movie).toHaveProperty('release_date');
      expect(movie).toHaveProperty('genres');
      expect(movie).toHaveProperty('ratings');
    });
  });

  // it('should return null if the API call fails', async () => {
  //   // Mock Axios failure
  //   axios.get = jest.fn(() => Promise.reject(new Error('Network Error')));

  //   // Call the function
  //   const movies = await fetchMovies();

  //   // Assert the result
  //   expect(movies).toBeNull();
  // });
});

describe('searchMovies', () => {
  it('should fetch movies from the API using search value', async () => {
    // Call the function
    const movies = await searchMovies();

    // Validate response structure
    expect(Array.isArray(movies.response)).toBe(true);
    expect(movies.response.length).toBeLessThanOrEqual(LIMIT_NUMBER);

    // Validate individual movie structure
    movies.response.forEach(movie => {
      expect(movie).toHaveProperty('id');
      expect(movie).toHaveProperty('title');
      expect(movie).toHaveProperty('release_date');
      expect(movie).toHaveProperty('genres');
      expect(movie).toHaveProperty('ratings');
    });
  });
});

describe('movieDetails', () => {
  it('Should fetch a movie with using its ID', async () => {
    const movieApiUrl = `${baseApiUrl}/5`;

    // Call the function
    const movie = await movieDetails(movieApiUrl);

    expect(movie.response).toEqual(expect.objectContaining({
      id: 5,
      title: '12 Angry Men',
      release_date: '1957-04-10',
      genres: expect.arrayContaining([18]),
    }));
  });

  it('Should fetch a list of comments associated with the movie ID', async () => {
    const commentApiUrl = `${baseApiUrl}/${1}/comments?page=1&limit=${LIMIT_NUMBER}`;

    // Call the function
    const comment = await movieDetails(commentApiUrl);

    const expectedResponse = [
      {
        movie_id: 1,
        author: 'Mia Hall',
        content: 'A very interesting movie, You should watch it',
      }
    ]

    // eslint-disable-next-line no-unused-vars
    const commentCheck = comment.response.map(({ id, created_at, ...rest }) => rest);
    expect(commentCheck).toEqual(expectedResponse);
  });

  // beforeEach(() => {
  //   // Set up a mock DOM
  //   document.body.innerHTML = '<ul id="movie-list"></ul>';
  // });

  // it('should update the movie list in the DOM', () => {
  //   const mockMovies = [{ title: 'The Shawshank Redemption' }, { title: '12 Angry Men' }];

  //   // Call the function
  //   updateMovieList(mockMovies);

  //   // Assert the DOM content
  //   const movieList = document.getElementById('movie-list');
  //   expect(movieList.children.length).toBe(2);
  //   expect(movieList.children[0].textContent).toBe('The Shawshank Redemption');
  //   expect(movieList.children[1].textContent).toBe('12 Angry Men');
  // });

  // it('should clear the existing movie list before adding new items', () => {
  //   // Add existing content to the DOM
  //   const movieList = document.getElementById('movie-list');
  //   movieList.innerHTML = '<li>Old Movie</li>';

  //   const mockMovies = [{ title: 'The Shawshank Redemption' }];

  //   // Call the function
  //   updateMovieList(mockMovies);

  //   // Assert the DOM content
  //   expect(movieList.children.length).toBe(1);
  //   expect(movieList.children[0].textContent).toBe('The Shawshank Redemption');
  // });
});
