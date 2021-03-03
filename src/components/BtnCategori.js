import React from 'react'

export const BtnCategori = ({name,id,active,handleActive}) => {
    return (
        <button
          className={id===active ? "btn-list-item active" : "btn-list-item"}
          active={active}
          onClick={()=>handleActive(id,name)}
        >
          {name}
        </button>
    )
}

