import { useState, useContext } from 'react';
import { ThemeContext } from '../App';

function LoginScreen () {
    const { setShowAppScreen } = useContext(ThemeContext);
    
    return (
        <div className="login-screen">
            <div className="container">
                <button onClick={() => setShowAppScreen((prev) => prev = !prev)} className='entry-exit'>to enter</button>
            </div>
        </div>
    )
}

export default LoginScreen;