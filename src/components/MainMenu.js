import { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { AppContext } from './AppScreen';

function MainMenu () {
    const { setShowAppScreen } = useContext(ThemeContext);
    const { page, setPage } = useContext(AppContext);

    return(
        <div className='mainMenu-buttons'>
            <div className='loadCharacter-button'>
                <span onClick={() => setPage((prev) => prev = 1)}>Add a new member</span>
            </div>
            <div className='charactersList-button'>
                <span onClick={() => setPage((prev) => prev = 2)}>View the list of participants</span>
            </div>
            <div className='exit-button'>
                <button onClick={() => setShowAppScreen((prev) => prev = !prev)} className='exit-button'>EXIT</button>
            </div>
        </div>
    )
}

export default MainMenu;