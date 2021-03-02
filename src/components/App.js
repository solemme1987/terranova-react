import { useState } from 'react';
import { AppRouter } from '../routers/AppRouter';
import { Context } from './context/Context';

function App() {

  const [categori, setCategori] = useState(1)
  const [categoriName, setCategoriName] = useState("")

  let dataContext={
      categori,//id e la categoria
      setCategori,//funcionpar el id e la categoria
      categoriName, //nombre de la categoria
      setCategoriName//funcion par el nombre de la categoria
  }

  return (
    <Context.Provider value={dataContext}>
       <AppRouter />
    </Context.Provider>
  );
}

export default App;
