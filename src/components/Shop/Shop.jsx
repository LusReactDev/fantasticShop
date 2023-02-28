import IMG from '../../img'
import './Shop.css'
import CardBox from '../CardBox/CardBox'
import {FaArrowRight} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../store/slices/products/productsSlice';
import Filter from '../Filter/Filter';
import { selectCategories } from '../../store/slices/categories/categoriesSlice';
import { useMemo } from 'react';
import { selectPriceCntrl } from '../../store/slices/priceCntrl/priceCntrlSlice';
import { selectSearch } from '../../store/slices/search/searchSlice';



function Shop() {
  const search = useSelector(selectSearch)
  const {productsData} = useSelector(selectProduct)
  const {min,max} = useSelector(selectPriceCntrl)
  const categories = useSelector(selectCategories)

  const filteredData = useMemo(()=>{
    let tempProducts
      if(!categories.some(el => el.isActive)){
        tempProducts =  productsData
      }else{
        tempProducts =  productsData?.filter(product => categories.find(category =>category.title === product.category ).isActive)
        
        }
      return tempProducts.filter(el =>el.price >= min && el.price <= max).filter(el =>el.title.toLowerCase().includes(search.toLowerCase()))
  },[categories,productsData,min,max,search])

  return (
    <div className='Shop'> 


          <Filter className = 'filter' />
                <div className='shopcontent'>
             
                  {          
                  
           filteredData?.map(product => (
                        <CardBox key = {product.id}{... product}/>                      
                        
                    ))
                }       

                </div>
    </div>
  )
}

 export default Shop