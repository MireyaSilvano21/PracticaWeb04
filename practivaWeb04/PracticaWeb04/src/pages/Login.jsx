import { useNavigate } from "react-router-dom";
import Button from '../componets/Botton';
import Input from '../componets/Input';
import {AuthContext} from '../context/UContext'
import { useContext, useState } from "react";

function Login () {
    const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(username, password);

    if (success) {
      navigate("/profile");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <Input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Usuario"
      />

      <Input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Contraseña"
      />

      <Button text="Ingresar" onClick={handleLogin} />
    </div>
    )
}

export default Login;