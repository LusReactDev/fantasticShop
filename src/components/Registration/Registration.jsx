import { Formik } from "formik";
import * as yup from 'yup'
import "./Registration.css"
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import IMG from '../../img'
import { useDispatch } from "react-redux";
import {register} from "../../store/slices/users/usersSlice"



function Registration(){
  const navigate=useNavigate()
  const dispatch = useDispatch()

    const validationSchema = yup.object().shape({
        fullName: yup.string().typeError('must be string').required('Input is required'),        
        email: yup.string().typeError('must be string').email('Invalid email').required('Input is required'),
        password: yup.string().typeError('must be string').min(4, 'please,enter min 4 symbols').required('Input is required'),
        
      })
      return (
      <div className="reg">
        
        <Formik
          initialValues={{
           fullName: '',   //    john doe   
            email: '',//john@gmail.com
            password: '',//m38rmF$
           
          }}
          

        onSubmit={(values) => {      
            
           dispatch(register(values))
           navigate('/shop')
         
          }}
          

          validateOnBlur

          validationSchema={validationSchema}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=> (
            <form style = {{width:'100%'}} className="form" onSubmit={handleSubmit}>  
                    <h3>CREATE ACCOUNT</h3>
                    <p>How do i get access order,wishlist and recommendation ?</p>    
          

              <div >
              <label htmlFor="Full Name">Full Name</label>   
                <input
                  className='input'
                  type={`text`}
                  name={`fullName`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  placeholder='Full Name '
                />

                
                {touched.fullName && errors.fullName && <p className='error'>{errors.fullName}</p>}

              </div>

              

              <div >
              <label htmlFor="Email">Email</label>   
                <input
                  className='input'
                  type={`text`}
                  name={`email`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='Email'
                />

                
                {touched.email && errors.email && <p className='error'>{errors.email}</p>}

              </div>

              <div >
              <label htmlFor="Password">Password</label>   
                <input
                  className='input'
                  type={`password`}
                  name={`password`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='Password'
                />

                
                {touched.password && errors.password && <p className='error'>{errors.password}</p>}

              </div>
              
              
              <button
                className='submit'
                disabled={!isValid && !dirty}
                type={`submit`}
              >SignUp</button>
              <p className="reg">Already have an Account?<Link className="link" to = '/log' >  Sign In </Link></p>  
              <span className="or">Or</span>
              <button className="google"><img src ={IMG.google} />Sign Up</button>
              <button className="fb"><img src ={IMG.fb} />Sign Up</button>

            </form>
          )}
        </Formik>

    
    </div>
  )
}

    


export default Registration