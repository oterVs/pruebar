import react, {useState, useEffect} from "react";
import axios from "axios";

const Universidad = () => {
    const [state, setState] = useState([]);





    useEffect(() => {
        obtenerUniversidad();
    }, [])

    const  obtenerUniversidad = async () =>{
        const res = await axios.get("https://sgcn-app.herokuapp.com/seguridad/obtenerUniversidades")
        console.log(res);
        setState(res.data[0].nombreUniversidad);
    }
    return (
        <div>
            <h2>probando</h2>
            <h3>{state}</h3>
        </div>
    )
}

export default Universidad
