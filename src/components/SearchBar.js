import React from 'react'
import { useHistory } from 'react-router-dom'


export const SearchBar = () => {
    const history= useHistory();
    return (
        <div className="searchBar" id="searchBar">
            <button onClick={()=>{history.goBack()}}className="btn-search-bar" id="back">
                <i className="fas fa-chevron-left"></i>
            </button>

            <div className="inputContainer">
                <input type="text" className="searchInput" />
            </div>

            <button className="btn-search-bar" id="search" placeholder="Buscar Producto">
               <i className="fas fa-search"></i>
            </button>
        </div>
    )
}
