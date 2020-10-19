import React,{ useState } from 'react';
import FirebaseHook from '../hooks/FirebaseHook';

const LogIn = () => {
    const { logIn } = FirebaseHook()
    const [ usuario, setUsuario ] = useState({
        email : '',
        password : ''
    })
    const obtenerDatos = (evento) =>{
        let valor = evento.target.value
        let llave = evento.target.name
        setUsuario({ ...usuario,[llave] : valor })
    }
    const entrar = ( ) =>{
        console.log(usuario)
        // logIn(usuario.email,usuario.password)
    }
    return (
        <div>
            <input type="text" name="email" placeholder="Correro electronico" onChange={obtenerDatos} />
            <input type="password" name="password" placeholder="Contraseña" onChange={obtenerDatos} />
            <button onClick={ entrar }>Login</button>
        </div>
    );
};

export default LogIn;