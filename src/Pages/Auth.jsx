import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <>
      <div className="container">
        <div className="row p-5">
          <div className="col-6">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/app-login-5188522-4346990.png" alt="" />
          </div>
          <div className="col-6 p-5 text-center">
                <h1 className='my-3'>Project Fair</h1>
                <h3 className='mb-3'>Sign{register? "Up" :"In"}</h3>
                {
                  register && 
                  <input type="text" placeholder='UserName' className='form-control mb-3' />
                }
                <input type="text" placeholder='Email' className='form-control mb-3' />
                <input type="password" placeholder='Password' className='form-control mb-3' />
               {
                register ? 
                <div className='text-center'>
                <button className='btn mb-3'>SignUp</button>
                <p>Already registered? <Link to={'/login'}>Login Now</Link></p>
              </div>
              :
              <div className='text-center'>
              <button className='btn mb-3'>SignIn</button>
              <p>New to here ? <Link to={'/register'}>Register Now</Link></p>
            </div>
               }
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Auth
