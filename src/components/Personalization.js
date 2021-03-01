import React from 'react'

export const Personalization = () => {
    return (
        <div className="config-container">

               {/* OPCIONES DE PRODUCTO  */}
              <div className="config-option">

                  <span htmlFor="tomate">Sin tomate</span>

                  <div className="checkbox">
                     <input type="checkbox" name="tomate" className="" id="tomate"/>
                     <label htmlFor="tomate"></label>
                  </div>

              </div>

              <div className="config-option">

                  <span htmlFor="cebolla">Sin Cebolla</span>

                  <div className="checkbox">
                     <input type="checkbox" name="cebolla" className="" id="cebolla"/>
                     <label htmlFor="cebolla"></label>
                  </div>

              </div>

              <div className="config-option">

                  <span htmlFor="lechuga">Sin Lechuga</span>

                  <div className="checkbox">
                     <input type="checkbox" name="lechuga" className="" id="lechuga"/>
                     <label htmlFor="lechuga"></label>
                  </div>

              </div>

              <div className="config-option">

                  <span>Sin Salsas</span>

                  <div className="checkbox">
                     <input type="checkbox" name="sinSalsa" className="" id="sinSalsa"/>
                     <label htmlFor="sinSalsa"></label>
                  </div>

              </div>

               {/* <!-- TITULO SALSASS --> */}
              <div className="config-option-tittle">
                  <h3 className="option-tittle">Marca las salsas que deseas</h3>
                  <p>Maximo 3</p>
              </div>
                  {/* <!-- SALSAS --> */}
              <div className="config-option">

                  <span htmlFor="tomate">Salsa de Ajo</span>

                  <div className="checkbox">
                     <input type="checkbox" name="salsaAjo" className="" id="salsaAjo"/>
                     <label htmlFor="salsaAjo"></label>
                  </div>

              </div>

              <div className="config-option">

                  <span htmlFor="cebolla">Salsa Roja</span>

                  <div className="checkbox">
                     <input type="checkbox" name="salsaRoja" className="" id="salsaRoja"/>
                     <label htmlFor="salsaRoja"></label>
                  </div>

              </div>

              <div className="config-option">

                  <span htmlFor="lechuga">Salsa de la Casa</span>

                  <div className="checkbox">
                     <input type="checkbox" name="salsaCasa" className="" id="salsaCasa"/>
                     <label htmlFor="salsaCasa"></label>
                  </div>

              </div>

              <div className="config-option">

                  <span>Salsa Rosada</span>

                  <div className="checkbox">
                     <input type="checkbox" name="salsaRosada" className="" id="salsaRosada"/>
                     <label htmlFor="salsaRosada"></label>
                  </div>

              </div>

                 {/* <!--TITULO BEBIDAS --> */}
              <div className="config-option-tittle">
                  <h3 className="option-tittle">Marca tu Bebida</h3>
                  <p>El sabor preferido</p>
              </div>

              {/* <!-- BEBIDAS --> */}
              <div className="config-option">
                  <span>
                     Pepsi 350ml -
                     <span className="price-drink">$4.000</span>
                  </span>

                  <div className="checkbox-drink">
                     <button className="subs">-</button>
                     <span className="quantity">1</span>
                     <button className="add">+</button>
                  </div>
              </div>

              <div className="config-option">
                  <span>
                     Cocacola 350ml -
                     <span className="price-drink">$3.500</span>
                  </span>

                  <div className="checkbox-drink">
                     <button className="subs">-</button>
                     <span className="quantity">1</span>
                     <button className="add">+</button>
                  </div>
              </div>

              <div className="config-option">
                  <span>
                     Manzana 350ml -
                     <span className="price-drink">$3.500</span>
                  </span>

                  <div className="checkbox-drink">
                     <button className="subs">-</button>
                     <span className="quantity">1</span>
                     <button className="add">+</button>
                  </div>
              </div>

              <div className="config-option">
                  <span>
                     Jugo Hit -
                     <span className="price-drink">$2.000</span>
                  </span>

                  <div className="checkbox-drink">
                     <button className="subs">-</button>
                     <span className="quantity">1</span>
                     <button className="add">+</button>
                  </div>
              </div>

              {/* <!--TITULO DE ADICIONES --> */}
              <div className="config-option-tittle">
                  <h3 className="option-tittle">Suma tus Adiciones</h3>
                  <p>Como Prefieras</p>
              </div>

               {/* <!--ADICIONES--> */}
              <div className="config-option">
                  <span>
                     Queso -
                     <span className="price-drink">$2.000</span>
                  </span>

                  <div className="checkbox-drink">
                     <button className="subs">-</button>
                     <span className="quantity">2</span>
                     <button className="add">+</button>
                  </div>
              </div>

              <div className="config-option">
                  <span>
                     Papas -
                     <span className="price-drink">$2.500</span>
                  </span>

                  <div className="checkbox-drink">
                     <button className="subs">-</button>
                     <span className="quantity">3</span>
                     <button className="add">+</button>
                  </div>
              </div>

          </div>
    )
}
