import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet} from "react-router-dom";
import IMG from '../img'
import { fetchUsers } from "../store/slices/users/usersAPI";
import { selectUsers } from "../store/slices/users/usersSlice";


   function LoginWrapper (){

    const dispatch = useDispatch()
   
    const {usersData} = useSelector(selectUsers)

    useEffect(() => {
        if(!usersData.length){
            dispatch(fetchUsers())
        }
    },[])
    
    return (
        <div style = {{
            display:'flex',
            height:'100vh',
        }}>     
            <Outlet />                      
       
            <img className="logreg" alt = "" style = {{width:'60%'}} src ={IMG.logreg}/> 
        </div>
    );
}

 export default LoginWrapper