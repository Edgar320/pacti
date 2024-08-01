import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    let valido = true;

    if (nombre.trim() === '') {
      setErrorNombre(true);
      valido = false;
    } else {
      setErrorNombre(false);
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setErrorEmail(true);
      valido = false;
    } else {
      setErrorEmail(false);
    }

    if (valido) {
      setMensajeError('');
      
      console.log('Formulario enviado:', { nombre, email });
    } else {
      setMensajeError('Por favor, corrige los errores antes de enviar.');
    }
  };

  return (
    <Box component="form" onSubmit={manejarEnvio} sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Formulario de Registro
      </Typography>
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        error={errorNombre}
        helperText={errorNombre ? 'El nombre es requerido.' : ''}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errorEmail}
        helperText={errorEmail ? 'Ingrese un email válido.' : ''}
      />
      {mensajeError && (
        <Typography color="error" variant="body2" sx={{ mt: 2 }}>
          {mensajeError}
        </Typography>
      )}
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Enviar
      </Button>
    </Box>
  );
};

export default Formulario;
