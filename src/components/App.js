import { useState } from 'react';
import { AppRouter } from '../routers/AppRouter';
import { Context } from './context/Context';
import {infoProduct,categories} from '../data/infoTerranova.json'

function App() {

  const [idcategori, setIdCategori] = useState(1);
  const [categoriName, setCategoriName] = useState("");
  const [dataSearch, setDataSearch] = useState("");
  const [productFinded, setProductFinded] = useState([]);
  const [cart, setCart] = useState([]);


  let dataContext={
      idcategori,//id e la categoria
      setIdCategori,//funcionpar el id e la categoria
      categoriName, //nombre de la categoria
      setCategoriName,//funcion par el nombre de la categoria
      infoProduct, //data con todos los productos
      categories, //data de las categorias
      dataSearch, //Dato Buscado
      setDataSearch,//cambiar el dato buscado
      setProductFinded,
      productFinded,
      cart,
      setCart
  }


  return (
    <Context.Provider value={dataContext}>
       <AppRouter />
    </Context.Provider>
  );

}

export default App;
