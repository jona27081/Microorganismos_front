import React, { useState, useEffect } from "react";
import "../Styles/RegistroMicroorganismos.css"
import getSintomas from "../Services/Sintomas.service";
import { postMic } from "../Services/Microorganismo.service";
import { useNavigate } from "react-router-dom";

const RegistroMicroorganismo = () => {
    const [allSintomas, setAllSintomas] = useState([]);
    const [sintomas, setSintomas] = useState([]);
    const [nombreComun, setNombreComun] = useState('');
    const [nombreCientifico, setNombreCientifico] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [prevencion, setPrevencion] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [urls, setUrls] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddUrl = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            const element = {
                "url" : inputValue
            }
            setUrls([...urls, element]);
            setInputValue('');
        }
    };

    const handleNombreComun = (event) => {
        setNombreComun(event.target.value);
    }

    const handleNombreCientifico = (event) => {
        setNombreCientifico(event.target.value);
    }

    const handleDescripcion = (event) => {
        setDescripcion(event.target.value);
    }

    const handlePrevencion = (event) => {
        setPrevencion(event.target.value);
    }

    const addSintomasOfCheck = (event) => {
        const checkedValue = event.target.value;
        const element = {
            "sin":{
                "id": checkedValue
            }
        }

        if (event.target.checked) {
            if (!sintomas.includes(element)) {
                console.log(element)
                setSintomas([...sintomas, element]);
            }
        } else {
            const updateSintomas = sintomas.filter(sintoma => sintoma !== element);
            console.log("Se elimino: ", element)
            setSintomas(updateSintomas);
        }
    }

    const saveSintoma = async (event) => {
        event.preventDefault();
        const user = localStorage.getItem("user")
        const microorganismo = {
            nombre_cmn: nombreComun,
            nombre_c_m: nombreCientifico,
            descripcion: descripcion,
            validacion: false,
            prevencion: prevencion,
            sin_mic: sintomas,
            imagenes: urls,
            usuario: {
                id_usuario: user
            }
        }
        console.log(microorganismo);

        try {
            const response = await postMic(microorganismo);
            console.log(response)
            alert("Personal agregado: ", microorganismo.nombre_cmn);
            navigate("/");
          } catch (error) {
            console.error(error)
            alert("Personal no pudo ser agregado: ", error);
          }



    };

    useEffect(() => {
        const fetchPermissions = async () => {
            const data = await getSintomas();
            setAllSintomas(data);
        };

        fetchPermissions();
    }, []);


    return (
        <div className="centeredDiv">
            <div className="contentWrapper">

                <form className="formSintoma">
                    <h2>Registro de Microorganismo</h2>
                    <input
                        type="text"
                        placeholder="Nombre comun:"
                        value={nombreComun}
                        onChange={handleNombreComun}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nombre cientifico:"
                        value={nombreCientifico}
                        onChange={handleNombreCientifico}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Descripcion:"
                        value={descripcion}
                        onChange={handleDescripcion}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Prevencion:"
                        value={prevencion}
                        onChange={handlePrevencion}
                        required
                    />

                    <div className="sintomas-container-registro">
                        <h3>Seleccione los permisos a asignar:</h3>
                        <div className="sintomas-registro">
                            {allSintomas.map((sintoma) => {
                                return (
                                    <div key={sintoma.id} className="sintomas">
                                        <input
                                            type="checkbox"
                                            id={sintoma.id}
                                            value={sintoma.id}
                                            onChange={addSintomasOfCheck}
                                        />
                                        <label htmlFor={sintoma.id}>{sintoma.nombre}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="urls">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Ingrese una URL de una imagen"
                    />
                    <button onClick={handleAddUrl}>ADD</button>
                    </div>


                    <button className="save"
                        onClick={saveSintoma}
                    >
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    )
}
export default RegistroMicroorganismo;