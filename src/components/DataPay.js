import React, { useContext } from 'react'
import { Context } from './context/Context'



export const DataPay = () => {

    const formatter = new Intl.NumberFormat('es-CO',{
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

const {cart,formPay,setShowSideBar} = useContext(Context)

let subtotal=0;
let total= 0;
let deliveri= 2000;
let iva=0;

let dataSels='';
if(cart.length>0){
    cart.forEach(({nameProduct,quantity,price})=> {
         subtotal+=(quantity*price);
         dataSels+=`%20${nameProduct}:%20*(${quantity})*%20`

    });
    iva=(subtotal*19)/100;
    total+= subtotal+deliveri+iva;
}
let detailSel=`https://api.whatsapp.com/send?phone=573043393781&text=%20*NUEVO%20PEDIDO:*%20${dataSels}%20SUBTOTAL:%20*${formatter.format(subtotal).trim()}*%20IVA:%20*${formatter.format(iva).trim()}*%20ENVIO:%20*${formatter.format(deliveri).trim()}*%20PAGA%20CON:%20*${formPay}*%20TOTAL:%20*${formatter.format(total).trim()}*`;
// formatear moneda


const showSideBar=()=>{
    setShowSideBar(show=>show='side-bar active')
}

    return (
        <div className="dataPay">
            <div className="payGrid">
            <div className="rowPay">
                    <span className="payGridItem">Paga Con</span>
                    <span className="payGridItem formPay" onClick={showSideBar}>{formPay!==""? formPay :'Selec'}</span>
                </div>
                <div className="rowPay">
                    <span className="payGridItem">Sub Total</span>
                    <span className="payGridItem">{formatter.format(subtotal>0 ? subtotal : 0)}</span>
                </div>

                <div className="rowPay">
                    <span className="payGridItem">Iva 19%</span>
                    <span className="payGridItem">{formatter.format(subtotal>0 ? iva : 0)}</span>
                </div>

                <div className="rowPay">
                    <span className="payGridItem">Costo Envío</span>
                    <span className="payGridItem">{formatter.format(subtotal>0 ? deliveri : 0)}</span>
                </div>

            </div>

            <div className="totalPay">
                <div className="rowTotal">
                    <span className="payGridItem">Total</span>
                    <span className="payGridItem">{formatter.format(total>0 ? total : 0)}</span>
                </div>
                <div className="payButonBox">
                     <a href={detailSel}>
                        <button>
                            Enviar Pedido
                            <i className="fab fa-whatsapp"></i>
                        </button>
                      </a>

                </div>
            </div>
        </div>
    )
}
