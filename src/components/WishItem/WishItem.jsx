import { useDispatch } from "react-redux"
import './WishItem.css'
import {removeWishItem} from '../../store/slices/users/usersSlice'
import { memo } from "react"

function WishItem({id,title,image}){
    const dispatch = useDispatch()
    return (
       <div className='WishItem'>
          <div className='image'>
             <img src = {image} />
          </div>

        <div className='WishItemInfo'>          
             <p>{title}</p>          
            <span className='x' onClick = {() => dispatch(removeWishItem(id))}>X</span>
        </div>


       </div>
    )
}

export default memo(WishItem)