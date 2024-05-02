// import logo from './logo.svg';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Products from './pages/Products';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import SinglePage from './pages/SinglePage';
 

function App() {
  return (
    <div className="App">
       {/* <Products/> */}
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<SinglePage/>}/>
 
       </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
