
import { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';  
import Table from '../componets/Table';  
import { users } from '../users/Users';
import Button from '../componets/Botton';  
import { AuthContext } from '../context/UContext'; 

function Admin() {
  const { logout, currentUser } = useContext(AuthContext);  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();  
    navigate('/');  
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