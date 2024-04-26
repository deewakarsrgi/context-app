import logo from './logo.svg';
import './App.css';
import Navbar from './componests/navbar/Navbar';
import Product from './componests/home/Product';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Cart from './componests/home/Carts';
import Carts from './componests/home/Carts';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route exact path="/" element={<Product/>}/>
      <Route exact path="/cart" element={<Carts/>}/>
      
     </Routes>
     </BrowserRouter>  
    </div>
  );
}

export default App;
