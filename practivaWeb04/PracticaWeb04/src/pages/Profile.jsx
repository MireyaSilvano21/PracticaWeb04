import { useContext } from 'react';
import { AuthContext } from '../context/UContext';
import Button from '../componets/Botton';
import { Link } from 'react-router-dom';

function Profile () {
     const { currentUser, logout } = useContext(AuthContext);
    return (
        <div>
            <h2>Perfil</h2>
            <p>Nombre: {currentUser.fullName}</p>
            <p>Rol: {currentUser.role}</p>

            {currentUser.role === "admin" && (
            <Link to="/admin">Ir al Panel Admin</Link>
            )}

            <br /><br />
            <Button text="Cerrar sesión" onClick={logout} />
        </div>
    );
}

export default Profile;