import { useState, createContext } from 'react';
import LoginScreen from './components/LoginScreen';
import AppScreen from './components/AppScreen';

function App() {
  const [showAppScreen, setShowAppScreen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{showAppScreen, setShowAppScreen}}>
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
