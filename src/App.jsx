import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

export function App () {
  const { movies: mappedMovies } = useMovies()

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
        <Movies movies={mappedMovies} />
      </main>

    </section >
  )
}
