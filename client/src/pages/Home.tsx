import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { URL_API } from '../utils/contants';
import { infoMarcacion } from '../types/marcacion';
import { BasicPie } from '../components/ui/donutchart';


export default function Home() {
  const navigate = useNavigate()
  const [data, setData] = useState<infoMarcacion | null>(null)
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(`${URL_API}/infoMarcacion`);
        setData(response.data as infoMarcacion);
        console.log('data', data)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    void fetchData()
  }, [])

  return (

    <main className='h-[90vh] cont_main flex flex-col items-center justify-center dark:text-white mt-5'>
      <h1 className='text-5xl font-bold mb-4 animate-bounce'>Welcome to Our Website!</h1>
      <p className='text-lg mb-8 text-center max-w-md'>
        Aplicativo en desarrollo para la gestión de empleados y sus marcaciones. generación de reportes y auditorias.
      </p>
      <BasicPie datos={data || {}} />
      <button onClick={() => navigate('/empleados')} className='px-6 py-3 bg-sky-300 text-neutral-950 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 mt-5'>
        Get Started
      </button>
    </main>


  )
}
