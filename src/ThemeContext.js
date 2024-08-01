import React , {createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [tema, setTema] = useState('claro');

    const toggleTema = () => {
        setTema((prevTema) => (prevTema=== 'claro'? 'oscuro': 'claro'));
    };

    return(
        <ThemeContext.Provider value={{ tema, toggleTema }}>
        {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () =>{
 return useContext(ThemeContext);
}