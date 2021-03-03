import React, { useContext } from 'react'
import { Context } from './context/Context'



export const DataPay = () => {

const {cart} = useContext(Context)
let subtotal=0;
let total= 0;
let envio= 2000;
let iva=0;

if(cart.length>0){
    cart.forEach(({totalCart,quantity,price})=> {

         subtotal+=(quantity*price)

    });
    iva=(subtotal*19)/100;
    total+= subtotal+envio+iva;
}

// formatear moneda
const formatter = new Intl.NumberFormat('es-CO',{
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

    return (
        <div className="dataPay">
            <div className="payGrid">
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
                    <span className="payGridItem">{formatter.format(subtotal>0 ? envio : 0)}</span> 
                </div>

            </div>

            <div className="totalPay">
                <div className="rowTotal">
                    <span className="payGridItem">Total</span>
                    <span className="payGridItem">{formatter.format(total>0 ? total : 0)}</span>
                </div>
                <div className="payButonBox">
                    <button>
                        Enviar Pedido
                        <i className="fab fa-whatsapp"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
