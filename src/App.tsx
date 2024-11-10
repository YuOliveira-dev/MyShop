import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";




// Esse é o componente que guarda todos os outros componentes e renderiza na tela.
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
