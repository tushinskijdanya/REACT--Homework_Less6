import { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from './AppScreen';
import { ThemeContext } from '../App';
import ParticipantsCards from './ParticipantsCards';

function CharactersList () {
    const { setPage } = useContext(AppContext);
    const { allPart } = useContext(ThemeContext);
    // const [cartochki, setCartochki] = useState(allPart);
    const [mainWindow, setMainWindow] = useState(true);

    let Hello = allPart.map((card, idx) => <ParticipantsCards card={card} key={idx} idx={idx}/> );

    // useEffect(() => {
    //     setCartochki(allPart);
    //     Hello = cartochki.map((card, idx) => <ParticipantsCards card={card} key={idx} idx={idx}/> );
    // }, [allPart]);

    return(
        <>
        <EditContext.Provider value={{mainWindow, setMainWindow}}>
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