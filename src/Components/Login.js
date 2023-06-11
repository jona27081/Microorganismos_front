import React, { useState } from "react";
import "../Styles/Login.css"
import login from "../Services/User.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [access, setAcess] = useState('');
    const navigate = useNavigate();

    const handleP = (event) => {
        setPassword(event.target.value);
    }

    const handleU = (event) => {
        setUsername(event.target.value);
    }

    const Iniciar = async (event) => {
        event.preventDefault();



        const data = {
            correo: username,
            contrasena: password,
        };
        console.log(data);

        try {
            const response = await login(data);
            if (response !== 0) {
                localStorage.setItem("user", JSON.stringify(response));
                setAcess("Iniciando...");
                navigate("/");
            } else {
                setErrorMessage('Credenciales incorrectas. Por favor, inténtalo nuevamente.');
            }
        } catch (error) {
                setErrorMessage('Error al iniciar sesión. Por favor, inténtalo nuevamente más tarde.');
        }

    };


    return (
        <div className="centeredDiv">
            <div className="contentWrapper">

                <form className="formLogin">
                    <h2>Iniciar Sesion</h2>
                    <input
                        type="text"
                        placeholder="Username:"
                        value={username}
                        onChange={handleU}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Password:"
                        value={password}
                        onChange={handleP}
                        required
                    />


                    <button className="login"
                        onClick={Iniciar}
                    >
                        Iniciar Sesion
                    </button>
                    {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                    {access && <p className="accessMessage">{access}</p>}
                </form>
            </div>
        </div>
    )
}
export default Login;