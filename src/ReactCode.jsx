import React from 'react'
import {IoIosRestaurant} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import { Fade } from "react-awesome-reveal"
import imageMindMapping from '../public/images/FormationReact_Restaurant.svg'

const ReactCode = () => {
  return (
    <div id='about'>
      <Fade duration={3000}>
        <span className='center-cucina-icon'>
            <FaReact />
        </span>
        <p>
            Voici quelques détails du code 'front end' et des 'hooks' lors de ce projet:
        </p>
        <img src={imageMindMapping} className='img'/>
        <ul className='list-code-react'>
          <li>Créer une navbar; toggle de link, useRef, useState</li>
          <li>Créer un slider pour les cheffes; afficher les data d'un fichier, créer index</li>
          <li>Créer un menu avec filtre pour afficher les plats. Importer les items .map avec key, useState, .filter</li>
          <li>Créer aussi un 'dark mode' useGlobalContext, toggle d'un thème à l'autre avec le CSS</li>
          <li>Mise en production</li>
          <li>Création pour le plaisir d'y mettre une touche personnelle</li>
        </ul>
        </Fade>
    </div>
  )
}

export default ReactCode
