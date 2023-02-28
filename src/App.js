import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import { useState ,memo, useEffect} from 'react';
import IMG from './img';
import Unique from './components/Unique/Unique'
import {Route,Routes, NavLink, useNavigate} from 'react-router-dom'
import HomeWrapper from './pages/HomeWrapper';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/slices/products/productsAPI';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import LoginWrapper from './pages/LoginWrapper';



function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(fetchProducts())
  },[])
  
  

  return (
    <> 
        
    <Routes>

        <Route path='/log' element={<LoginWrapper />} >
          <Route index element={<Login />} />
          <Route path='reg' element={<Registration />} />
        </Route>

          <Route path='/' element={<HomeWrapper />}>
                  <Route index element={<Home />} />            
              <Route path = 'shop' >
                  <Route index element={<Shop  />} />            
                  <Route path=':id' element={<Unique  />} />                   
              </Route> 
          </Route>

    </Routes>
    </>
  );
}

export default App;
