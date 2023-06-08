import { useState, useContext } from 'react';
import { ThemeContext } from '../App';

function AppScreen () {
    const { setShowAppScreen } = useContext(ThemeContext);

    return (
        <div className="app-screen">
            <div className="container">
                <button onClick={() => setShowAppScreen((prev) => prev = !prev)} className='entry-exit'>to go out</button>

            </div>
        </div>
    )
}

export default AppScreen;