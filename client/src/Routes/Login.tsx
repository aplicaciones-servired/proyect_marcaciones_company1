import { useState } from "react";
import { DefaultLayout } from "../Layout/DefaultLayout";
import { useAuth } from "../Auth/AuthProvider";
import axios from "axios";

export function Login() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth()


  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    axios.post('http://localhost:5000/api/login', { user, password })
      .then(data => {
        if (data.status === 200) {
          auth.isAuthenticated
        }
      })
  }


  return (
    <DefaultLayout>

      <form className="w-72 pb-40" onSubmit={handleSubmit}>
        <h1 className='text-center font-semibold pb-4 text-xl'>Iniciar Session</h1>
        <input value={user} onChange={ev => setUser(ev.target.value)} type="text" placeholder="Usuario"
          className="block w-full rounded-md  border p-2 mb-2" required={true} />
        <input value={password} onChange={ev => setPassword(ev.target.value)} type="password" placeholder="Contraseña"
          className="block w-full rounded-md border p-2 mb-2" required={true} />
        <button className="bg-blue-500 text-white block w-full rounded-md p-2 font-semibold shadow-lg">
          Iniciar Session
        </button>
      </form>
    </DefaultLayout>
  )

}