import './CartItem.css'
import IMG from '../../img'
import { useDispatch } from 'react-redux'
import { decCartItemCount, incCartItemCount, removeFromCart } from '../../store/slices/users/usersSlice'
import { memo } from 'react'

function CartItem({count,id,title,price,image}){
    const dispatch = useDispatch()
    return (
       <div className='CartItem'>
          <div className='image'>
             <img src = {image} />
          </div>

       <div className='CartItemInfo'>
          
             <p>{title}</p>
             <span>$ {price}</span>
               <div className='btns'>
                  <button onClick = {() => dispatch(decCartItemCount(id))}>-</button>
                  <span>{count}</span>
                  <button onClick = {() => dispatch(incCartItemCount(id))}>+</button>                 
               </div>
              <span className='x' onClick = {() => dispatch(removeFromCart(id))}>X</span>

        </div>


       </div>
    )
}
 export default memo(CartItem)