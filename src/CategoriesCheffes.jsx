import React from 'react'
import {GiChefToque} from 'react-icons/gi'


const CategoriesCheffes = ({categoriesCheffes, filterCheffes}) => {
  return <div className='btn-container-cheffe'>
      {categoriesCheffes.map((price)=> {
        return <button className='btn' key={price} onClick={()=> filterCheffes(price)}><GiChefToque />{price}</button>
      })}
    </div>
}

export default CategoriesCheffes
