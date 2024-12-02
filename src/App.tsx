import { Provider } from "react-redux"
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { store } from "./redux/store";




// Esse é o componente que guarda todos os outros componentes e renderiza na tela.
function App() {
  return (
    // Envolve toda a aplicação em um provider
    <Provider store={store}>
    <Header /> 
    <ProductsList />
    
    <GlobalStyles />
    </Provider>
  )
}

export default App
