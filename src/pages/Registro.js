import React,{ useState } from 'react';
import InputForm from '../components/forms/Input';
import FirebaseHook from '../hooks/FirebaseHook';
import FormHook from '../hooks/FormHook';

const Registro = () => {
    const { signIn } = FirebaseHook()
    const [ usuario, setUsuario ] = useState({
        email : '',
        password : ''
    })
    const { obtenerDatos } = FormHook(usuario,setUsuario)

    const registrarUsuario = ( ) =>{
        console.log(usuario)
        // signIn(usuario.email,usuario.password)
    }
    return (
        <div>
            <InputForm type="text" name="email" placeholder="Correro electronico" onChange={obtenerDatos} />
            <InputForm type="password" name="password" placeholder="Contraseña" onChange={obtenerDatos} />
            <button onClick={ registrarUsuario }>Registrar</button>
        </div>
    );
};

export default Registro;