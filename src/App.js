import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ProductDesription from './components/ProductDescription.js';
import ProductPage from './components/ProductPage.js';
import './styles/index.css';
const App=()=>{
  return(
    <div className='App'>
      <Header/>
      <ProductPage/>
      <ProductDesription/>
      <Footer/>
    </div>
  )
}
export default App;