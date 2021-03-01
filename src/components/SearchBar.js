import React from 'react'
import { useHistory } from 'react-router-dom'



export const SearchBar = ({clasN}) => {
    const history= useHistory();

    let setClass="";
    let tittle="";

    if(clasN==="searchBar carrito"){
       setClass=clasN;
       tittle="Pedido";
    }else{
       setClass="searchBar";

    }

    return (
        <div className={setClass} id="searchBar">
            <button onClick={()=>{history.goBack()}}className="btn-search-bar" id="back">
                <i className="fas fa-chevron-left"></i>
            </button>

            <div className="inputContainer">
                <input type="text" className="searchInput" />
            </div>


                <h3>{tittle}</h3>

                <button className="btn-search-bar " id="search" placeholder="Buscar Producto">
                  <i className="fas fa-search"></i>
                </button>


        </div>
    )
}
