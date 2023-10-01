import { useState } from "react";
import { DefaultLayout } from "../Layout/DefaultLayout";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";
import axios from "axios";

export function SigUp() {

  const [names, setNames] = useState('');
  const [lastNames, setLastNames] = useState('');
  const [document, setDocument] = useState('');
  const auth = useAuth()

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    axios.post('http://localhost:5000/api/signup', { names, lastNames, document })
      .then(data => {
        console.log(data);
      })

    if (auth.isAuthenticated) {
      return <Navigate to='/dashboard' />
    }
  }

  return (
    <DefaultLayout>
      <form className="w-72 pb-40" onSubmit={handleSubmit}>
        <h1 className='text-center font-semibold pb-4 text-xl'>Ingresa Tus Datos De Registro</h1>
        <input value={names} onChange={ev => setNames(ev.target.value)} type="text" placeholder="Nombres"
          className="block w-full rounded-md  border p-2 mb-2" required={true} />
        <input value={lastNames} onChange={ev => setLastNames(ev.target.value)} type="text" placeholder="Apellidos"
          className="block w-full rounded-md border p-2 mb-2" required={true} />
        <input value={document} onChange={ev => setDocument(ev.target.value)} type="text" placeholder="Número De Cédula / ID"
          className="block w-full rounded-md border p-2 mb-2" required={true} />
        <button className="bg-blue-500 text-white block w-full rounded-md p-2 font-semibold shadow-lg">
          Registrarse
        </button>
      </form>
    </DefaultLayout>

  )
}