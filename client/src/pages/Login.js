import React from 'react'


function Login() {
    return (
        <div>
            <div className='bgimg'>
            
            <div className='login-page'>
                <h1>Login Page</h1>
                <form>

                    <div className='input-container'>

                        <input type="text" placeholder='Your Username' />
                    </div>

                    <div className='input-container'>

                        <input type="password" placeholder='Your Password' />
                    </div>
                    <p>Forgot Password ?</p>

                    <div className='button-container'>
                        <button>LogIn</button>
                    </div>
                    <br />

                    <p>Don't have any account ? <a href='/register'>Register</a> here</p>

                </form>
            </div>
            </div>
        </div>

    )
}

export default Login