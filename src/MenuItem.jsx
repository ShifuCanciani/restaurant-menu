import React from 'react'
import { Fade, Zoom } from "react-awesome-reveal"
import {GiChefToque} from 'react-icons/gi'

const MenuItem = ({img, title,price,desc, category}) => {
  return (
    <article className='menu-item'>
      <Fade duration={3000} triggerOnce={true}>
        <span className='item-price'><GiChefToque/>{price}</span>
      </Fade>
      <Zoom duration={3000} triggerOnce={true}>
        <img src={img} alt={title} className='img' />
      </Zoom>
      <span><h6 className='item-price'>{category}</h6></span>

      <div className='item-info'>
        <header>
            <h5>{title}</h5>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  )
}

export default MenuItem
