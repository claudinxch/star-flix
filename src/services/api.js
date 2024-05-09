//BASE DA API: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=a092915bd00b8eced4c5f723bb2f2e2e  or final &language=pt-BR

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDkyOTE1YmQwMGI4ZWNlZDRjNWY3MjNiYjJmMmUyZSIsInN1YiI6IjY1YTE3OTk2ZTcyZmU4MDEyYzMwODJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ls9YKNIpUzBR40AwNe5J1Ke_wBrDeOJ-C3VY7ol_5-M'
  }
};

export const moviesPlaying = async () => {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a092915bd00b8eced4c5f723bb2f2e2e';

  try {
    const response = await fetch(url, options);
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const movieDetails = async (movieId) => {
  const urlMovieDetails = `https://api.themoviedb.org/3/movie/${movieId}?api_key=a092915bd00b8eced4c5f723bb2f2e2e`;

  try {
    const response = await fetch(urlMovieDetails, options);
    if (!response.ok) {
      throw new Error('Movie not found');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.error('movie not found', err);
    throw err;
  }
};

export const topRated = async () => {
  const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a092915bd00b8eced4c5f723bb2f2e2e'

  try {
    const response = await fetch(urlTopRated, options)
    const jsonData = await response.json();
    return jsonData;

  } catch (err) {
    throw err
  }
}

export const upcoming = async () => {
  const urlUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=a092915bd00b8eced4c5f723bb2f2e2e'

  try {
    const response = await fetch(urlUpcoming, options);
    const jsonData = await response.json();
    return jsonData;

  } catch (err) {
    throw err
  }
}