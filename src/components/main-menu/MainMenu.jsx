import React from 'react';
import './mainmenu.css'

const MainMenu = () => {
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    Home
                </li>
                <li className="nav-item">
                    Features
                </li>
                <li className="nav-item">
                    Pricing
                </li>
            </ul>
        </div>
    )
}

export default MainMenu