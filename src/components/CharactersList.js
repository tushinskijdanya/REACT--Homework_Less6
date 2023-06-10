import { useState, useContext } from 'react';
import { AppContext } from './AppScreen';
import { ThemeContext } from '../App';
import ParticipantsCards from './ParticipantsCards';

function CharactersList () {
    const { page, setPage } = useContext(AppContext);
    const { allPart } = useContext(ThemeContext);

    return(
        <div className='participants-container'>
            <div className='participants-cards'>
                {allPart.map((card, idx) => <ParticipantsCards card={card} key={idx} idx={idx}/> )}
            </div>
            <div className='return-buton'>
                <button onClick={() => setPage((prev) => prev = 0)}>GO BACK</button>
            </div>
        </div>
    )
}

export default CharactersList;