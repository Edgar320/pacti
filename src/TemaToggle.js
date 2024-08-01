import React from 'react';
import {useTheme} from './ThemeContext';

const TemaToggle =() => {
    const { tema, toggleTema } = useTheme();

    return(
        <button onClick={toggleTema}>
            Cambiar a {tema === 'claro'? 'oscuro': 'claro'}
        </button>
    )
}

export default TemaToggle;