import AppSeguro from "./componets/AppSeguro"
import { CotizadorProvider } from "./context/CotizadorProvider"

function App() {
 

  return (
    <CotizadorProvider>
     <AppSeguro/>
    </CotizadorProvider>
  )
}

export default App
