
const FormHook = (estado,setEstado) => {

    const obtenerDatos = (ev) => {
        const { name, value } = ev.target
        setEstado({ ...estado,[name] : value })
    }
    return {
        obtenerDatos
    };
};

export default FormHook;