import react, {useState, useEffect} from "react";
import axios from "axios";

const Universidad = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        obtenerUniversidad();
    }, [])

    const  obtenerUniversidad = async () =>{
        const res = await axios.get()
        console.log(res);
        setState(res);
    }
    return (
        <div>
            <h3>{state}</h3>
        </div>
    )
}

export default Universidad
