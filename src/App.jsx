import './App.css'
import resultados from './mocks/with-results.json'

// import no_results from './mocks/no-results.json'
// const API_URL='http://www.omdbapi.com/?apikey=9038368e&s=avengers'

export function App () {
  const movies = resultados.Search
  const hasMovies = movies.length > 0

  return (
    <section className='page'>

      <header>
        <h1>Buscador De Peliculas</h1>
        <form className="form">
          <input type="text" placeholder="Avenger, Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              }
            </ul>
              )
            : <p>No se encontraron resultados</p>
        }
      </main>

    </section>
  )
}
