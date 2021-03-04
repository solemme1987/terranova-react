import React from 'react'
import { Link } from 'react-router-dom';
import logoIndex from  '../../assets/img/main/logo-index.png';


const LoginScreen = () => {

    return (
    <div className="container-login">
            <div className="social-box">
                 <a href="https://www.facebook.com/Terranova_Buenaventura-103965941306590" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"> </i>
                </a>

                <a href="https://api.whatsapp.com/send?phone=573234194018&text=%20Buenos%20días%20Soy%20Cliente%20quien%20puediera%20atenderme%20Muchas%20gracias." target="_blank" rel="noreferrer">
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
                <p>y perros de Buenaventura.</p>
                <p><i className="fas fa-phone"> </i> 323-419-4018 </p>
            </div>

            <div className="btn-box">
                <Link to="/auth/home">
                    <button className="btn-index">
                            Nuestro menú
                            <i className="fas fa-chevron-right"></i>
                    </button>
                </Link>
            </div>


        </div>
    )
}
export default LoginScreen;