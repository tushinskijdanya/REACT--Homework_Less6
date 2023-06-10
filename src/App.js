import { useState, createContext } from 'react';
import LoginScreen from './components/LoginScreen';
import AppScreen from './components/AppScreen';
import { participants_list } from './data/participants-list';



function App() {
  const [showAppScreen, setShowAppScreen] = useState(false);
  const [allPart, setAllPart] = useState(participants_list);

  return (
    <>
      <ThemeContext.Provider value={{showAppScreen, setShowAppScreen, allPart, setAllPart}}>
        {
          !showAppScreen ? 
          <LoginScreen /> : 
          <AppScreen />
        }
      </ThemeContext.Provider>
    </>
  );
}

export const ThemeContext = createContext('default');
export default App;
