import React,{ useEffect } from 'react';
import FirebaseHook from '../hooks/FirebaseHook';

const Dashboard = () => {
    const { usuario,informacionUsuario,logOut } = FirebaseHook()
    
    useEffect(() => {
        //TODO
        informacionUsuario()
    },[])

    return (
        <div>
            {
                usuario === '' ? 'cargando...' : usuario
            }
            <button onClick={logOut}>Salir</button>
        </div>
    );
};

export default Dashboard;