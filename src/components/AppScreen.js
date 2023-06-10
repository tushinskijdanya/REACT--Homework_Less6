import { useState, createContext } from 'react';
import MainMenu from './MainMenu';
import LoadCharacter from './LoadCharacter';
import CharactersList from './CharactersList';

function AppScreen () {
    const [page, setPage] = useState(0);

    return (
        <div className="app-screen">
            <div className="app-container"> 
            <AppContext.Provider value={{page, setPage}}>
                {
                (page === 0) ? 
                <MainMenu /> : ((page === 1) ? <LoadCharacter /> : <CharactersList />)
                }
            </AppContext.Provider>
            </div>
        </div>
    )
}

export const AppContext = createContext('default');
export default AppScreen;