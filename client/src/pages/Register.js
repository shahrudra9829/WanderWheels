import React from 'react'

function Register(){
  return (
    <div className='bgimg'>
    <div className='login-page'>
        <h1>Registration Page</h1>
        <form>
          <div className='input-container'>
            
            <input type='text'placeholder='Your Username'/>
          </div>
          <div className='input-container'>
            
            <input type='email'placeholder='Your Email'/>
          </div>
          <div className='input-container'>
            
            <input type='password'placeholder='Your Password'/>
          </div>
          <div className='input-container'>
            
            <input type='password'placeholder='Confirm Password'/>
          </div>
          <div className='button-container'>
            <button>Register</button>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Register