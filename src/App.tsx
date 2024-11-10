import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";




// componente funcional do React
function App() {
  return (
    <>
    <Header /> 
    <ProductsList />
    
    <GlobalStyles />
    </>
  )
}

export default App
