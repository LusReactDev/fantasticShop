import IMG from '../../img'
import './Navbar.css'
import Home from '../Home/Home'
import {Route,Routes, NavLink,Link} from 'react-router-dom'
import NavBtns from '../NavBtns/NavBtns'

function Navbar() {  
  return (
        <>
          <nav>
            <div className='img' ><img className='logo' src={IMG.logo}/></div>
           
              <ul>
                  <li><NavLink className = {({isActive}) =>isActive && 'act'} to='/' end>Home</NavLink></li>     
                  <li><NavLink className = {({isActive}) =>isActive && 'act'} to='/shop'>Shop</NavLink></li>
                  <li><a href='#'>Product</a></li>                 
                  <li><a href='#'>Pages</a></li>
                  <li><a href='#'>Blog</a></li>  
                  </ul>   
                  <NavBtns />      
                                   
              </nav>
        
            </>      
  )

}




export default Navbar