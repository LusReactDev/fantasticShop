import { useNavigate } from 'react-router-dom'
import "./CardBox.css"
import IMG from '../../img'
import { memo } from 'react'


function CardBox({...product}) {
    const navigate = useNavigate()
  return (
    <div className='CardBox'>
        <div className='image'>
          <img   onClick={() => navigate(`${product.id}`)}  src={product.image} alt="" />
        <div className='overlay'>
          <div><img src={product.image} alt="" /></div>
          <div><img src={product.image} alt="" /></div>
          <div><img src={product.image} alt="" /></div>
          <div><img src={product.image} alt="" /></div>       
        </div>

        <div className='svgs'>
            <div className='one'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>

            <div className='one'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-repeat"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
            </div>

            <div className='one'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>

            <div className='one'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </div>
        </div>

    </div>
          <div className='text'>        
              <h4>{product.category}</h4>
              <div className='title'>{product.title}</div>        
              <div className='prices'>                     
              <del>$ {product.oldPrice}</del>  
              <p>$ {product.price}</p>       
              </div>
              
          </div>
      </div>
  )
}

export default memo(CardBox)