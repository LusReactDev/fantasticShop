import { Formik } from "formik";
import * as yup from 'yup'
import "./Login.css"
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { selectUsers, toggleCurrentUser } from "../../store/slices/users/usersSlice";
import { useEffect } from "react";
import { fetchUsers } from "../../store/slices/users/usersAPI";
import IMG from '../../img'
import { Link } from "react-router-dom";


function Login (){

  const navigate=useNavigate()
  const dispatch = useDispatch()
  const {currentUser} = useSelector(selectUsers)

  useEffect(()=>{
    if(currentUser){
      navigate('/shop')
    }
 },[currentUser])

  const validationSchema = yup.object().shape({
    email: yup.string().typeError("must be string").email("Invalid email").required("Input is required"),
    password: yup.string().typeError("must be string").min(4, "please,enter min 4 symbols").required("Input is required")
})  

    return (
        <div className="login">
            
            <Formik

              initialValues={{               
                email: 'john@gmail.com',
                password: 'm38rmF$',
                
              }}

                onSubmit={(values,{resetForm} ) => {              
                  dispatch(toggleCurrentUser(values))
                  resetForm()
                  }
              }             
    
              validateOnBlur
    
              validationSchema={validationSchema}

              >
         
              {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=> (
                <form style = {{width:'100%'}} className='form' onSubmit={handleSubmit}>  
                  
                    <h3>LOGIN</h3>
                    <p>How do i get access order,wishlist and recomendation ?</p>    
    
                  <div>     
                  <label htmlFor="Email">Email</label>               
                    <input
                      className='input'
                      id='Email'
                      type={`text`}
                      name={`email`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                     
                    />
              
    
                
                    {touched.email && errors.email && <p className='error'>{errors.email}</p>}           
    
                    </div>

                    <div>   
                    <label htmlFor="Password">Password</label>   
               
                    <input
                      className='input'
                      id='Password'                 
                      type={`password`}
                      name={`password`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                 
                    />
    
                    
                    {touched.password && errors.password && <p className='error'>{errors.password}</p>}        
    
                    </div>
                    <span>Forgot Password?</span>
                  <button
                    className='submit'
                    disabled={!isValid && !dirty}
                    type={`submit`}
                  >Signin</button>
              <p className="reg">If you are new, <Link className="link" to = '/log/reg' > Create Now </Link></p>  
              <span className="or">Or</span>
              <button className="google"><img src ={IMG.google} />Sign Up</button>
              <button className="fb"><img src ={IMG.fb} />Sign Up</button>

                </form>
             
                
              )}   
              
            
            </Formik>   
       
        </div>   
    )
}

export default Login