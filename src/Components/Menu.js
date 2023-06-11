import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Menu.css"

const Menu = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const user = localStorage.getItem("user");
    const logout = () =>{
        localStorage.clear();
    }

    return (
        <div className={`sidebar-container ${sidebarOpen ? 'toggle-function' : ''}`}>
            <div className="toggle" onClick={toggleSidebar}>
                <span className="lines"></span>
                <span className="lines"></span>
                <span className="lines"></span>
            </div>
            <div className="profile-and-links">
                <div className="profile-card">
                    <span className="title">Microorganismo</span>
                    <span className="subtitle"></span>
                </div>
                <ul className="links-list">
                    <div className="links">
                        <Link to="/">
                            <p className="fa-solid fa-house">       Home</p>
                        </Link>
                    </div>
                    <div className="links">
                        <Link to="/">
                            <p className="fa-solid fa-newspaper">       Buscar</p>
                        </Link>
                    </div>
                    {user && (
                    <div className="links">
                        <Link to="/addmic">
                            <p className="fa-solid fa-download">        Subir</p>
                        </Link>
                    </div>
                    )}
                    {user && (
                        <div className="links">
                            <Link onClick={logout} to="/">
                                <p className="fa-solid fa-right-from-bracket">Salir</p>
                            </Link>
                        </div>
                    )}

                    {!user && (
                        <div className="links">
                            <Link to="/login">
                                <p className="fa-solid fa-right-from-bracket">Login</p>
                            </Link>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;
