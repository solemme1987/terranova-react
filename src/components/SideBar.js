import React, { useContext } from 'react'
import  bancolombia from '../assets/img/pagos/bancolombia.png'
import  efectivo from '../assets/img/pagos/efectivo.png'
import nequi from '../assets/img/pagos/nequi.png'
import { Context } from './context/Context'



export const SideBar = () => {

    const {showSideBar,setShowSideBar,setFormPay} = useContext(Context)

    // OCULTO LA BARRRA
    const hiddenSideBar=()=>{
        setShowSideBar(hidden=>hidden='side-bar')
    }

    // SELCCCIONO  EL  METOD DE PAGO
    const setPay=(e)=>{
       setFormPay(pay=>pay=e.target.value);
       
    }


    return (
        <aside className={showSideBar}>
          <div className="side-bar-title" onChange={setPay}>
            <h3>configuración</h3>

            <div className="option-pay-container">
                <h3 className="pay-tittle">Elija su medio de pago:</h3>
               <div className="card-pay">
                 <div className="card-pay-img">
                    <img src={nequi} alt="pay nequi"/>
                    <p>323-419-4018</p>
                 </div>
                 <div className="card-pay-form">
                    <input type="radio" className="inputPay" name="pay" value="nequi" />
                 </div>
               </div>

               <div className="card-pay">
                <div className="card-pay-img">
                   <img src={bancolombia} alt="pay bancolombia"/>
                   <p>843-0132-7802</p>
                </div>
                <div className="card-pay-form">
                   <input type="radio" className="inputPay" name="pay" value="bancolombia" />
                </div>
               </div>

               <div className="card-pay">
                <div className="card-pay-img">
                   <img src={efectivo} alt="pay chash"/>
                   <p>Efectivo</p>
                </div>
                <div className="card-pay-form">
                   <input type="radio" className="inputPago" name="pay" value="efectivo" />
                </div>
               </div>

            </div>

            <div className="theme">


            </div>

          </div>

            <div className="close-container">
              <i className="fas fa-times-circle btn-close-side-bar" onClick={hiddenSideBar}></i>
            </div>

        </aside>
    )
}
