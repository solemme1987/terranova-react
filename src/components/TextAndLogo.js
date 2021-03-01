import React from 'react'
import  logoHome from '../assets/img/main/logo.png'

export const TextAndLogo = () => {
    return (
        <div className="tittleAndLogoBox">


            <div className="tittleBox" id="tittleBox">
                <h1 className="tittle">Bienvenido</h1>
                <p className="time">Horario: Lunes - Domingos</p>
                <p className="hours">6:30pm - 1:00am</p>
            </div>

            <div className="logoBox" id="logoBox">
                <img src={logoHome} alt="Logo Terranova" className="logo" />
                <p className="ranking"><i className="fas fa-star"></i> 4.7</p>
            </div>

        </div>
    )
}
