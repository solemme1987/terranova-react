import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../components/context/Context';


export const SearchBar = ({clasN}) => {

    const [classInput, setClassInput] = useState('searchInput')
    const [inputValue, setInputValue] = useState('');
    const {setDataSearch,infoProduct,setProductFinded } = useContext(Context);

    const history= useHistory();
    let setClass="";
    let tittle="";

    const showSearchBar=()=>{
        if(classInput==='searchInput'){
            setClassInput('searchInput active');
            document.querySelector('#inputSearch').focus()
        }else{
            setClassInput('searchInput');
            document.querySelector('#inputSearch').blur()
            setInputValue('')
        }
    }

    // if(document.querySelector('#inputSearch').blur()){
    //         console.log(document.querySelector('#inputSearch').value)
    // }

    // Esta confidicon if me elimna el boton buscar
    // en el componete del carrito ylo reemplaza por
    // un texto que dice pedido
    if(clasN==="searchBar carrito"){
        setClass=clasN;
       tittle="Pedido";
    }else{
        setClass="searchBar";
    }

    // CAPTURAMOS EL VALOR DEL DATO ABUSCAR

    const handleInputChange = (e) =>{

        setInputValue(e.target.value);
        setDataSearch((value)=>value=inputValue)

        let finded=[];
        // dato abuscar
        let searched=e.target.value.toLowerCase();

        if(e.target.value.length >0 && e.target.value!==' '){
           for (let itemProduct of infoProduct){

               let nameItem=itemProduct.nameProduct.toLowerCase();

                if(nameItem.indexOf(searched)!== -1){

                     finded.push(itemProduct)

                 }else{
                    //  console.log('No se encrontró nada')
                 }


           }
        //    console.log(finded)
        }else{
            console.log('Esta vacio el campo')
            finded=[];
        }

        //    cargo los producstos buscados en el context
        setProductFinded((listFinded)=>listFinded=[...finded]);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <div className={setClass} id="searchBar">
            <button onClick={()=>{history.goBack()}}className="btn-search-bar" id="back">
                <i className="fas fa-chevron-left"></i>
            </button>

            <div className="inputContainer">
               <form onSubmit={handleSubmit}>
                    <input type="text"
                        className={classInput}
                        value={inputValue}
                        id="inputSearch"
                        onChange={handleInputChange}
                    />
                </form>
            </div>


                <h3>{tittle}</h3>

                <button className="btn-search-bar"
                        id="search"
                        placeholder="Buscar Producto"
                        onClick={showSearchBar}
                >
                  <i className="fas fa-search"></i>
                </button>


        </div>
    )
}
