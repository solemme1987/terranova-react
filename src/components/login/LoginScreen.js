import React from 'react'
import logoIndex from  '../../assets/img/main/logo-index.png';


const LoginScreen = () => {

    return (
    <>
            <div className="social-box">
                 <a href="#example">
                    <i className="fab fa-facebook"> </i>
                </a>
                <a href="#example">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#example">
                    <i className="fab fa-whatsapp-square"></i>
                </a>
            </div>

            <div className="logo-index-container">
                <img src={logoIndex} alt="logo principal" />
            </div>

            <div className="circulo">

            </div>


            <div className="text-box">
                <h1>Visítanos y disfruta</h1>
                <p>De las mejores Hambureguesas</p>
                <p>y perros de la ciudad</p>
            </div>

            <div className="btn-box">
                <a href="index.html">
                    <button className="btn-index">
                            Nuestro menú
                            <i className="fas fa-chevron-right"></i>
                    </button>
                </a>
            </div> 


        </>
    )
}
export default LoginScreen;