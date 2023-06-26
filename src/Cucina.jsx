import React from 'react'
import {IoIosRestaurant} from 'react-icons/io'
import { Fade } from "react-awesome-reveal"

const Cucina = () => {
  return (
    <div id='about'>
      <Fade duration={3000}>
        <span className='center-cucina-icon'>
            <IoIosRestaurant />
        </span>
        <p>
            Voici la présentation d'un restaurant inspiré par de Grandes Cheffes. Parmis, ceux de qui j'ai pu savourer les plats, de l'entrée au dessert.
            Qui sait si un jour ce projet se réalisera, mais pour l'instant, je vous laisse découvrir leur créations et lire leur biographie.

        </p>
        </Fade>
    </div>
  )
}

export default Cucina
