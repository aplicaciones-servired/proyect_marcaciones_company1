import resultados from '../mocks/with-results.json'
// import no_results from './mocks/no-results.json'
// const API_URL='http://www.omdbapi.com/?apikey=9038368e&s=avengers'

export function useMovies () {
  const movies = resultados.Search || []
  // TODO:
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
