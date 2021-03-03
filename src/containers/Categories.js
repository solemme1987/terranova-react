import React, { useContext, useState } from 'react'
import { BtnCategori } from '../components/BtnCategori';
// import {categories} from '../data/infoTerranova.json';

import {Context} from '../components/context/Context';


export const Categories = () => {

    const {setIdCategori,setCategoriName,categoriName,categories,setProductFinded} = useContext(Context);

    const [active, setActive] = useState(1)


    // Asigno el color active a la categoria 
    // y paso el id yel nombre al contex
    const handleActive=(categoriActived, nameCategori)=>{
        setActive(categoriActived);
        setIdCategori((idCategori)=>idCategori=categoriActived)
        setCategoriName((nameCat)=>nameCat=nameCategori)
        document.querySelector('#inputSearch').blur()
        setProductFinded(clear=>clear=[])

    }

    return (
        <div className="categoryBox" id="categoryBox">
            <h3 className="categoryTittle">Categorías</h3>
            <div className="listCategories">
               {
                    categories.map(({id, nameCat})=>(

                        <BtnCategori
                            key={id}
                            name={nameCat}
                            id={id}
                            handleActive={handleActive}
                            active={active}
                        />
                    ))
                }
            </div>
            {/* Si el nombre de la categoria viene vacio es por que es recomendado */}
            <h3 className="productTittleCat">{categoriName!=="" ? categoriName : 'Recomendados'}</h3>
        </div>
    )
}
