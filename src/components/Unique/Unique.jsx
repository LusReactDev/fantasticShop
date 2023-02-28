import IMG from '../../img'
import './Unique.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../store/slices/products/productsSlice';
import { findCurrentProduct } from '../../store/slices/products/productsSlice';
import { addToCart, addToWishList, selectUsers } from '../../store/slices/users/usersSlice';



function Unique(){

    const {id} = useParams()
    const dispatch = useDispatch()
    const {currentProduct,productsData} = useSelector(selectProduct)   
    const {currentUser} = useSelector(selectUsers)
    const navigate = useNavigate()


    useEffect(()=>{
        dispatch(findCurrentProduct(id))        
    },[productsData])

    return(
        <div className='Uniq'> 
            <div className='img'>
        <img src={currentProduct?.image} alt="" />       
             </div>
          
     <div className='text'>        
        <h2>{currentProduct?.title}</h2>
           <div className='prices'>
        <h3>$ {currentProduct?.oldPrice}</h3>
        <h3>$ {currentProduct?.price}</h3>
        </div>
        
        <p className='desc'>{currentProduct?.description}</p>         
           <div className='btns'>
            <button className='add leftBtn' onClick={() =>{currentUser ? dispatch(addToCart(currentProduct)) : navigate('/log')}}>Add To Cart</button>
            <button className='add rightBtn' onClick={() =>{currentUser ? dispatch(addToWishList(currentProduct)) : navigate('/log')}}>Add To Wishlist</button>
    
            
        </div>
        </div> 
 
        </div>
    )
}
export default Unique



