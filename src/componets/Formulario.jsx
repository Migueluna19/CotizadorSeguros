import {MARCAS,YEARS,PLANES} from '../contstants'
import { Fragment } from 'react'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

function Formulario() {

    const {handleChangeDatos,datos,setError,error,cotizarSeguro}=useCotizador()
    
    function handleSubmit(e){
        e.preventDefault()
        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return;
        }
        setError('')
        cotizarSeguro()
    }

  return (
    <>
    
    {error && <Error/>}
    <form onSubmit={handleSubmit}>
        <div className='my-5'>
        <label className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
        <select className='w-full p-3 bg-white border border-gray-200' name='marca' onChange={e=>handleChangeDatos(e)} value={datos.marca}>
        <option value="">--Seleccionar Marca--</option>
        {MARCAS.map(marca=>(
            <option key={marca.id} value={marca.id}>{marca.nombre}</option>
        ))}
        </select>
        </div>

        <div className='my-5'>
        <label className='block mb-3 font-bold text-gray-400 uppercase'>Año</label>
        <select className='w-full p-3 bg-white border border-gray-200' name='year' onChange={e=>handleChangeDatos(e)} value={datos.year}>
        <option value="">--Seleccionar Modelo--</option>
        {YEARS.map(year=>(
            <option key={year} value={year}>{year}</option>
        ))}
        </select>
        </div>

        <div className='my-5'>
        <label className='block mb-3 font-bold text-gray-400 uppercase'>Elige un Plan</label>
        <div className='flex gap-3 items-center'>
            {PLANES.map(plan=>(
                <Fragment key={plan.id}>
                    <label>{plan.nombre}</label>
                    <input type='radio' name='plan' value={plan.id} onChange={e=>handleChangeDatos(e)}></input>
                </Fragment>
            ))}
        </div>
        </div>
        <input type='submit' value="Cotizar" 
        className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
        />
    </form>
    </>
  )
}

export default Formulario