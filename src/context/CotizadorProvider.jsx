import { createContext,useState } from "react";
import { DiferenciaYear,calcularMarca,calcularPlan, formatearDinero } from "../helpers";

const CotizadorContext=createContext()

function CotizadorProvider({children}){
    const [datos,setDatos]=useState({
        marca:'',
        year:'',
        plan:''
    })
    const [error,setError]=useState('')
    const [resultado,setResultado]=useState(0)
    const [cargando,setCargando]=useState(false)

    const handleChangeDatos=e=>{
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }
     function cotizarSeguro(){
        //Base
        let resultado=2000
        //Diferencia de Años
        const diferencia=DiferenciaYear(datos.year)
        //Restar 3% por cada año
        resultado-=((diferencia*3)*resultado)/100
        //Americano 15%
        //Europeo 30%
        //Asiatico 5%
        resultado*=calcularMarca(datos.marca)
        //Basico 20%
        //Completo 50%
        resultado*=calcularPlan(datos.plan)
        resultado=formatearDinero(resultado)
        setCargando(true);
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 2000);
        
     }
    return(
        <CotizadorContext.Provider
        value={{
            datos,
            handleChangeDatos,
            setError,
            error,
            cotizarSeguro,
            resultado,
            cargando
        }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}
export{
    CotizadorProvider
}
export default CotizadorContext