import React from 'react'
import { Link } from 'react-router-dom';
function DefaultLayout(props) {

    return (
        <div>
            <div className="header">
                <div className="d-flex justify-content-between">
                    <h1 className="heading">WanderWheels</h1>
                    <h3>About Us</h3>
                    <div className='button-container'>
                        <button>
                            <Link to='/login'>Login/SignUp</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayout
