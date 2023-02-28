import './NavBtns.css'
import { FaRegHeart } from 'react-icons/fa';
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/slices/users/usersSlice';
import {Route,Routes, NavLink,Link} from 'react-router-dom'
import WishItem from '../WishItem/WishItem';
import IMG from '../../img';
import CartPortal from '../../portals/CartPortal';
import CartPopUp from '../CartPopUp/CartPopUp';
import showPopUp from '../../hoc/showPopUp';

function NavBtns({isShow,toggleIsShow}){
    const {currentUser}  = useSelector(selectUsers) 

    return (

<div className='NavBtns'>

    <div className="user">
     <svg className='firstIcon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <div className='logReg'>              
                      
         <p><Link to = '/log'>Login</Link></p>
         <p><Link to  = '/log/reg'>Register</Link></p>
                                     
      </div>      
    </div>                
       <div className='heart'>       
       <span className='quantity'>{currentUser? currentUser?.wishList.length : 0 }</span>

       < FaRegHeart style = {{cursor:'pointer'}}/>       
           { currentUser && currentUser.wishList.length?
            <>
            <div className=' cartList wishList'>
            <div className='list'>
            {   
           currentUser?.wishList?.map(item => <WishItem  key = {item.id}{...item}/>)
            } 
               </div>  
               </div>
            </>:
            <>
              <div className='wishBox'>
                <img src={IMG.box} alt ="" />
                <h4>Your wishlist empty !!</h4>
                <p>explore more and shortlist items.</p>
              </div>
            </> 
           }
        </div>                 


        <div className='cart'>
        <span className='quantity'>{currentUser?currentUser.cart.reduce((acc,el)=>{return acc+ el.count},0):0}</span>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>

         <>
        <div className='cartList'>
           <div className='list'>
            {   
           currentUser?.cart.map(item => <CartItem  key = {item.id}{...item}/>)
            }   
            </div>                     
            <button className='btn' onClick = {toggleIsShow}> View Cart</button>
           </div>
           {isShow &&
              <CartPortal>
                  <CartPopUp closePopUp = {toggleIsShow}/>
              </CartPortal>
           }
              
           </>
        </div>
       
     </div>
     )
}

    export default  showPopUp( NavBtns)
