import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
// import { useRef } from 'react' // permite crear una referencia estable y mutable que no cambia en cada renderizado
import './App.css'

export function App () {
  const { movies } = useMovies()
  // const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    console.log(fields)
  }

  return (
    <section className='page'>

      <header>
        <h1>Buscador De Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" type="text" placeholder="Avenger, Star Wars, The Matrix" />
          <input name="name" type="text" placeholder="Avenger, Star Wars, The Matrix" />
          <input name="lastname" type="text" placeholder="Avenger, Star Wars, The Matrix" />
          <input name="entris" type="text" placeholder="Avenger, Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>

    </section >
  )
}
