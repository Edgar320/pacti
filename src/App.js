// src/App.js
import React from 'react';
import ListaElementos from './ListaElementos';

const App = () => {
  return (
    <div>
      <ListaElementos />
    </div>
  );
};

export default App;







// import React from 'react';
// import { ThemeProvider, useTheme } from './ThemeContext';
// import TemaToggle from './TemaToggle';
// import './App.css';

// const AppContent = () => {
//   const { tema } = useTheme();

//   return (
//     <div className={`container ${tema}`}>
//       <h1>Aplicación de Tema Claro/Oscuro</h1>
//       <TemaToggle />
//     </div>
//   );
// };

// const App = () => {
//   return (
//   <div>
//     <div>
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//     </div>
//   </div>  
//   );
// };

// export default App;






// // src/App.js
// import React from 'react';
// import Formulario from './Formulario';
// import { Container } from '@mui/material';

// const App = () => {
//   return (
//     <Container maxWidth="sm">
//       <Formulario />
//     </Container>
//   );
// };

// export default App;



// import React from 'react';
// import './styles.css';
// import Main from './script.js';

// const App = () => (
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>
// );

// export default App;