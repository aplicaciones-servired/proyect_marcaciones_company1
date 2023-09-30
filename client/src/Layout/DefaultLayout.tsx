import { Link } from "react-router-dom";

interface DefaultLayoutProps {
  children: React.ReactNode
}
export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <header className="w-screen h-auto">
        <nav>
          <ul className="flex justify-center p-4">
            <li className="px-4 font-semibold bg-green-200 rounded-lg mx-4"><Link to="/">Iniciar Sesión</Link></li>
            <li className="px-4 font-semibold bg-green-200 rounded-lg mx-4"><Link to="/signup">Registrarse</Link></li>
          </ul>
        </nav>
      </header>
      <main className="w-screen h-screen flex justify-center items-center bg-blue-200">
        {children}
      </main>
    </>
  )
}