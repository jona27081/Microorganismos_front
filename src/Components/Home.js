import React, { useState, useEffect } from "react";
import "../Styles/Home.css"
import getMicroorganismos from "../Services/Microorganismo.service";

const Home = () => {
    const [microorganismos, setMicroorganismos] = useState([]);


    useEffect(() => {
        const fetchMicroorganismos = async () => {
            const data = await getMicroorganismos();
            setMicroorganismos(data);
        };

        fetchMicroorganismos();
    }, []);

    return (
        <div className="centeredDivHome">
            <div className="contentWrapperHome">
                <div className="contentWrapperHome">
                    {microorganismos.map((mic) => {
                        return (
                            <div className="microorganismo">
                                <div className="microorganismo-info">
                                    <p className="p">{mic.nombre_cmn}</p>
                                    <p className="p">{mic.nombre_c_m}</p>
                                    <p className="p">{mic.descripcion}</p>
                                    <p className="p">{mic.prevencion}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
//{"id":11,"nombre_cmn":"Test","nombre_c_m":"Test","descripcion":"Test","validacion":false,"prevencion":"Test","id_usuario":25}]
    )
}

export default Home;