import { useCallback, useState } from "react"

const showPopUp = (Component) =>{

   return (props) =>{

    const[isShow,setIsShow] = useState(false)

    const toggleIsShow = useCallback(() =>{
        setIsShow(prev => !prev)
    },[])
    return <Component {...props}{...{isShow,toggleIsShow}} />
   }
}
 export default showPopUp




 