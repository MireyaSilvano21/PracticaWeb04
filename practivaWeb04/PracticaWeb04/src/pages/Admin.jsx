
import { useContext } from 'react';  // ✅ Importar useContext
import { useNavigate } from 'react-router-dom';  // ✅ Para redireccionar después del logout
import Table from '../componets/Table';  // ✅ Corregir la importación (components, no componets)
import { users } from '../users/Users';
import Button from '../componets/Botton';  // ✅ Corregir la importación (Button, no Botton)
import { AuthContext } from '../context/UContext';  // ✅ Importar el contexto

function Admin() {
  const { logout, currentUser } = useContext(AuthContext);  // ✅ Obtener logout del contexto
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();  // ✅ Llamar a la función logout del contexto
    navigate('/');  // ✅ Redirigir al login después de cerrar sesión
  };

  return (
    <>
      <h2>Panel Administrador</h2>
      <p>Bienvenido, {currentUser?.fullName}</p>  {/* Mostrar nombre del admin */}
      <Table users={users} />
      <br /><br />
      <Button text="Cerrar sesión" onClick={handleLogout} />
    </>
  );
}

export default Admin;