// Importar los componentes necesarios de @aws-amplify/ui-react
import React from 'react';
import { withAuthenticator, Input, Button, Heading, Text } from '@aws-amplify/ui-react';
import './App.css';

// Crear un componente funcional para el formulario
function Formulario() {
  // Usar el estado para almacenar los valores de los campos de entrada
  const [nombre, setNombre] = React.useState('');
  const [contraseña, setContraseña] = React.useState('');

  // Manejar el cambio de los campos de entrada
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  // Renderizar el formulario con los componentes de @aws-amplify/ui-react
  return (
    <div className="formulario">
      <Heading level={1}>¡Bienvenido!</Heading>
      <Text>Inicie sesión con sus datos</Text>
      <Input
        type="text"
        placeholder="Nombre de usuario"
        value={nombre}
        onChange={handleNombreChange}
      />
      <Input
        type="password"
        placeholder="Contraseña"
        value={contraseña}
        onChange={handleContraseñaChange}
      />
      <Button>Iniciar sesión</Button>
    </div>
  );
}

// Envolver el componente principal con el componente withAuthenticator
export default withAuthenticator(Formulario);
