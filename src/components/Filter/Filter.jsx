import './Filter.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { fetchCategories } from '../../store/slices/categories/categoriesAPI';
import { selectCategories, toggleActiveCategory } from '../../store/slices/categories/categoriesSlice';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { toggleMin,toggleMax, selectPriceCntrl } from '../../store/slices/priceCntrl/priceCntrlSlice';
import { selectProduct } from '../../store/slices/products/productsSlice';
import { selectSearch,toggleSearch } from '../../store/slices/search/searchSlice';



function Filter() {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategories)
    const {min,max} = useSelector(selectPriceCntrl)
    const {productsData} = useSelector(selectProduct)
    const search = useSelector(selectSearch)

    const maxP = useMemo(() =>{
      if(!max){
        return productsData.map(el => +el.price).sort((a,b) => a-b).at(-1)
      }
      return max
      
    },[productsData])

     useEffect(() =>{
      dispatch(toggleMax(maxP))
      },[maxP])

     useEffect(()=>{
       if(!categories.length){ 
        dispatch(fetchCategories())
       }
     },[])

    return(
        <div className = 'Filter'>   

        <div className="Search">
                <input type="text" placeholder='Search here...' value={search}  onChange={(e) =>dispatch(toggleSearch(e.target.value))            
                }  />     
                <svg className='FilterSectionSearchSvg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
        </div>

      <div className='FilterInside'>
          <h3>Filter</h3>                    
     
      <div className="price-input">
        <div className="field">
          <span className='min'>Min <span className='dollar'>$</span></span>
          <input
           type="number"
           className="input-min " 
           defaultValue="2500"
           onChange = {(e) => dispatch(toggleMin(e.target.value))}
           value = {min}
            />
        </div>

        <div className="minus">-</div>

        <div className="field">
        <span className='max'> Max <span className='dollar'>$</span></span>
          <input
           type="number" 
           className="input-max "
           defaultValue="7500"
           onChange = {(e) => dispatch(toggleMax(e.target.value))}
           value = {max}
           />
   

      </div> 
      </div> 

      <RangeSlider 
       value = {[min,max]}
       max={productsData.map(el => el.price).sort((a,b)=> a - b).at(-1)}

        onInput = {(values) =>{   
        dispatch(toggleMin(values[0]))
        dispatch(toggleMax(values[1]))
       }}
       step = {10}
       />
    </div>

      <div className='categories'>

      <h3>Categories</h3>
            <ul>
                {
                    categories.map(item =>(
                        <li
                        key = {item.id}
                        className = {item.isActive && 'actLi'}
                        onClick = {()=>dispatch(toggleActiveCategory(item.id))}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                   
                        {item.title}</li>
                    ))
                }
                
            </ul>
  
    </div>
  </div>       
            

           
        
    )
}

export default Filter