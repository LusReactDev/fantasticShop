import  { useEffect } from 'react'
import {createPortal} from 'react-dom'


function CartPortal({children}) {
    let portal = document.createElement('div')

    useEffect(() =>{
      document.body.appendChild(portal)
      return () =>{
        document.body.removeChild(portal)
      }
    },[]) 

  return createPortal(children,portal)
}

export default CartPortal