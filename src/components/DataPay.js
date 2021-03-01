import React from 'react'

export const DataPay = () => {
    return (
        <div className="dataPay">
            <div className="payGrid">
                <div className="rowPay">
                    <span className="payGridItem">Sub Total</span>
                    <span className="payGridItem">$61.000</span>
                </div>

                <div className="rowPay">
                    <span className="payGridItem">Iva 19%</span>
                    <span className="payGridItem">$11.590</span>
                </div>

                <div className="rowPay">
                    <span className="payGridItem">Costo Envío</span>
                    <span className="payGridItem">$2.000</span> 
                </div>

            </div>

            <div className="totalPay">
                <div className="rowTotal">
                    <span className="payGridItem">Total</span>
                    <span className="payGridItem">$60.000</span>
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
