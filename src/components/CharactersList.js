import { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from './AppScreen';
import { ThemeContext } from '../App';
import ParticipantsCards from './ParticipantsCards';

function CharactersList () {
    const { setPage } = useContext(AppContext);
    const { allPart } = useContext(ThemeContext);
    const [mainWindow, setMainWindow] = useState(true);
    const [aboutCount, setAboutCount] = useState(0);

    let Hello = allPart.map((card, idx) => <ParticipantsCards card={card} key={idx} idx={idx}/> );

    useEffect(() => {
        if (aboutCount === 0) {
            setMainWindow(true);
        } else if (aboutCount > 0) {
            setMainWindow(false);
        }
    }, [aboutCount]);

    return(
        <>
        <EditContext.Provider value={{mainWindow, setMainWindow, aboutCount, setAboutCount}}>
            <div className='participants-container'>
                <div className='participants-cards'>
                    {Hello}
                </div>
                {
                    mainWindow &&
                    <div className='return-buton'>
                        <button onClick={() => setPage((prev) => prev = 0)}>GO BACK</button>
                    </div>
                }
            </div>
        </EditContext.Provider>
        </>
    )
}

export const EditContext = createContext('default');
export default CharactersList;