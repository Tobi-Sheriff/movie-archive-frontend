// Import Axios and Mock it
const axios = require('axios');
jest.mock('axios');

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

// TEST CASES
describe('fetchMovies', () => {
  it('should fetch movies from the API', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        response: [
          { id: 1, title: 'Inception', release_date: '2010-07-16', genres: [28, 12], ratings: 8.8 },
          { id: 2, title: 'The Matrix', release_date: '1999-03-31', genres: [28, 12], ratings: 8.7 },
        ],
      },
    });

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
    axios.get.mockResolvedValueOnce({
      data: {
        response: [
          { id: 1, title: 'Inception', release_date: '2010-07-16', genres: [28, 12], ratings: 8.8 },
          { id: 2, title: 'The Matrix', release_date: '1999-03-31', genres: [28, 12], ratings: 8.7 },
        ],
      },
    });

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
    axios.get.mockResolvedValueOnce({
      data: {
        response: {
          id: 5, title: '12 Angry Men', release_date: '2010-07-16', genres: [28, 12], ratings: 8.8
        },
      },
    });

    const movieApiUrl = `${baseApiUrl}/5`;
    // Call the function
    const movie = await movieDetails(movieApiUrl);

    expect(movie.response).toEqual(expect.objectContaining({
      id: 5,
      title: '12 Angry Men',
      release_date: '2010-07-16',
      genres: expect.arrayContaining([28, 12]),
      ratings: expect.any(Number),
    }));
  });

  it('Should fetch a list of comments associated with the movie ID', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        response: [
          { id: 10, movie_id: 1, author: 'Mia Hall', content: 'A very interesting movie, You should watch it' },
        ]
      },
    });
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
});
